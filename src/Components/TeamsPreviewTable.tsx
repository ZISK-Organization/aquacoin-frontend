import React, { useState } from "react";
import { StylesDefinition, TeamStatus } from "../types";
import useStyles from "../Hooks/useStyles";
import useBreakpoints from "../Hooks/useBreakpoints";
import { addHours } from "../Utils/Utils";

const stylesDefinition: StylesDefinition = {
  tableCell: {
    default: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      borderBottom: "1px solid lightgrey",
      cursor: "pointer",
    },
  },
  childRowColumn: {
    default: {
      width: "calc(50% - 22px)",
      marginLeft: 22,
      float: "left",
    },
    small: {
      width: "100%",
      marginLeft: 8,
    },
  },
  puzzleStatusIcon: {
    default: {
      width: 24,
      height: 24,
      margin: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      color: "white",
      float: "left",
    },
  },
};

interface IProps {
  teams: TeamStatus[];
}
export default function TeamsPreviewTable({ teams }: IProps) {
  const [selectedChildRow, setSelectedChildRow] = useState<number | undefined>(undefined);
  const breakpoints = useBreakpoints();

  const styles = useStyles(stylesDefinition);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th style={styles.tableCell}>#</th>
          <th style={styles.tableCell}>Tým</th>
          {breakpoints !== "small" && <th style={styles.tableCell}>Šifry</th>}
          <th style={styles.tableCell}>Body</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, i) => (
          <React.Fragment key={team.team.id}>
            <tr onClick={() => (selectedChildRow === team.team.id ? setSelectedChildRow(undefined) : setSelectedChildRow(team.team.id))}>
              <td style={styles.tableCell}>{i + 1}.</td>
              <td style={styles.tableCell}>{team.team.name}</td>
              {breakpoints !== "small" && (
                <td style={{ ...styles.tableCell, minWidth: 228 }}>
                  {team.puzzlesStatus.map((p) =>
                    p.status === "solved" ? (
                      <span style={{ ...styles.puzzleStatusIcon, backgroundColor: "green" }}>✓</span>
                    ) : p.status === "solvedWithHelp" ? (
                      <span style={{ ...styles.puzzleStatusIcon, backgroundColor: "orange" }}>?</span>
                    ) : p.status === "failed" ? (
                      <span style={{ ...styles.puzzleStatusIcon, backgroundColor: "red" }}>💀</span>
                    ) : p.status === "arrived" || p.status === "helpAsked" ? (
                      <span style={{ ...styles.puzzleStatusIcon, backgroundColor: "yellow" }}>⚑</span>
                    ) : (
                      <span style={{ ...styles.puzzleStatusIcon, backgroundColor: "grey" }}>-</span>
                    )
                  )}
                </td>
              )}
              <td style={styles.tableCell}>{team.score}</td>
            </tr>
            {selectedChildRow === team.team.id && (
              <tr onClick={() => setSelectedChildRow(undefined)}>
                <td colSpan={4}>
                  <div style={styles.childRowColumn}>
                    <p>
                      <b>Členové</b>
                    </p>
                    {team.team.members
                      .filter((m) => m.name)
                      .map((m, i) => (
                        <p key={i}>{m.name}</p>
                      ))}
                  </div>
                  <div style={styles.childRowColumn}>
                    <p>
                      <b>Šifry</b>
                    </p>
                    {team.puzzlesStatus.map((p, i) =>
                      p.status === "solved" ? (
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                          <span style={{ ...styles.puzzleStatusIcon, backgroundColor: "green", marginRight: 8 }}>✓</span> <b>Šifra {i + 1}: </b>&nbsp;Vyřešeno - {addHours(new Date(p.time), 2).toLocaleTimeString("cs")}
                        </div>
                      ) : p.status === "solvedWithHelp" ? (
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                          <span style={{ ...styles.puzzleStatusIcon, backgroundColor: "orange", marginRight: 8 }}>?</span> <b>Šifra {i + 1}: </b>&nbsp;Vyřešeno s nápovědou - {addHours(new Date(p.time), 2).toLocaleTimeString("cs")}
                        </div>
                      ) : p.status === "failed" ? (
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                          <span style={{ ...styles.puzzleStatusIcon, backgroundColor: "red", marginRight: 8 }}>💀</span> <b>Šifra {i + 1}: </b>&nbsp;Vzdáno - {addHours(new Date(p.time), 2).toLocaleTimeString("cs")}
                        </div>
                      ) : p.status === "arrived" || p.status === "helpAsked" ? (
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                          <span style={{ ...styles.puzzleStatusIcon, backgroundColor: "yellow", marginRight: 8 }}>⚑</span> <b>Šifra {i + 1}: </b>&nbsp;Tým dorazil - {addHours(new Date(p.time), 2).toLocaleTimeString("cs")}
                        </div>
                      ) : (
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                          <span style={{ ...styles.puzzleStatusIcon, backgroundColor: "grey", marginRight: 8 }}>-</span> <b>Šifra {i + 1}: </b>&nbsp;Tým nedorazil - {addHours(new Date(p.time), 2).toLocaleTimeString("cs")}
                        </div>
                      )
                    )}
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
