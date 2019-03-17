import React, { Component } from 'react';
import Footer from '../../../../components/Footer/Footer';
import MovieGrid from '../../../../components/HomeItems/MovieGrid/MovieGrid';
import Hero from '../../../../components/HomeItems/Hero/Hero';

class HomePage extends Component {
  state = {}
  componentDidMount() { }

  render() {
    return (
      <div>
        <Hero />
        <MovieGrid />
        <Footer />
      </div>
    )
  }
}

export default HomePage;