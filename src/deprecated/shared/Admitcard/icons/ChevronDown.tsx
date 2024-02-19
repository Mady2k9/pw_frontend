const ChevronDown = ({ ...props }) => {
  const height = props.height || 24;
  return (
    <svg
      viewBox={`0 0 ${height} ${height}`}
      width={height + ''}
      height={height + ''}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
};

export default ChevronDown;
