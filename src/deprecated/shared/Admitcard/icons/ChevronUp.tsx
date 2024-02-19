const ChevronUp = ({ ...props }) => {
  const height = 24;
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
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
};

export default ChevronUp;
