import React from "react"

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const gridLineColor = '#5b5b5b';
const gridLineThickness = '12px';

const gridStyles = {
    gridWrapper: css`
    display: flex;
    justify-content: center;
    `,
    grid: css`
    display: inline-block;
    margin: 40px;
    `,
    gridRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    `,
    gridTop: css`
    border-bottom: ${gridLineThickness} solid ${gridLineColor};
    `,
    gridLeft: css`
    border-right: ${gridLineThickness} solid ${gridLineColor};
    `,
};

export default gridStyles;