import React from "react";
import GridItem from "../GridItem";
import gridStyles from "./styles";
import school from "../../svg/school.svg";
import page from "../../svg/page.svg";
import person from "../../svg/person.svg";
import mail from "../../svg/mail.svg";
// import github from "../../svg/github.png"
import headshot from "../../svg/headshot.jpg"
import { faPaperPlane, faUserAlt, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faGit} from '@fortawesome/free-brands-svg-icons'

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

class Grid extends React.Component {

    render() {
        const plane = <i class="fas fa-paper-plane"></i>
        return (
            <div css={gridStyles.gridWrapper}>
                <div css={gridStyles.grid}>
                    <div css={gridStyles.gridRow}>
                        <GridItem css={[gridStyles.gridTop, gridStyles.gridLeft]} icon={faUserAlt} />
                        <GridItem css={[gridStyles.gridTop, gridStyles.gridLeft]} icon={faGraduationCap} />
                        <GridItem css={gridStyles.gridTop} icon={faBriefcase} />
                    </div>
                    <div css={gridStyles.gridRow}>
                        <GridItem css={gridStyles.gridLeft} icon={faLinkedin} />
                        <GridItem css={gridStyles.gridLeft} icon={faGithub} />
                        <GridItem icon={faPaperPlane} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Grid;