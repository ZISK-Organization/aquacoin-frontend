import { CSSProperties } from "react"

export type StyleDefinition = { default: CSSProperties, small?: CSSProperties, medium?: CSSProperties }
export type StylesDefinition = { [key: string]: StyleDefinition }
export type Styles = { [key: string]: CSSProperties }