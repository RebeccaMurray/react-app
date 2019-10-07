import React from "react";
import GridItem from "../GridItem";
import { grid, gridbox } from "../../styles";
import school from "../../svg/school.svg";
import page from "../../svg/page.svg";


/** @jsx jsx */
import { css, jsx } from '@emotion/core';


class Grid extends React.Component {

    render() {

        return (
            <div css={grid}>
                <GridItem css={gridbox} icon={school} />
                <GridItem css={gridbox} icon={page} />
                <GridItem css={gridbox} />
            </div>
        )
    }
}

export default Grid;