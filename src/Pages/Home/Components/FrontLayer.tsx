import React from "react";
import useStyles from "../../../Hooks/useStyles";
import illustrationColumn1 from "../../../img/bottleIllustration.avif";
import illustrationColumn2 from "../../../img/waterIllustration.avif";
import illustrationColumn3 from "../../../img/boatIllustration.avif";
import styleDefinition from "./styles/FrontLayerStyles";
import useBreakpoints from "../../../Hooks/useBreakpoints";
import ZISKIntro from "../../../img/ZISKIntro.avif";
import OldrichHalabala from "../../../img/OldrichHalabala.avif";
import StastnyJakub from "../../../img/StastnyJakub.avif";
import KramarBor from "../../../img/KramarBor.avif";
import { useNavigate } from "react-router-dom";

export default function FrontLayer() {
  const styles = useStyles(styleDefinition);
  const size = useBreakpoints();

  const nav = useNavigate();

  return (
    <>
      <div style={styles.placeHolder}></div>
      <div style={{ ...styles.root, minHeight: "calc(100vh - 64px)" }}>
        <div style={styles.container}>
          <div style={styles.column}>
            <div style={styles.headline}>Šifrovačka, kde si sáhneš až na dno!</div>
            <img src={illustrationColumn1} style={{ width: "50%", marginLeft: "49%", marginTop: 42 }} alt="" />
            <div style={styles.date}>24. května 2025</div>
          </div>
          <div style={styles.column}>
            <div style={styles.header}>Vodní Šifrovačka?!</div>
            <div style={styles.text}>
              Nebaví vás šifrovačky, které vás nutí chodit z kóty na kótu? Už jste byli na tolika šifrovačkách, že vám začinají připadat všechny stejné a chtěli byste změnu? Nebo prostě jen rádi šifrujete a máte rádi vodu? Pak je AQUACoin přesně pro vás!
              Kromě skvělých šifer a spousty zábavy na vodě vám můžeme garantovat, že jsme jedinou českou šifrovačkou s trasou s&nbsp;0&nbsp;m převýšení.
            </div>
            {size === "large" && <img src={illustrationColumn2} alt="" />}
            <div style={styles.button} onClick={() => nav("/Info")}>
              Podrobné informace
            </div>
          </div>
          <div style={styles.column}>
            <img src={illustrationColumn3} style={{ marginBottom: 32 }} alt="" />
            <div style={styles.header}>Co je AQUACoin?</div>
            <div style={styles.text}>
              AQUACoin je dení, lineární šifrovací hra, která se celá odehrává na vodní ploše a všechny přesuny jsou tak uskutečněny výhradně na lodích. Každý tým dostane zapůjčenou loď spolu s první šifrou, která prozradí lokaci šifry následující, až se
              postupnou plavbou od jedné šifry k další dostane až do cíle. Šifry ve hře budou spíše jednodušší až středně těžké, takže je hra vhodná jak pro úplné začátečníky, tak pro pokročilé týmy. Hra bude obsahovat nápovědy i deady.
            </div>
          </div>
        </div>
      </div>
      <div style={styles.placeHolder2}></div>
      <div style={{ ...styles.root, paddingTop: 0 }}>
        <img src={ZISKIntro} alt="" />
        <div style={styles.container}>
          <div style={{ ...styles.headline, margin: 22, marginBottom: 0 }}>Znáte ZISK?</div>
          <div style={{ ...styles.text, margin: 22 }}>
            Jeslikož většina organizátorů organizuje i další akce, neodpustili jsme si drobnou propagaci. ZIKS je programátorská soutěž primárně pro studenty středních škol a bakalářského studia, ale vítáni jsou všichni, které alespoň trochu baví
            informatika. Na rozdíl od většiny ostatních podobných soutěží se snažíme o tematickou pestrost úloh přes všechny možné popdobory informatiky. Kromě klasických algoritmických úloh se můžete těšit na všechny možné úlohy od výroby hardwaru a
            programování operačních systémů, přes databáze a hackovací úlohy až ke computer visionu, umělé inteligenci nebo programování kvantových počítačů a monohem více. Naše úlohy jsou navíc pravidelně odstupňované dle obtížnosti, takže si zábavu
            najdou jak středně pokročilí programátoři, tak lidi, co pořádné výzvy. Tak neváhej a začni řešit na stránce{" "}
            <a href="https://zisk-go.com/" target="_blank" rel="noreferrer">
              https://zisk-go.com/
            </a>
            .
          </div>
        </div>
      </div>
      <div style={{ ...styles.root, textAlign: "center" }}>
        <div style={{ ...styles.title, marginTop: 32 }}>Organizátoři</div>
        <div style={styles.container}>
          <div style={styles.column}>
            <img src={StastnyJakub} alt="" style={styles.cardImage} />
            <div style={styles.cardHeader}>Jakub Šťastný</div>
          </div>
          <div style={styles.column}>
            <img src={OldrichHalabala} alt="" style={styles.cardImage} />
            <div style={styles.cardHeader}>Oldřich Halabala</div>
          </div>
          <div style={styles.column}>
            <img src={KramarBor} alt="" style={styles.cardImage} />
            <div style={styles.cardHeader}>Dalibor Kramář</div>
          </div>
        </div>
      </div>
    </>
  );
}
