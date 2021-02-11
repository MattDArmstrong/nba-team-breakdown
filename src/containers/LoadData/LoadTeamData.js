import React, {Component} from 'react';
import axios from 'axios';

class loadTeamData extends Component{
    state = {
        teams : {}
    }

    componentDidMount(){
        let teams = {};
        axios.get('https://www.balldontlie.io/api/v1/teams')
            .then(response => {
                response.data.data.map(team => {
                    teams[team.id] = team.full_name;
                });
                this.setState({teams: teams});
            });
    }


    render(){
        return(<div></div> );
    }
}

export default loadTeamData;