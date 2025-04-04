import { StylesDefinition } from "../../../types";
// TODO some cool background

const stylesDefinition: StylesDefinition = {
    container: {
        default: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }
    },
    loginBox: {
        default: {
            border: "1px solid lightgray",
            borderRadius: "16px",
            width: `max(462px, 90%)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
        }
    },
    title: {
        default: {
            fontSize: "1.8rem",
            marginBottom: 32,
            marginTop: 8,
        }
    },
    link: {
        default: {
            cursor: "pointer",
            marginBottom: 8,
            textDecoration: "underline",
            color: "#56B3FA",
        }
    }
}

export default stylesDefinition
