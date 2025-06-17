export default function IndianFlag() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of India"
      role="img"
    >
      {/* Saffron */}
      <rect width="900" height="200" y="0" fill="#ff9933" />
      {/* White */}
      <rect width="900" height="200" y="200" fill="#fff" />
      {/* Green */}
      <rect width="900" height="200" y="400" fill="#138808" />
      {/* Ashoka Chakra */}
      <g>
        <circle
          cx="450"
          cy="300"
          r="60"
          fill="none"
          stroke="#054187"
          strokeWidth="6"
        />
        {[...Array(24)].map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x1 = 450 + 0 * Math.cos(angle);
          const y1 = 300 + 0 * Math.sin(angle);
          const x2 = 450 + 60 * Math.cos(angle);
          const y2 = 300 + 60 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#054187"
              strokeWidth="2"
            />
          );
        })}
        <circle cx="450" cy="300" r="6" fill="#054187" />
      </g>
    </svg>
  );
}
