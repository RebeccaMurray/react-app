import React from "react";
import headerStyles from './styles.js'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

class Header extends React.Component {

    render() {
        return (
            <div css={headerStyles.header}>
                <h1>Rebecca Murray</h1>
            </div>
        );
    }
}

export default Header;