import React from 'react'
import JustBooked from './JustBooked'
import {getExcursions} from '../services/justBookedService'
import {getExperiences} from '../services/experiencesService'

export default class Landing extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        excursions: [],
        experiences: []
      }
    }

  componentDidMount(){
    this.setState({excursions: getExcursions(), experiences: getExperiences()})
    console.log(this.state)
  }

  render(){
    const excursionList = this.state.excursions.map(item => (
        <JustBooked
          image={item.image}
          name={item.name}
          />
      ));

    const experienceList = this
    return(
      <section className="main">
        <h1>Just Booked</h1>
        <section className="just_booked_container">
          {excursionList}
        </section>
        <h2>Experiences</h2>
      </section>
    )
  }
}
