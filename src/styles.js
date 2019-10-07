import React from "react"

/** @jsx jsx */
import {  css, jsx } from '@emotion/core'

const color = 'white'
const background='#D3D3D3'

export const body = css`
    background-color: ${background};
    `
export const title = css`
    font-size: 24px;
    `
export const subtitle = css`
    font-size: 16px;
    `
export const grid = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    margin-left: 15%;
    `
export const gridbox = css`
    width: 30%;
    height: 150px;
    text-align: center;
    img {
        color: red;
        height: 100px;
        padding: 20px;
    }
    `
export const gridTop = css`
    ${gridbox}
    border-bottom: 8px solid red;`

export const gridLeft = css`
    ${gridbox}
    border-right: 8px solid red;`

export const header = css`
    font-size: 24px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;`

export const headerTitle = css`
    align-self: flex-start;
    ${title}`

export const headerContact = css`
    align-self: flex-end;
    ${subtitle}`

export const colorChanger = css`
    padding: 32px;
    background-color: ${background};
    font-size: 24px;
    border-radius: 4px;
    &:hover {
        color: ${color};
    }`