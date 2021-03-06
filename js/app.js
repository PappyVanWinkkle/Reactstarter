import React from 'react'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Details from './detail'
import preload from '../public/data.json'
import Search from './Search'


console.log(Details)

const App = React.createClass({
  render () {
    return (
        <Provider store={store}>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={(props) => <Search shows={preload.shows}{...props} />} />
          <Match pattern='/detail/:id' component={(props) => {
            const show = preload.shows.filter((show) => props.params.id === show.imdbID)
            return <Details show={show[0]} {...props} />
          }} />
        </div>
        </Provider>
      )
  }
})

export default App 
