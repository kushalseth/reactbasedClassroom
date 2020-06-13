import React, { Component } from "react";
import { render } from "react-dom";


// Drive this using some configuration. You can set based on your requirement.
export const HOVER_Hello1 = "Hello1";
export const HOVER_Hello2 = "Hello2";

class HoverExample extends Component {


    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            contextText: ""
        };
    }

    handleMouseHover = (e, currentText) => {
        this.setState({
            isHovering: !this.state.isHovering,
            contextText: currentText
        });
    }

    toggleHoverState(state) {
        //
    }

    render() {
        return (
            <div>
                <div
                    onMouseEnter={e => this.handleMouseHover(e, HOVER_Hello1)}
                    onMouseLeave={e => this.handleMouseHover(e, HOVER_Hello1)}

                >
                    Hover Me
        </div>
                <div
                    onMouseEnter={e => this.handleMouseHover(e, HOVER_Hello2)}
                    onMouseLeave={e => this.handleMouseHover(e, HOVER_Hello2)}
                >
                    Hover Me2
        </div>
                {this.state.isHovering && <div>{this.state.contextText}</div>}
            </div>
        );
    }
}

export default HoverExample;