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
    width: 70%;
    margin-left: 15%;
    `
export const gridbox = css`
    background-color: green;
    width: 30%;
    height: 150px;
    img {
        height: 100px;
    }
    `
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