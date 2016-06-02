import React from "react";
import { Link } from "react-router";

export default React.createClass({
    render: function() {
        return (
            <div>
                <div className="greeting">Hello, {this.props.name}! You're looking at the Article.</div>
                <Link to="/">Home</Link>
            </div>
        );
    }
});
