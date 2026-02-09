import React, { useEffect, useState } from "react";
import { TeamStatus } from "../../types";
import TeamsPreviewTable from "../../Components/TeamsPreviewTable";

export default function Teams() {
  const [teams, setTeams] = useState<TeamStatus[]>([]);

  useEffect(() => {
    setTeams([]);
    fetch(`https://api.aquacoin.cz/teams/list`, { method: "GET" }).then((rawResponse) =>
      rawResponse.json().then((data: TeamStatus[]) =>
        setTeams(
          data
            .map((d) => ({
              team: d,
              paid: d.team.paid,
            }))
            .sort((a, b) => (b.paid === a.paid ? 0 : b.paid ? 1 : -1))
            .map((d) => d.team),
        ),
      ),
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
      <h1>Přihlášené týmy</h1>
      <TeamsPreviewTable teams={teams} />
    </div>
  );
}
