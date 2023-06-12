export const DynamicColor = ({ percentage }) => {
  const calculateColor = () => {
    const maxPercentage = 100;
    const minPercentage = 0;
    const startColor = [255, 0, 0]; // Red
    const endColor = [0, 255, 0]; // Green

    const normalizedPercentage =
      (percentage - minPercentage) / (maxPercentage - minPercentage);

    const color = startColor.map((startValue, index) => {
      const endValue = endColor[index];
      const interpolatedValue = Math.round(
        startValue + normalizedPercentage * (endValue - startValue)
      );
      return interpolatedValue;
    });

    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  };

  const colorStyle = {
    fontWeight: 700,
    color: calculateColor(),
  };

  return <span style={colorStyle}>{percentage}%</span>;
};
