import React, { useState } from "react";
import { StylesDefinition } from "../types";
import useStyles from "../Hooks/useStyles";
import { useNavigate } from "react-router-dom";

const stylesDefinition: StylesDefinition = {
  opener: {
    default: {
      color: "white",
      backgroundColor: "#023E8A",
      padding: 8,
      borderRadius: "50%",
      position: "fixed",
      top: "2vh",
      right: "2vw",
      zIndex: 2,
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
  container: {
    default: {
      position: "fixed",
      top: "0",
      right: "0",
      width: "min(100%,280px)",
      height: "100%",
      backgroundColor: "rgba(255,255,255,0.75)",
      zIndex: 3,
    },
  },
  menuItem: {
    default: {
      padding: 8,
      fontSize: "1.2rem",
      cursor: "pointer",
    },
  },
  closer: {
    default: {
      position: "fixed",
      left: 0,
      right: 0,
      width: "calc(100vw - min(100%,280px))",
      height: "100%",
      backgroundColor: "transparent",
      zIndex: 3,
    },
  },
};

export default function Menu() {
  const [open, setOpen] = useState(false);

  const styles = useStyles(stylesDefinition);
  const nav = useNavigate();

  return (
    <>
      <div style={styles.opener} onClick={() => setOpen(true)}>
        ☰
      </div>
      <div style={{ ...styles.container, display: open ? "block" : "none" }}>
        <div onClick={() => nav("/")} style={styles.menuItem}>
          Úvod
        </div>
        <div onClick={() => nav("/Info")} style={styles.menuItem}>
          Podrobné informace
        </div>
        <div onClick={() => nav("/Archive")} style={styles.menuItem}>
          Proběhlé ročníky
        </div>
        <hr />
        <div onClick={() => nav("/Registration")} style={styles.menuItem}>
          Registrace týmu
        </div>
        <div onClick={() => nav("/Login")} style={styles.menuItem}>
          Přihlášení
        </div>
      </div>
      <div style={{ ...styles.closer, display: open ? "block" : "none" }} onClick={() => setOpen(false)}></div>
    </>
  );
}
