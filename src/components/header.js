import React from 'react';

export default class Header extends React.Component {
  render(){
    return(
      <section className="header_container">
        <section className="search_criteria_box">
          <div className="logo_icon">
            <img src="https://cdn.worldvectorlogo.com/logos/airbnb-2.svg"/>
          </div>
          <form className="search_form">
            <input className="search_form_input search_1" type="text" placeholder="Anywhere"/>
            <input className="search_form_input" type="text" placeholder="Anytime"/>
            <input className="search_form_input search_3" type="text" placeholder="1 guest"/>
          </form>
        </section>
        <section className="header_links_container">
          <a href="#">For You</a>
          <a href="#">Homes</a>
          <a href="#">Experiences</a>
          <a href="#">Places</a>
        </section>
      </section>
    )
  }
}
