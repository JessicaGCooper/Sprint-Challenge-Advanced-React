import React, { Component } from 'react'
import axios from 'axios'

import PlayerCard from './PlayerCard'

 class CardContainer extends Component {
    constructor () {
        super();
        this.state = {
           players: [],
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
             .then(response => {
                 console.log(response);
                 this.setState({
                     players: response.data
                    });
                })
            .catch(error =>{
                console.log("The data was not returned:", error);
            });
        }

        componentDidUpdate(prevProps, prevState){
            if (prevState.players !== this.state.players){
                console.log("User state has changed")
            }
            if (prevProps.players !== this.state.players){
                console.log("User state has changed")
            }
          }

    render() {
        return (
            <div>
                {this.state.players.map((player) => <PlayerCard key={player.id} player={player}/>)}
            </div>
        )
    }
}

export default CardContainer