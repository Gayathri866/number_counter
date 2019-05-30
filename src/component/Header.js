import React, { Component } from 'react'
import './Header.css'
import CountTo from 'react-count-to';

export default class Header extends Component {
    render() {
        return (
            <div className="complete">
        <div className="container">
            <div className="heading">
                <p className="p1">WORDPRESS THEME FOR</p>
                <p className="p2">PREMIUM CONSTRUCTION BUSINESS</p>
            </div>
           
        
  <div class="row">
    <div class="col-sm b1">
        <p class="num1">
        <CountTo to={412} speed={1500} />
        </p>
        {/* <CountTo to={1234} speed={1234} /> */}
     <p className="text1">FINISHED PROJECTS</p>
     
    </div>
    <div class="col-sm b1">
    <p class="num1"><CountTo to={122} speed={1500} /></p>
      <p className="text1">ONGOING PROJECTS</p>
    </div>
    <div class="col-sm b1">
    <p class="num1"><CountTo to={155} speed={1500} /></p>
      <p className="text1">EMPLOYEES</p>
    </div>
  </div>
</div>
            
        
        </div>
          
        )
    }
}
