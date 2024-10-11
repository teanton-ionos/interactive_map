interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      <path
        id="Restroom"
        className={`${className} object`}
        d="M608 234H634V288.75H554.5V177H584.5V194.5V197H587H605.5V231.5V234H608Z"
        onClick={handleObjectClick}
      />
      <path
        id="North Elevator Entrance"
        className={`${className} object`}
        d="M33.225 368.014l158.276-.11.083 265.887-158.45-.03.091-265.747z"
        onClick={handleObjectClick}
      />
      <path
        id="South Elevator Entrance"
        className={`${className} object`}
        d="M1305.166 292.446l119.546.21-.043 111.717-119.492-.035-.011-111.892z"
        onClick={handleObjectClick}
      />
      <ellipse
        id="Entrance"
        cx={1157.655}
        cy={1072.459}
        rx={57}
        ry={57}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
    </g>
  );
}

export default Objects;
