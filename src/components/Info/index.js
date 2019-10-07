import React from "react";

class Info extends React.Component {

    bio = "My name is Rebecca and I'm a software \
    engineer. I recently graduated from Columbia University \
    with a degree in Electrical Engineering."

    render() {
        return (
            <div>
                <div>
                    About
                </div>
                <div>
                    {this.bio}
                </div>
            </div>
        );
    }
}

export default Info;