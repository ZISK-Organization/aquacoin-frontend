import React from "react";
import useStyles from "../../Hooks/useStyles";
import { useNavigate } from "react-router-dom";

export default function Info() {
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
        <b>O Hře</b>
        <p>
          Aquacoin je šifrovací hra, skládající se ze série stanovišť, která obsahují šifru. Po jejím vyřešení je zpřístupněna poloha následujícího stanoviště. Hra se odehrává výhradně na vodní ploše a přesuny na další stanoviště probíhají výhradně na
          lodích. Samotné šifry se mohou nacházet jak na vodní hladině, tak i na břehu ve vzdálenosti maximálně 100 m od vody.
        </p>
        <b>Podmínky účasti</b>
        <ul>
          <li>
            Hra je určena pro týmy 4 až 5 hráčů starších 18 let, kteří se účastní na vlastní nebezpečí a jsou plně odpovědní za případné škody, jež způsobí. Organizátoři nenesou odpovědnost za bezpečnost ani jednání hráčů. Osoby mladší 18 let smí soutěžit
            pouze v případě, že je členem týmu i osoba starší 18 let, která za ně přebírá odpovědnost.
          </li>
          <li>
            Týmy se musí registrovat nejpozději do <b>3. 5. 2025</b> a zaplatit poplatek <b>1 500 Kč</b> nejpozději do <b>5. 5. 2025</b>.
          </li>
        </ul>
        <b>Poplatek za hru</b>
        <p>
          Poplatek činí <b>1 500 Kč</b> za tým a slouží k pokrytí nákladů na přípravu hry. Organizátoři pracují bez nároku na odměnu. Poplatek zahrnuje mimo jiné i půjčovné za loď. Každý tým dostane zapůjčený <b>Raft Ontario 450</b> pro 4 až 6 osob,
          <b> 5 pádel</b> a <b>5 plovacích vest</b>.
        </p>
        <p>
          Dále bude od každého týmu při zapůjčení lodi vybrána <b>vratná záloha 1 000 Kč</b>, kterou bude možné uhradit při přebírání lodi hotově nebo pomocí QR platby. Záloha bude vrácena ihned po odevzdání zapůjčené lodi, pádel a vest zpět organizátorům.
        </p>
        <b>Trasa, cíl a délka hry</b>
        <p>
          Celá hra se bude odehrávat na Prýglu (Brněnské přehradě). Přesné místo a čas srazu bude upřesněno v informačním e-mailu pár dní před akcí. Přesné místo cíle bude zveřejněno během hry. Můžete očekávat začátek hry mezi 8. a 9. hodinou ráno a konec
          mezi 18. a 19. hodinou. Časy se mohou mírně změnit a budou upřesněny v informačním e-mailu.
        </p>
        <b>Šifry a stanoviště</b>
        <ul>
          <li>Na každém stanovišti se nachází jedna šifra.</li> <li>Každý tým si smí vzít nejvýše 2 kopie dané šifry, pokud není řečeno jinak.</li>
          <li>Stanoviště zanechejte ve stejném stavu a na stejném místě, kde jste jej našli. Zbylé šifry nijak neničte ani neschovávejte.</li>
          <li>Na každé šifře je uveden kód stanoviště, který zadejte do systému a tím nahlásíte příchod. Tento kód není součástí šifry.</li>
          <li>Výsledkem každé šifry je české podstatné jméno v 1. pádě jednotného čísla, pokud není uvedeno jinak. Tento výsledek zadáváte do systému, který vám prozradí polohu následujícího stanoviště.</li>
        </ul>
        <b>Pravidla k řešení šifer a průběhu hry</b>
        <ul>
          <li>K řešení šifer je povoleno používat libovolné pomůcky včetně internetu a jazykových modelů (např. GPT).</li> <li>Je zakázána jakákoli pomoc od osob mimo váš tým.</li>
          <li>Je zakázáno sledovat jiné týmy za účelem nalezení stanoviště nebo vyřešení šifry.</li> <li>Dodržujte rozumnou vzdálenost od ostatních týmů.</li> <li>Je zakázáno úmyslně rušit či sabotovat jiné týmy.</li>
          <li>Při přesunech je povoleno používat mapy, včetně GPS.</li> <li>Přesuny musí být uskutečněny výhradně na zapůjčených lodích.</li>
          <li>Účastníci jsou povinni dbát na bezpečnost ostatních osob a lodí, zejména parníků DPMB. Při plavbě nesmíte křížit směr plavby velkých plavidel (plachetnic, lodí veřejné dopravy) na vzdálenost menší než 50 metrů.</li>
        </ul>
        <b>Průběh hry, bodování a systém nápověd</b>
        <p>
          Hra bude řízena pomocí online systému, kam budete zadávat výsledky šifer a který vám sdělí polohu následujících stanovišť. V systému bude možné také žádat o nápovědy k šifrám nebo šifry vzdát. Po vzdání šifry dostanete polohu šifry následující,
          stejně jako při jejím vyřešení.
        </p>
        <p>
          Za úspěšné vyřešení šifry bez nápovědy dostanete 1 bod. Za vyřešení s nápovědou 0,5 bodu. Za vzdání šifry žádný bod nezískáte. Vyhrává tým s nejvyšším počtem bodů. V případě bodové shody vyhrává tým, který získal body za šifru s nejvyšším
          pořadovým číslem (bez ohledu na použití nápovědy). Pokud bude shoda i nadále, rozhoduje rychlejší vyřešení poslední bodované šifry.
        </p>
        <b>Doporučené vybavení</b>
        <ul>
          <li>
            <b>Mobil s internetem</b> a staženou mapou Brněnské přehrady
          </li>
          <li>
            Šifrovací pomůcky (například{" "}
            <a href="https://www.napalmne.cz/pomucky/NaPALM_pravitko221015.pdf" target="_blank" rel="noreferrer">
              Šifrovací pravítko NaPALM
            </a>
            )
          </li>
          <li>Psaní potřeby, nůžky, pravítko, lepidlo…</li> <li>Lihový nebo jinak výrazný fix</li> <li>Svačina</li>
        </ul>
        <i>
          V případě dotazů napište organizátorům na e-mail <a href="mailto:xstastnyj@gmail.com">xstastnyj@gmail.com</a>
        </i>
        <br />
        <b>GDPR</b>
        <p>
          Na základě článku 13 Nařízení Evropského parlamentu a Rady (EU) 2016/679 ze dne 27. dubna 2016 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen „GDPR“) tímto poskytujeme informace o
          zpracování osobních údajů, ke kterému dochází v rámci konání této akce.
        </p>
        <p>
          Správcem osobních údajů jsou organizátoři akce AquaCoin, kontaktní e-mail: zisk@zisk-go.com. Účelem zpracování osobních údajů je dokumentace průběhu akce a její propagace, a to včetně propagace budoucích aktivit správce. V rámci této akce mohou
          být pořizovány obrazové a zvukové záznamy, zejména fotografie a videozáznamy, na kterých mohou být účastníci zachyceni rozpoznatelně.
        </p>
        <p>
          Záznamy mohou být pořizovány správcem nebo jím pověřenými osobami, přičemž tyto záznamy mohou být dále zpracovávány za účelem zveřejnění na webových stránkách správce, sociálních sítích správce, v tiskových zprávách, informačních a prezentačních
          materiálech správce či v dalších obdobných výstupech sloužících k informování veřejnosti o aktivitách správce. Právním základem zpracování je oprávněný zájem správce podle čl. 6 odst. 1 písm. f) GDPR, spočívající v dokumentaci a propagaci jeho
          činnosti.
        </p>
        <p>
          Osobní údaje nebudou předávány do třetích zemí mimo Evropskou unii, ledaže by to bylo nezbytné v souvislosti se zpracováním na sociálních sítích či jiných platformách se sídlem mimo EU, přičemž v takovém případě budou zajištěny vhodné záruky
          ochrany osobních údajů dle kapitol V GDPR. Osobní údaje nebudou používány k automatizovanému rozhodování ani profilování.
        </p>
        <p>Pořízené záznamy budou uchovávány po dobu nezbytně nutnou k naplnění výše uvedených účelů, nejdéle však po dobu 10 let, není-li zákonný důvod pro jejich delší uchování.</p>
        <p>
          Subjekty údajů mají právo požadovat přístup ke svým osobním údajům, jejich opravu nebo výmaz, jakož i právo na omezení zpracování, právo vznést námitku proti zpracování, a v případě, že je zpracování založeno na souhlasu, také právo na odvolání
          souhlasu. Dále mají právo podat stížnost u dozorového úřadu, kterým je Úřad pro ochranu osobních údajů, se sídlem Pplk. Sochora 27, 170 00 Praha 7.
        </p>
        <p>
          V případě, že si účastník nepřeje být zachycen na fotografiích nebo videozáznamech, je oprávněn tuto skutečnost oznámit organizátorovi akce přímo na místě nebo prostřednictvím výše uvedeného kontaktního e-mailu. Správce se v takovém případě
          zavazuje v rozumném rozsahu této žádosti vyhovět, pokud to bude technicky a organizačně možné.
        </p>
        <p>Tento dokument je zveřejněn pro účely naplnění informační povinnosti správce ve smyslu čl. 13 GDPR.</p>
        <br />
        <br />
        <div style={styles.button} onClick={() => nav("/")}>
          Zpět na hlavní stránku
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
