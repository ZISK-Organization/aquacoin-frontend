import { StylesDefinition } from "../../../types";
// TODO some cool background

const stylesDefinition: StylesDefinition = {
    container: {
        default: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100vw",
        }
    },
    membersContainer: {
        default: {
            // display: "flex",
            // flexDirection: "row",
            // alignItems: "center",
            // justifyContent: "center",
            width: "100vw",
        }
    },
    memberCard: {
        default: {
            border: "1px solid lightgray",
            borderRadius: "16px",
            width: 'calc(20vw - 36px)',
            float: "left",
            margin: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        medium: {
            width: 'calc(33vw - 36px)',
        },
        small: {
            width: 'calc(100vw - 36px)',
        }
    },
    img: {
        default: {
            width: `min(482px, 90vw)`,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    title: {
        default: {
            fontSize: "1.8rem",
            marginBottom: 32,
            marginTop: 8,
            textAlign: "center",
        }
    },
    subtitle: {
        default: {
            fontSize: "1.2rem",
            marginBottom: 16,
            marginTop: 8,
            textAlign: "center",
        }
    },
    textContainer: {
        default: {
            textAlign: "center",
            marginLeft: 16,
            marginRight: 16
        }
    },
    link: {
        default: {
            marginLeft: 16,
            cursor: "pointer",
            marginBottom: 8,
            textDecoration: "underline",
            color: "#56B3FA",
        }
    }
}

export default stylesDefinition
