import React from "react"
import { css, cx } from 'emotion'

const color = 'white'
const background='rgb(105,105,105)'

export const header = css`
    background-color: ${background};
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;`

export const headerTitle = css`
    align-self: flex-start;`

export const headerContact = css`
    align-self: flex-end;`

export const colorChanger = css`
    padding: 32px;
    background-color: ${background};
    font-size: 24px;
    border-radius: 4px;
    &:hover {
        color: ${color};
    }`