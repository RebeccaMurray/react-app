import React from "react";
import GridItem from "../GridItem";
import { grid, gridbox, gridTop, gridLeft } from "../../styles";
import school from "../../svg/school.svg";
import page from "../../svg/page.svg";
import person from "../../svg/person.svg";
import mail from "../../svg/mail.svg";
import github from "../../svg/github.png"
import headshot from "../../svg/headshot.jpg"

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

class Grid extends React.Component {

    render() {
        return (
            <div css={{marginTop: '40px;'}}>
            <div css={grid}>
                <GridItem css={[gridTop, gridLeft]} icon={headshot} />
                <GridItem css={[gridTop, gridLeft]} icon={school} />
                <GridItem css={gridTop} icon={person} />
            </div>
            <div css={grid}>
                <GridItem css={gridLeft} icon={github} />
                <GridItem css={gridLeft} icon={page} />
                <GridItem css={gridbox} icon={mail} />
            </div>
            </div>
        )
    }
}

export default Grid;