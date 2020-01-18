import React from "react"

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const color = 'white';

const styles = {
    title: css`
    font-size: 24px;
    `,
    subtitle: css`
    font-size: 16px;
    `,
    colorChanger: css`
    padding: 32px;
    background-color: ${background};
    font-size: 24px;
    border-radius: 4px;
    &:hover {
        color: ${color};
    }
    `
};

export default styles;