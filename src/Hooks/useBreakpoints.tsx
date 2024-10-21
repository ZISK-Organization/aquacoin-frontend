import useDimensions from "./useDimensions";

export const breakpoints = {
  medium: 1280,
  small: 886,
};

const useBreakpoints = () => {
  const { width } = useDimensions();

  return width < breakpoints.small ? "small" : width < breakpoints.medium ? "medium" : "large";
};

export default useBreakpoints;
