import React from "react";
import { StylesDefinition } from "../types";
import useStyles from "../Hooks/useStyles";

interface IProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: React.HTMLInputTypeAttribute;
}

const stylesDefinition: StylesDefinition = {
  root: {
    default: {
      width: "100%",
    },
  },
  input: {
    default: {
      margin: 8,
      marginTop: 4,
      width: "calc(100% - 32px)",
      border: "none",
      outline: "none",
      backgroundColor: "#d3d3d3",
      paddingLeft: 16,
      paddingTop: 8,
      paddingBottom: 8,
      borderRadius: 16,
      fontFamily: "inherit",
    },
  },
  label: {
    default: {
      margin: 8,
      width: "calc(100% - 32px)",
      border: "none",
      outline: "none",
      paddingLeft: 8,
      color: "#023E8A",
      fontSize: "0.8rem",
    },
  },
};

export default function TextField({ label, onChange, value, type }: IProps) {
  const styles = useStyles(stylesDefinition);

  return (
    <div style={styles.root}>
      <label style={styles.label}>{label}</label>
      <input placeholder={label} type={type || "text"} id="input" style={styles.input} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
