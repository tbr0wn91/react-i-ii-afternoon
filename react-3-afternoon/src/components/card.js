import React, { Component } from 'react';
import "./Card.css"

export default class Card extends Component{
    constructor(){
        super()

        this.state = {

        }
    }







    render(){
        console.log(this.props)
        let {id, city,title, employer,favoriteMovies} = this.props.parentData
        let {first, last} = this.props.parentData.name
        let mappedMovies = favoriteMovies.map(movie =>{
            return <li>{movie}</li>
        })
        return(
            <div className="Card-parent">
                <div className="card-number">
                    {id}/25
                </div>
                <div className="content">
                    <h1>
                        {first} {last}
                    </h1>

                    <ul>
                        <li><b>From:</b> {city}</li>
                        <li><b>Job title:</b> {title}</li>
                        <li><b>Employer:</b> {employer}</li>
                    </ul>

                    <ol>
                       <b>Favorite Movies:</b> <div className="movies">{mappedMovies}</div>
                    </ol>
                </div>
            </div>
        )
    }
}

