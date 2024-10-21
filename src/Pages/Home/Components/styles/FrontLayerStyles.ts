import { StylesDefinition } from "../../../../types";
import CardsStyles from "./CardsStyles";
import CommonStyles from "./CommonStyles";

const styleDefinition: StylesDefinition = {
    ...CommonStyles,
    ...CardsStyles,
    root: {
        default: {
            width: "100vw",
            height: "fit-content",
            backgroundColor: "#EFEBE6",
            position: "relative",
            paddingTop: 64,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        },
    },
    container: {
        default: {
            width: "min(100vw, 1860px)",
            margin: "auto",
        },
    },
    column: {
        default: {
            float: "left",
            display: "flex",
            flexDirection: "column",
            width: "calc(33% - 64px)",
            padding: 32,
        },
        medium: {
            width: "calc(100% - 64px)",
        },
    },
    headline: {
        default: { fontSize: "3.5rem" },
        medium: { fontSize: "2.5rem" },
        small: { fontSize: "1.5rem" },
    },
    header: {
        default: { fontSize: "2.5rem" },
        medium: { fontSize: "2.2rem" },
        small: { fontSize: "1.8rem" },
    },
    text: {
        default: {
            marginTop: 22,
            marginBottom: 32,
            textAlign: "justify"
        },
    },
    date: {
        default: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "right",
            width: "100%",
            marginTop: 22,
        },
    },
    placeHolder: {
        default: {
            width: 1,
            height: "100vh",
            zIndex: -2,
            position: "relative",
        },
    },
    placeHolder2: {
        default: {
            width: 1,
            height: "80vh",
            zIndex: -2,
            position: "relative",
        },
        small: {
            height: "100vh",
        },
    },
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
    banner: {
        default: {
            width: "100vw",
        },
    },
};

export default styleDefinition