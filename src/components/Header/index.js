import React from "react";
import {header, headerTitle, headerContact} from '../../styles.js'

class Header extends React.Component {

    render() {
        return (
            <div className={header}>
                <div className={headerTitle}>
                    <h1>Rebecca Murray</h1>
                </div>
                <div className={headerContact}>
                    <h3>Contact</h3>
                </div>
            </div>
        );
    }
}

export default Header;