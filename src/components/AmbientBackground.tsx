/**
 * Full-bleed ambient background.
 *
 * The original brief called for a personal showreel video. This portfolio
 * doesn't have one yet, so this renders a generative animated backdrop
 * instead of hot-linking a stranger's video asset. Once you have your own
 * reel, drop the file in /public and swap this component for a <video> tag,
 * or point it at the URL in VITE_INTRO_VIDEO_URL (see .env.example).
 */
export default function AmbientBackground() {
  const introVideoUrl = import.meta.env.VITE_INTRO_VIDEO_URL as string | undefined;

  if (introVideoUrl) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]"
        autoPlay
        muted
        loop
        playsInline
        src={introVideoUrl}
      />
    );
  }

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-black">
      <div className="ambient-blob ambient-blob-a" />
      <div className="ambient-blob ambient-blob-b" />
      <div className="ambient-blob ambient-blob-c" />
      <div className="ambient-blob ambient-blob-d" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
    </div>
  );
}