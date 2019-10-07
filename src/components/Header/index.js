import React from "react";
import {header, headerTitle, headerContact} from '../../styles.js'

class Header extends React.Component {

    render() {
        return (
            <div css={header}>
                <div css={headerTitle}>
                    <h1>Rebecca Murray</h1>
                </div>
                <div css={headerContact}>
                    <h3>Contact</h3>
                </div>
            </div>
        );
    }
}

export default Header;