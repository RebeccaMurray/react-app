import React from "react";
import gridItemStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

class GridItem extends React.Component {

    render() {
        return (
            <div css={gridItemStyles.gridItem} {...this.props}>
                {/* <img src={this.props.icon} /> */}
                <FontAwesomeIcon icon={this.props.icon} />
            </div>
        );
    }
}


export default GridItem;