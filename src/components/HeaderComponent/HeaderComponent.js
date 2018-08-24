import React, { Component } from 'react'
import './HeaderComponent.css'
import Instagram from '../images/instagram.png'

import LogoComponent from './LogoComponent'
import SearchBoxComponent from './SearchBoxComponent'
import IconMenuComponent from './IconMenuComponent'

export default class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbarContainer">
        <div className="container">
            <div className="row fullWidth">
                <div className="col">
                  <LogoComponent logoIcon={Instagram} logoTitle="Instagram"/>
                </div>
                <div className="col">
                  <SearchBoxComponent />
                </div>
                <div className="col">
                  <IconMenuComponent icons={["compass","heart","user"]} />
                </div>
            </div>
        </div>
      </nav>
    )
  }
}
