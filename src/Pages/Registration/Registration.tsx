import React /*useState*/ from "react";
import useStyles from "../../Hooks/useStyles";
import stylesDefinition from "./styles/styles";
// import TextField from "../../Components/TextField";
// import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  const styles = useStyles(stylesDefinition);
  const nav = useNavigate();

  // const register = () => {
  //   setLoading(true);
  //   fetch(`https://api.aquacoin.cz/teams/register?email=${email}&password=${password}&name=${name}`, { method: "POST" })
  //     .then((res) => {
  //       res.json().then((data) => {
  //         if (data.result === "SUCCESS") {
  //           sessionStorage.setItem("teamId", data.teamId.toString());
  //           sessionStorage.setItem("secret", data.secret.toString());
  //           nav("/Team");
  //         } else if (data.result === "INVALID") {
  //           alert("Zadaný email nebo název týmu již existuje");
  //         } else {
  //           alert("Při registraci došlo k chybě.");
  //         }
  //         setLoading(false);
  //       });
  //     })
  //     .catch(() => {
  //       alert("Při registraci došlo k chybě.");
  //       setLoading(false);
  //     });
  // };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <div style={styles.title}>Registrace týmu</div>
        {/* <TextField label="Název týmu" value={name} onChange={setName} />
        <TextField label="Kontaktní email" value={email} type="email" onChange={setEmail} />
        <TextField label="Heslo" value={password} type="password" onChange={setPassword} />
        <Button disabled={!name || !email || !password} loading={loading} label="Registrovat" onClick={register} fullWidth /> */}
        <p>Registrace bude spuštěna v průběhu března.</p>
        {/* <span style={styles.link} onClick={() => nav("/Login")}>
          Jste již zaregistrováni? Přihlaste se!
        </span> */}
      </div>
    </div>
  );
}
