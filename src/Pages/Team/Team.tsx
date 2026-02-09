import React, { useEffect, useState } from "react";
import TextField from "../../Components/TextField";
import useStyles from "../../Hooks/useStyles";
import stylesDefinition from "./styles/styles";
import Button from "../../Components/Button";
import notPaid from "../../img/notPaid.png";
import { Member, Team as TeamType } from "../../types";
import { useNavigate } from "react-router-dom";
import paid from "../../img/paid.png";
import qrCode from "../../img/qrPayment.png";

export default function Team() {
  const [team, setTeam] = useState<TeamType | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const styles = useStyles(stylesDefinition);

  const nav = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("teamId")) {
      fetch(`https://api.aquacoin.cz/teams?id=${sessionStorage.getItem("teamId")}&secret=${sessionStorage.getItem("secret")}`, { method: "GET" })
        .then((res) => {
          res.json().then((data) => {
            if (data) {
              setTeam(data);
            } else {
              nav("/Login");
            }
          });
        })
        .catch(() => {
          nav("/Login");
        });
    } else {
      nav("/Login");
    }
    // eslint-disable-next-line
  }, []);

  const saveChanges = () => {
    setLoading(true);
    fetch(`https://api.aquacoin.cz/teams?secret=${sessionStorage.getItem("secret")}`, { method: "POST", body: JSON.stringify(team), headers: { "Content-Type": "application/json" } })
      .then((res) => {
        res.json().then((data) => {
          if (data) {
            setTeam(data);
            alert("Změny úspěšně uloženy");
          } else {
            alert("Při uložení došlo k chybě.");
          }
          setLoading(false);
        });
      })
      .catch(() => {
        alert("Při uložení došlo k chybě.");
        setLoading(false);
      });
  };

  const updateMember = (member: Member) => team && setTeam({ ...team, members: team.members.map((mem) => (mem.id === member.id ? member : mem)) });
  const logout = () => {
    sessionStorage.removeItem("teamId");
    sessionStorage.removeItem("secret");
    nav("/Login");
  };

  return team ? (
    <div style={styles.container}>
      <div style={styles.title}>Informace o týmu</div>
      <TextField label="Název týmu" value={team.name || ""} onChange={(val) => setTeam({ ...team, name: val })} />
      <div style={styles.subtitle}>Členové týmu</div>
      <div style={styles.membersContainer}>
        {team.members.map((mem) => (
          <div key={mem.id} style={styles.memberCard}>
            <TextField label="Jméno a příjmení" value={mem.name || ""} onChange={(val) => updateMember({ ...mem, name: val })} />
            <TextField label="Věk" type="number" value={mem.age?.toString() || ""} onChange={(val) => updateMember({ ...mem, age: parseInt(val) })} />
            <TextField label="Email" type="email" value={mem.mail || ""} onChange={(val) => updateMember({ ...mem, mail: val })} />
          </div>
        ))}
        <div style={{ padding: 12, paddingTop: 0, fontSize: "small" }}>* Zadejte prosím celé skutečné jméno i příjmení, nikoliv přezdívku nebo iniciály. Údaje budou použity pro generování prezenční listiny a dalších dokumentů.</div>
      </div>
      <Button loading={loading} fullWidth label="Uložit změny" onClick={saveChanges} />
      <div style={styles.title}>Informace o platbě</div>
      {team.paid ? (
        <img src={paid} style={styles.img} alt="not paid" />
      ) : (
        <>
          <img src={notPaid} style={styles.img} alt="not paid" />
          <div style={styles.textContainer}>
            <div>
              Aby byla registrace týmu platná, musí být plně uhrazena cena <b>1 750 Kč</b> za tým a to nejpozději do <b>5. května 2026</b>. Cenu prosím uhraďte převodem na účet <b>115-2818930297/0100</b> a do zprávy pro příjemce uveďte{" "}
              <b>AQUACOIN-{team.name}</b> a jako variabilní symbol uveďte číslo <b>{team.id}</b>. Případně zaplaťte pomocí následující QR platby
            </div>
            TODO new QR code
            {/* <img src={qrCode} style={styles.img} alt="qr payment" /> */}
            <div>
              <b>Po naskenování QR kódu nezapomeňte správně vyplnit název týmu a variabilní symbol.</b>
            </div>
            <br />
            <div>Potvrzení platby ze strany organizátorů může chvíli trvat. Pokud se po zaplacení do týdne nezmění status na zaplaceno, kontaktujte prosím organizátory na email xstastnyj@gmail.com.</div>
          </div>
        </>
      )}
      <div style={styles.link} onClick={logout}>
        Odhlásit se
      </div>
    </div>
  ) : (
    <>Načítám...</>
  );
}
