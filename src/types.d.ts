import { CSSProperties } from "react"

export type StyleDefinition = { default: CSSProperties, small?: CSSProperties, medium?: CSSProperties }
export type StylesDefinition = { [key: string]: StyleDefinition }
export type Styles = { [key: string]: CSSProperties }

export interface Team {
    id: number;
    name: string;
    contactMail: string;
    paid: boolean;
    year: number
    members: Member[]
}

export interface TeamStatus {
    puzzlesStatus: PuzzleStatusFull[]
    team: Team
    score: number
}

export interface PuzzleStatusFull {
    puzzleId: number;
    status: PuzzleStatus
    time: string | Date
}

export interface Member {
    id: number;
    name: string;
    age: number;
    mail: string;
}

export type PuzzleStatus = "arrived" | "solved" | "solvedWithHelp" | "helpAsked" | "unknown" | "failed"