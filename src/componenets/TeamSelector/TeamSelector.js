import React from 'react';
import classes from '../TeamSelector/TeamSelector.module.css'

const teamSelector = () => {
    return (
        <div className={classes.TeamSelector}>
            Please select a Team:
            <select className={classes.DropDown}>
                <option>Team1</option>
            </select>
        </div>
    )
};

export default teamSelector;