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
        d="M249.5 306.5V334.25H238.5V306.5H249.5Z"
        onClick={handleObjectClick}
      />
      <path
        id="South Elevator Entrance"
        className={`${className} object`}
        d="M567.5 305.5V333.25H556.5V305.5H567.5Z"
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
