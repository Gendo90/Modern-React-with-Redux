import React from "react";
import "./SeasonDisplay.css"

const seasonsConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Brrr, it's chilly!",
        iconName: "snowflake"
    }
}

function getSeason(lat, month) {
    if(month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    }
    else {
        return lat > 0 ? "winter" : "summer";
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonsConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive icon ${iconName}`} />
            <h1>{text}</h1>
            <i className={`icon-right massive icon ${iconName}`} />
        </div>
    )
}

export default SeasonDisplay;
