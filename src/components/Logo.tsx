interface LogoProps {
  size?: number;
}

/**
 * Original geometric "MR" monogram — an angular block mark built from two
 * overlapping chevrons, echoing the "M" and "R" of Moksha Rode.
 * Intentionally distinct from any third-party brand mark.
 */
export default function Logo({ size = 28 }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      aria-label="Moksha Rode logo"
    >
      <path
        d="M0 256 L0 40 L48 40 L92 132 L128 56 L164 132 L208 40 L256 40 L256 256 L208 256 L208 132 L176 200 L136 200 L104 132 L104 256 L48 256 L48 160 L0 256 Z"
        fill="white"
        fillRule="evenodd"
        clipRule="evenodd"
        opacity="0"
      />
      <path
        d="M0 40 L52 40 L128 132 L204 40 L256 40 L256 92 L180 184 L256 184 L256 256 L204 256 L128 164 L52 256 L0 256 L0 184 L76 184 L0 92 Z"
        fill="white"
      />
    </svg>
  );
}