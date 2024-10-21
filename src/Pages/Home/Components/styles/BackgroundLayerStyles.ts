import { StylesDefinition } from "../../../../types";
import introBg from "../../../../img/introBg.png";
import CardsStyles from "./CardsStyles";
import CommonStyles from "./CommonStyles";

const stylesDefinition: StylesDefinition = {
    ...CommonStyles,
    ...CardsStyles,
    root: {
        default: {
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${introBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "fixed",
        },
    },
    logo: {
        default: {
            position: "absolute",
            top: "2vh",
            left: "2vw",
            width: "18vw",
        },
        medium: {
            width: "44vw",
        },
        small: {
            left: "6vw",
            width: "88vw",
        },
    },
    text: {
        default: {
            position: "absolute",
            top: "28vh",
            right: "10vw",
            width: "32vw",
            color: "white",
            fontSize: "6.2rem",
            zIndex: 2,
        },
        medium: {
            width: "48vw",
            fontSize: "3.5rem",
        },
        small: {
            fontSize: "2.5rem",
            width: "88vw",
            left: "6vw",
            bottom: "6vh",
            top: "auto",
        },
    },
    button: {
        default: {
            width: "fit-content",
            fontSize: "2.5rem",
            color: "black",
            backgroundColor: "white",
            padding: 18,
            borderRadius: 42,
            marginTop: 22,
            cursor: "pointer",
            zIndex: 2,
            position: "relative",
        },
        small: {
            width: "calc(100% - 24px)",
            padding: 12,
            marginTop: 22,
            textAlign: "center",
        },
    },
};

export default stylesDefinition;