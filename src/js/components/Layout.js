import React from "react";
import { Link } from "react-router";

export default React.createClass({
    render: function() {
        return (
            <div>
                <div className="greeting">Hello, {this.props.name}! You are looking at the Layout.</div>
                <Link to="/article">More Info</Link>
            </div>
        );
    }
});
