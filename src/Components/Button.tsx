import React from "react";
import { StylesDefinition } from "../types";
import useStyles from "../Hooks/useStyles";

interface IProps {
  onClick: () => void;
  disabled?: boolean;
  label: string;
  fullWidth?: boolean;
  loading?: boolean;
  loadingLabel?: string;
}

const stylesDefinition: StylesDefinition = {
  root: {
    default: {
      margin: 8,
      color: "white",
      backgroundColor: "#023E8A",
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 8,
      paddingBottom: 8,
      borderRadius: 42,
      cursor: "pointer",
      zIndex: 2,
      position: "relative",
      textAlign: "center",
    },
  },
  disabled: {
    default: {
      opacity: 0.5,
      cursor: "default",
    },
  },
};

export default function Button({ label, onClick, disabled, fullWidth, loading, loadingLabel }: IProps) {
  const styles = useStyles(stylesDefinition);
  const disabledStyle = disabled || loading ? styles.disabled : {};
  return (
    <div onClick={disabled || loading ? undefined : onClick} style={{ ...styles.root, ...disabledStyle, width: fullWidth ? "calc(100% - 52px)" : "auto" }}>
      {loading ? loadingLabel ?? "Načítání..." : label}
    </div>
  );
}
