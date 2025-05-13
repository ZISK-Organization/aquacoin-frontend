import React, { useEffect, useState } from "react";
import { StylesDefinition, TeamStatus } from "../../types";
import TeamsPreviewTable from "../../Components/TeamsPreviewTable";
import data from "./Data/2025.json";
import useStyles from "../../Hooks/useStyles";
import useBreakpoints from "../../Hooks/useBreakpoints";
import PhotoGallery from "../../Components/PhotoGallery";

const stylesDefinition: StylesDefinition = {
  tableCell: {
    default: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      borderBottom: "1px solid lightgrey",
    },
  },
  link: {
    default: {
      cursor: "pointer",
      marginBottom: 8,
      textDecoration: "underline",
      color: "#56B3FA",
    },
  },
};

export default function Archive() {
  const [teams, setTeams] = useState<TeamStatus[]>([]);

  const styles = useStyles(stylesDefinition);
  const breakpoints = useBreakpoints();

  useEffect(() => {
    // TODO load by year
    fetch(`https://api.aquacoin.cz/teams/list`, { method: "GET" }).then((rawResponse) =>
      rawResponse.json().then((data: TeamStatus[]) =>
        setTeams(
          data
            .map((d) => ({
              team: d,
              score: d.score,
              lastScoredPuzzle: [...d.puzzlesStatus].reverse().filter((p) => p.status === "solved" || p.status === "solvedWithHelp")[0]?.puzzleId ?? 0,
              lastScoredPuzzleTime: new Date([...d.puzzlesStatus].reverse().filter((p) => p.status === "solved" || p.status === "solvedWithHelp")[0]?.time ?? "").getTime(),
            }))
            .sort((a, b) => (b.score === a.score && a.lastScoredPuzzle === b.lastScoredPuzzle ? a.lastScoredPuzzleTime - b.lastScoredPuzzleTime : b.score === a.score ? b.lastScoredPuzzle - a.lastScoredPuzzle : b.score - a.score))
            .map((d) => d.team)
        )
      )
    );
  }, []);

  const puzzlesStates: {
    [index: number]: {
      solved: number;
      solvedWithHelp: number;
      arrived: number;
      dead: number;
      unknown: number;
    };
  } = {};

  teams[0]?.puzzlesStatus?.forEach((p) => {
    puzzlesStates[p.puzzleId] = {
      solved: 0,
      solvedWithHelp: 0,
      arrived: 0,
      dead: 0,
      unknown: 0,
    };
  });

  teams.forEach((team) => {
    team.puzzlesStatus.forEach((p) => {
      if (p.status === "solved") puzzlesStates[p.puzzleId].solved++;
      if (p.status === "solvedWithHelp") puzzlesStates[p.puzzleId].solvedWithHelp++;
      if (p.status === "arrived" || p.status === "helpAsked") puzzlesStates[p.puzzleId].arrived++;
      if (p.status === "failed") puzzlesStates[p.puzzleId].dead++;
      if (p.status === "unknown") puzzlesStates[p.puzzleId].unknown++;
    });
  });

  return (
    <div style={{ width: "min(1250px, 98vw)", margin: "auto", padding: 0, paddingTop: 32 }}>
      {
        // TODO Years select
      }
      <h1>{data.season}. ročník</h1>
      <p style={{ textAlign: "justify" }}>{data.introText}</p>
      <br />
      <h3>Výsledky</h3>
      <TeamsPreviewTable teams={teams} />
      <br />
      <h3>Šifry</h3>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ ...styles.tableCell, textAlign: "left" }}>Šifra</th>
            {breakpoints === "small" ? (
              <th style={{ ...styles.tableCell, textAlign: "left" }}>Vyřešilo týmů</th>
            ) : (
              <>
                <th style={{ ...styles.tableCell, textAlign: "left" }}>Vyřešilo bez nápovědy</th>
                <th style={{ ...styles.tableCell, textAlign: "left" }}>Vyřešilo s nápovědou</th>
                <th style={{ ...styles.tableCell, textAlign: "left" }}>Vzdalo</th>
                <th style={{ ...styles.tableCell, textAlign: "left" }}>Dorazilo a nevyřešilo</th>
                <th style={{ ...styles.tableCell, textAlign: "left" }}>Nedorazilo</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.puzzles.map((p, i) => (
            <tr key={p.id}>
              <td style={styles.tableCell}>
                <a href={p.link} rel="noreferrer" target="_blank" style={styles.link}>
                  Šifra {i + 1}
                </a>
              </td>
              {breakpoints === "small" ? (
                <td style={styles.tableCell}>
                  {puzzlesStates[p.id]?.solved + puzzlesStates[p.id]?.solvedWithHelp} týmů{" "}
                  <span style={{ color: "grey", fontSize: "0.9rem" }}>{Math.round((100 * (puzzlesStates[p.id]?.solved + puzzlesStates[p.id]?.solvedWithHelp || 0)) / (0.000001 + teams.length))} %</span>
                </td>
              ) : (
                <>
                  <td style={styles.tableCell}>
                    {puzzlesStates[p.id]?.solved} týmů <span style={{ color: "grey", fontSize: "0.9rem" }}>{Math.round((100 * (puzzlesStates[p.id]?.solved || 0)) / (0.000001 + teams.length))} %</span>
                  </td>
                  <td style={styles.tableCell}>
                    {puzzlesStates[p.id]?.solvedWithHelp} týmů <span style={{ color: "grey", fontSize: "0.9rem" }}>{Math.round((100 * (puzzlesStates[p.id]?.solvedWithHelp || 0)) / (0.000001 + teams.length))} %</span>
                  </td>
                  <td style={styles.tableCell}>
                    {puzzlesStates[p.id]?.dead} týmů <span style={{ color: "grey", fontSize: "0.9rem" }}>{Math.round((100 * (puzzlesStates[p.id]?.dead || 0)) / (0.000001 + teams.length))} %</span>
                  </td>
                  <td style={styles.tableCell}>
                    {puzzlesStates[p.id]?.arrived} týmů <span style={{ color: "grey", fontSize: "0.9rem" }}>{Math.round((100 * (puzzlesStates[p.id]?.arrived || 0)) / (0.000001 + teams.length))} %</span>
                  </td>
                  <td style={styles.tableCell}>
                    {puzzlesStates[p.id]?.unknown} týmů <span style={{ color: "grey", fontSize: "0.9rem" }}>{Math.round((100 * (puzzlesStates[p.id]?.unknown || 0)) / (0.000001 + teams.length))} %</span>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <a href={data.puzzlesPrintBlackAndWhiteLink} style={styles.link} rel="noreferrer" target="_blank">
        Šifry k tisku (černobílá část)
      </a>
      <br />
      <a href={data.puzzlesPrintColorLink} style={styles.link} rel="noreferrer" target="_blank">
        Šifry k tisku (barevá část)
      </a>
      <br />
      <h3>Fotky z akce</h3>
      <PhotoGallery photos={data.photos} />
    </div>
  );
}
