import { Styles, StylesDefinition } from "../types";
import useBreakpoints from "./useBreakpoints";

const useStyles = (stylesDefinition: StylesDefinition) => {
  const size = useBreakpoints();

  const res: Styles = {};
  for (const [key, value] of Object.entries(stylesDefinition)) {
    res[key] = { ...value.default, ...(size === "medium" || size === "small" ? value.medium || {} : {}), ...(size === "small" ? value.small || {} : {}) };
  }

  return res;
};

export default useStyles;
