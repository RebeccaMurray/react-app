import React from "react"

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const headerStyles = {
    header: css`
    font-size: 24px;
    color: white;
    background-color: #5b5b5b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 24px;
        margin-left: 24px;
    }
    `,
};

export default headerStyles;