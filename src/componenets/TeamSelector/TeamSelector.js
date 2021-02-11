import React from 'react';
import classes from '../TeamSelector/TeamSelector.module.css';
import LoadTeamData from '../../containers/LoadData/LoadTeamData';

const teamSelector = () => {
    return (
        <div className={classes.TeamSelector}>
            Please select a Team:
            <select className={classes.DropDown}>
                <option>Team1</option>
            </select>
            <LoadTeamData/>
        </div>
    )
};

export default teamSelector;