// Verify a rendered store cut. Content, licensing and the poster still need a visual review.
// node scripts/verify-store.mjs out/886x1920.mp4 [out/store-specs.json]
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
const [file, report] = process.argv.slice(2);
if (!file) throw new Error('usage: node scripts/verify-store.mjs <store.mp4> [report.json]');
const probe = JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', file], { encoding: 'utf8' }));
const videos = probe.streams.filter((s) => s.codec_type === 'video');
const audios = probe.streams.filter((s) => s.codec_type === 'audio');
const v = videos[0] || {}, a = audios[0] || {};
const fps = (r) => { const [n, d = 1] = String(r).split('/').map(Number); return n / d; };
const checks = [
  ['one video and one stereo audio track', videos.length === 1 && audios.length === 1],
  ['886 × 1920 portrait', v.width === 886 && v.height === 1920],
  ['15–30 seconds', +probe.format.duration >= 15 && +probe.format.duration <= 30],
  ['constant frame rate, at most 30 fps', fps(v.avg_frame_rate) > 0 && fps(v.avg_frame_rate) <= 30 && fps(v.avg_frame_rate) === fps(v.r_frame_rate)],
  ['H.264 High, level ≤4.0', v.codec_name === 'h264' && v.profile === 'High' && v.level <= 40],
  ['progressive, yuv420p', v.field_order === 'progressive' && v.pix_fmt === 'yuv420p'],
  ['video 10–12 Mbps', +v.bit_rate >= 10_000_000 && +v.bit_rate <= 12_000_000],
  ['AAC LC stereo, 44.1/48 kHz', a.codec_name === 'aac' && a.profile === 'LC' && a.channels === 2 && a.channel_layout === 'stereo' && [44100, 48000].includes(+a.sample_rate)],
  ['audio about 256 kbps (240–272)', +a.bit_rate >= 240_000 && +a.bit_rate <= 272_000],
  ['MP4 container under 500 MB', probe.format.format_name.split(',').includes('mp4') && +probe.format.size < 500_000_000],
  ['tracks enabled by default', v.disposition?.default === 1 && a.disposition?.default === 1],
];
const result = { file, passed: checks.every(([, pass]) => pass), checks: checks.map(([rule, pass]) => ({ rule, pass })), probe };
if (report) writeFileSync(report, JSON.stringify(result, null, 2) + '\n');
for (const [rule, pass] of checks) console.log(`${pass ? 'PASS' : 'FAIL'} ${rule}`);
process.exitCode = result.passed ? 0 : 1;
