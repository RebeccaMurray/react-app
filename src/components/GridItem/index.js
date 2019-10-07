import React from "react";
import { thisExpression } from "@babel/types";


class GridItem extends React.Component {

    render() {
        return (
            <div {...this.props}>
                <img src={this.props.icon} />
            </div>
        );
    }
}


export default GridItem;