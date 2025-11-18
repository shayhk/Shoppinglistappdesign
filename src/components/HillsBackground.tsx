export function HillsBackground() {
  return (
    <div className="absolute top-0 left-0 right-0 h-80 overflow-hidden pointer-events-none">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-green-50 to-transparent" />
      
      {/* Back hill */}
      <svg 
        className="absolute bottom-0 left-0 right-0 w-full h-64" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill="rgb(134, 239, 172)" 
          fillOpacity="0.6"
          d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,133.3C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      
      {/* Front hill */}
      <svg 
        className="absolute bottom-0 left-0 right-0 w-full h-48" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill="rgb(34, 197, 94)" 
          fillOpacity="0.8"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}
