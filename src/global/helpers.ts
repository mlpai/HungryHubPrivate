/**
 *
 * @param color
 * @param percentage
 * @returns transparentColor
 */
export const getTransparentColor = (
  color: string,
  percentage: string | number = 1
): string => {
  const opacityDecimal = Math.max(
    0,
    Math.min(1, parseFloat(percentage?.toString()))
  );
  const opacityHex = Math.round(opacityDecimal * 255)
    ?.toString(16)
    .toUpperCase();
  const formattedOpacity =
    opacityHex.length === 1 ? '0' + opacityHex : opacityHex;
  return `${color}${formattedOpacity}`;
};

/**
 *
 * @param number
 * @param maxNum
 * @returns positive number withing range
 */
export const getPositiveNumber = (number: number, maxNum: number): number => {
  return Math.max(0, Math.min(maxNum, number));
};
