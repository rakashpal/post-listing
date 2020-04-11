import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer';
class Layout extends Component {
 
  render() {
    return (
      <>
      <Header />
      <div className="main-wrapper">
        {this.props.children}
      </div>
          <Footer />
      </>
    )
  }
}

export default Layout