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
      <path
        id="14.6, 14.7"
        className={`${className} object`}
        d="M161.383 188.713L161.304 188.775L161.24 188.85L135.338 219.151L58.4244 163.793L78.2546 138.159L108.152 107.763L135.294 88.3758L193.105 163.824L161.383 188.713Z"
        onClick={handleObjectClick}
      />
      <path
        id="14.1"
        className={`${className} object`}
        d="M633.604 188.142L633.541 188.065L633.464 188.002L602.716 162.632L656.723 84.7644L682.7 104.144L713.612 133.507L733.471 160.306L659.043 219.425L633.604 188.142Z"
        onClick={handleObjectClick}
      />
      <path
        id="14.2"
        className={`${className} object`}
        d="M633.117 453.287L633.196 453.225L633.26 453.15L659.162 422.849L736.076 478.207L716.245 503.841L686.348 534.237L659.206 553.624L601.395 478.176L633.117 453.287Z"
        onClick={handleObjectClick}
      />
      <path
        id="14.3"
        className={`${className} object`}
        d="M566.348 498.88L598.746 480.299L656.551 554.27L634.488 569.139L611.407 581.161L566.348 498.88Z"
        onClick={handleObjectClick}
      />
      <path
        id="14.4"
        className={`${className} object`}
        d="M585.095 595.08L558.606 603.749L526.765 517.043L565.543 500.287L608.166 582.103L585.095 595.08Z"
        onClick={handleObjectClick}
      />
      <path
        id="14.5"
        className={`${className} object`}
        d="M82.2382 499.823L61.443 474.191L131.864 423.332L158.262 452.175L158.315 452.232L158.375 452.281L190.118 477.675L136.826 548.568L110.664 527.251L82.2382 499.823Z"
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
