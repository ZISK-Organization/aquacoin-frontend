import { StylesDefinition } from "../../../../types"

const CardsStyles: StylesDefinition = {
    cardsContainer: {
        default: {
            width: `min(100% - 64px, 1796px)`,
            // maxWidth: 1860 - 2 * 32,
            padding: 32,
            margin: "auto",
        },
    },
    card: {
        default: {
            float: "left",
            width: "calc(33% - 80px)",
            height: "20vh",
            backgroundColor: "rgba(255, 255, 255, 0.55)",
            borderRadius: 18,
            margin: 22,
            padding: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        medium: {
            width: "calc(50% - 68px)",
            height: "calc(25vh - 68px)",
            margin: 16,
        },
        small: {
            width: "calc(100% - 60px)",
            height: "calc(15vh - 60px)",
            margin: 12,
        },
    },
    cardHeader: {
        default: {
            fontSize: "2.5rem",
            color: "black",
            fontWeight: "bold",
            marginBottom: 32,
        },
        medium: {
            fontSize: "1.8rem",
        },
        small: {
            fontSize: "1.2rem",
            marginBottom: 12,
        },
    },
    cardContent: {
        default: {
            fontSize: "1.5rem",
            color: "black",
            textAlign: "center",
        },
        medium: {
            fontSize: "1rem",
        },
        small: {
            fontSize: "0.8rem",
        },
    },
    cardImage: {
        default: {
            width: "72%",
            margin: "auto",
            borderRadius: "50%",
            marginBottom: 32,
        },
    }
}

export default CardsStyles