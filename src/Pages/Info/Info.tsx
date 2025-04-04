import React from "react";
import useStyles from "../../Hooks/useStyles";
import { useNavigate } from "react-router-dom";

export default function Info() {
  // TODO whole page
  const styles = useStyles({
    button: {
      default: {
        width: "calc(100% - 36px)",
        marginBottom: 32,
        marginTop: 32,
        fontSize: "2.5rem",
        color: "white",
        backgroundColor: "#023E8A",
        padding: 18,
        borderRadius: 42,
        cursor: "pointer",
        zIndex: 2,
        position: "relative",
        textAlign: "center",
      },
      small: {
        width: "calc(100% - 24px)",
        padding: 12,
        marginTop: 22,
        marginBottom: 22,
        textAlign: "center",
      },
    },
  });
  const nav = useNavigate();

  return (
    <>
      <div style={{ width: "min(1250px, 98vw)", margin: "auto", padding: 0, paddingTop: 32 }}>
        <p>Podrobné informace o hře a jejím průběhu spolu s jejími pravidly budou co nejdříve zveřejněny na této stránce. </p>
        <div style={styles.button} onClick={() => nav("/")}>
          Zpět na hlavní stránku
        </div>
      </div>
    </>
  );
}
