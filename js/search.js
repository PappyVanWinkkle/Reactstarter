import React from 'react'
import Header from './header'
import { connect } from 'react-redux'
import ShowCard from './show'
const {shape, arrayOf, string} = React.PropTypes

const Search = React.createClass({
  // add the proptypes
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    })),
    searchTerm: string
  },
  
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0
            })
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
          )
            })}
        </div>
      </div>
    )
  }
})
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}
export default connect(mapStateToProps)(Search)
