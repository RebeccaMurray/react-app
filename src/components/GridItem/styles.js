import React from "react"

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const gridItemStyles = {
    gridItem: css`
    font-size: 120px;
    width: 250px;
    display: flex;
    justify-content: center;
    svg {
        margin: 40px;
    }
    `,
};

export default gridItemStyles;