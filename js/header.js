import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
//const { func, bool, string } = React.PropTypes

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type="text" placeholder="search" />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            Back 
          </Link>
        </h2>  
      )
    }
    return (
      <header>
        <h1>
         <Link to='/'>
         svideo
         </Link>
        </h1>
        {utilSpace} 
      </header>  
    )
  }
}
const { func, bool, string } = React.PropTypes
Header.propTypes = {
  dispatch: func, 
  showSearch: bool, 
  searchTerm: string
}
const mapStateToProps = (state) => {
  return {
     searchTerm: state.searchTerm
  }
}
export default connect(mapStateToProps)(Header)