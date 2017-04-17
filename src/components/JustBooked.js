import React from 'react';

export default class JustBooked extends React.Component {
  render(){
    return(
        <section className="just_booked_box">
          <img src={this.props.image} alt=""/>
          <div className="just_booked_name">
            <h3>{this.props.name}</h3>
          </div>
        </section>
    )
  }
}
