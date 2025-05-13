import React from "react";
import { StylesDefinition } from "../types";
import useStyles from "../Hooks/useStyles";

interface IProps {
  photos: string[];
}

const stylesDefinition: StylesDefinition = {
  image: {
    default: {
      width: "min(calc(100vw - 40px), 272px)",
      height: 120,
      backgroundSize: "cover",
      backgroundPosition: "center",
      float: "left",
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 40,
      cursor: "pointer",
    },
  },
  selectedImage: {
    default: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundSize: "contain",
      backgroundPosition: "center",
      zIndex: 2,
      backgroundRepeat: "no-repeat",
    },
  },
  blur: {
    default: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      zIndex: 1.9,
    },
  },
  cancelButton: {
    default: {
      position: "fixed",
      top: "2vh",
      right: "2vw",
      zIndex: 3,
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontWeight: "bold",
      backgroundColor: "white",
      borderRadius: "50%",
    },
  },
  arrowButton: {
    default: {
      position: "fixed",
      top: "calc(50vh - 20px)",
      zIndex: 3,
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontWeight: "bold",
      backgroundColor: "white",
      borderRadius: "50%",
    },
  },
};

export default function PhotoGallery({ photos }: IProps) {
  const [selectedPhoto, setSelectedPhoto] = React.useState<string | undefined>(undefined);

  const styles = useStyles(stylesDefinition);

  return (
    <>
      {photos.map((p, i) => (
        <div style={{ ...styles.image, backgroundImage: `url(${p})` }} key={i} onClick={() => setSelectedPhoto(p)} />
      ))}
      {selectedPhoto && (
        <>
          <div style={styles.blur} />
          <div style={{ ...styles.selectedImage, backgroundImage: `url(${selectedPhoto})` }} />
          <div style={styles.cancelButton} onClick={() => setSelectedPhoto(undefined)}>
            X
          </div>
          <div style={{ ...styles.arrowButton, left: "2vw" }} onClick={() => setSelectedPhoto(photos[(photos.indexOf(selectedPhoto) + photos.length - 1) % photos.length])}>
            &lt;
          </div>
          <div style={{ ...styles.arrowButton, right: "2vw" }} onClick={() => setSelectedPhoto(photos[(photos.indexOf(selectedPhoto) + 1) % photos.length])}>
            &gt;
          </div>
        </>
      )}
    </>
  );
}
