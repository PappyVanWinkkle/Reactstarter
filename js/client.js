import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Details from './detail'
import preload from '../public/data.json'
import Search from './Search'
import '../public/normalize.css'
import '../public/style.css'

console.log(Details)

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={(props) => <Search shows={preload.shows}{...props} />} />
          <Match pattern='/detail/:id' component={(props) => {
            const show = preload.shows.filter((show) => props.params.id === show.imdbID)
            return <Details show={show[0]} {...props} />
          }} />
        </div>
      </BrowserRouter>
      )
  }
})

render(<App />, document.getElementById('app'))
