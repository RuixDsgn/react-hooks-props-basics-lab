import React from "react";
import user from "../data/user";

function Links(props) {
    const {github, linkedin} = props
    return (
        <div>
            <h3>Links</h3>
            <a href={github}>{github}</a>
            <a href={linkedin}>{linkedin}</a>
        </div>
    )
}

export default Links; 