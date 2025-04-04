import React, { useState } from "react";
import useStyles from "../../Hooks/useStyles";
import stylesDefinition from "./styles/styles";
import TextField from "../../Components/TextField";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const styles = useStyles(stylesDefinition);
  const nav = useNavigate();

  const login = () => {
    setLoading(true);
    fetch(`https://api.aquacoin.cz/teams/login?email=${email}&password=${password}`, { method: "POST" })
      .then((res) => {
        res.json().then((data) => {
          if (data.result === "SUCCESS") {
            sessionStorage.setItem("teamId", data.teamId.toString());
            sessionStorage.setItem("secret", data.secret.toString());
            nav("/Team");
          } else if (data.result === "INVALID") {
            alert("Zadaný email nebo název týmu již existuje");
          } else {
            alert("Při přihlášení došlo k chybě.");
          }
          setLoading(false);
        });
      })
      .catch(() => {
        alert("Při přihlášení došlo k chybě.");
        setLoading(false);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <div style={styles.title}>Přihlášení</div>
        <TextField label="Kontaktní email" type="email" value={email} onChange={setEmail} />
        <TextField label="Heslo" value={password} type="password" onChange={setPassword} />
        <Button loading={loading} disabled={!email || !password} label="Přihlásit se" fullWidth onClick={login} />
        <span style={styles.link} onClick={() => nav("/Registration")}>
          Nejste zaregistrováni? Registrujte se!
        </span>
      </div>
    </div>
  );
}
