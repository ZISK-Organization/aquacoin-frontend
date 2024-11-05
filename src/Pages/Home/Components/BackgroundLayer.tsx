import React from "react";
import informationBg from "../../../img/infoBg.avif";
import logo from "../../../img/logoTextRight.svg";
import useStyles from "../../../Hooks/useStyles";
import useScroll from "../../../Hooks/useScroll";
import useDimensions from "../../../Hooks/useDimensions";
import stylesDefinition from "./styles/BackgroundLayerStyles";
import useBreakpoints from "../../../Hooks/useBreakpoints";

export default function IntroPanel() {
  const styles = useStyles(stylesDefinition);
  const scroll = useScroll();
  const { height } = useDimensions();
  const size = useBreakpoints();

  return (
    <>
      {scroll.y <= height ? (
        <div style={styles.root}>
          <img src={logo} alt="logo" style={styles.logo} />
          <div style={styles.text}>
            Šifrovačka jak ji ještě neznáte!
            <br />
            <div style={styles.button} onClick={() => alert("Registrace bude spuštěna na jaře 2025")}>
              Registruj se!
            </div>
          </div>
        </div>
      ) : (
        <div style={{ ...styles.root, backgroundImage: `url(${informationBg})` }}>
          <div style={styles.title}>Co vše je potřeba vědět?</div>
          <div style={styles.cardsContainer}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>Kdy?</div>
              <div style={styles.cardContent}>
                V sobotu
                <br />
                10. května 2025
              </div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardHeader}>Kde?</div>
              <div style={styles.cardContent}>
                Na Prýglu
                <br />
                (Breněnské přehradě)
              </div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardHeader}>Pro koho?</div>
              <div style={styles.cardContent}>
                Pro tým 4 až 5 lidí
                <br />
                Alespoň 1 z nich měl 18 let
              </div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardHeader}>Na jak dlouho?</div>
              <div style={styles.cardContent}>
                Jde o denní šfifrovačku
                <br />
                Začíná ráno, končí k večeru
              </div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardHeader}>Za kolik?</div>
              <div style={styles.cardContent}>
                Odhadovaná cena je kolem 1000&nbsp;Kč/tým, bude včas upřesněna
                {size !== "small" && (
                  <>
                    <br />
                    Cena zahrnuje půjčovné lodě, organizátoři pracují bez nároku na odměnu
                  </>
                )}
              </div>
            </div>
            {size !== "small" && (
              <div style={styles.card}>
                <div style={styles.cardHeader}>Proč jít?</div>
                <div style={styles.cardContent}>
                  Proč ne!
                  <br />
                  Bude to zábava
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
