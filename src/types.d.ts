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

export interface Member {
    id: number;
    name: string;
    age: number;
    mail: string;
}