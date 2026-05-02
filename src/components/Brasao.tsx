export function Brasao({
  size = 100,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <linearGradient id="brasao-travertino" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0e6d2" />
          <stop offset="100%" stopColor="#c8b896" />
        </linearGradient>
        <linearGradient id="brasao-bordeaux" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5e1a22" />
          <stop offset="100%" stopColor="#2e0a10" />
        </linearGradient>
        <linearGradient id="brasao-ouro" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0dfa8" />
          <stop offset="40%" stopColor="#c9a96b" />
          <stop offset="100%" stopColor="#7a6038" />
        </linearGradient>
        <linearGradient id="brasao-ouro-escuro" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a08350" />
          <stop offset="100%" stopColor="#5a4528" />
        </linearGradient>
        <filter id="brasao-shadow" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="2" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.55" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="512" height="512" rx="100" fill="url(#brasao-travertino)" />
      <path
        d="M 256 113 L 425 405 L 87 405 Z"
        fill="url(#brasao-bordeaux)"
        stroke="url(#brasao-ouro)"
        strokeWidth="3"
      />
      <path
        d="M 256 138 L 405 395 L 107 395 Z"
        fill="none"
        stroke="url(#brasao-ouro-escuro)"
        strokeWidth="0.8"
        opacity="0.55"
      />

      <g transform="translate(256, 312)" filter="url(#brasao-shadow)">
        {/* Letra D */}
        <g transform="translate(-53, 0) scale(0.6)">
          <path
            d="M -55 -100 L -55 -90 L -45 -90 L -45 90 L -55 90 L -55 100 L 5 100 C 50 100, 80 65, 80 0 C 80 -65, 50 -100, 5 -100 Z M -25 -85 L -25 85 L 0 85 C 35 85, 52 50, 52 0 C 52 -50, 35 -85, 0 -85 Z"
            fillRule="evenodd"
            fill="url(#brasao-ouro)"
          />
        </g>
        {/* Letra B */}
        <g transform="translate(53, 0) scale(0.6)">
          <path
            d="M -55 -100 L -55 -90 L -45 -90 L -45 90 L -55 90 L -55 100 L 5 100 C 48 100, 70 78, 70 50 C 70 25, 55 8, 35 0 C 50 -8, 60 -25, 60 -45 C 60 -78, 40 -100, 0 -100 Z M -25 -85 L -25 -10 L 0 -10 C 25 -10, 35 -25, 35 -45 C 35 -68, 22 -85, -2 -85 Z M -25 12 L -25 85 L 5 85 C 32 85, 45 70, 45 48 C 45 26, 30 12, 5 12 Z"
            fillRule="evenodd"
            fill="url(#brasao-ouro)"
          />
        </g>
      </g>

      <text
        x="256"
        y="461"
        fontFamily="Georgia, 'Cinzel', serif"
        fontSize="20"
        fontWeight="600"
        fill="url(#brasao-ouro-escuro)"
        textAnchor="middle"
        letterSpacing="14"
        opacity="0.88"
      >
        A·J·P·D·B
      </text>
    </svg>
  );
}
