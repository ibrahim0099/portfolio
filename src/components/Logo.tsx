// Animated "IR" monogram: rotating dashed hex ring + counter-orbiting nodes (echoes the 3D core in the hero)
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Ibrahim Ramzan logo" className="group">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#5eead4" /><stop offset=".55" stopColor="#a78bfa" /><stop offset="1" stopColor="#f0abfc" />
        </linearGradient>
      </defs>
      <g style={{ transformOrigin: "24px 24px", animation: "spin 14s linear infinite" }}>
        <polygon points="24,3 42,13.5 42,34.5 24,45 6,34.5 6,13.5" stroke="url(#lg)" strokeWidth="1.5" strokeDasharray="5 4" />
      </g>
      <polygon points="24,8 38,16 38,32 24,40 10,32 10,16" fill="#0c0e1c" stroke="url(#lg)" strokeWidth="1.2" />
      <text x="24" y="29.5" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16" fill="url(#lg)">IR</text>
      <g style={{ transformOrigin: "24px 24px", animation: "spin 5s linear infinite reverse" }}>
        <circle cx="24" cy="3" r="2.2" fill="#5eead4" />
      </g>
      <g style={{ transformOrigin: "24px 24px", animation: "spin 8s linear infinite" }}>
        <circle cx="42" cy="34.5" r="1.8" fill="#f0abfc" />
      </g>
    </svg>
  );
}
