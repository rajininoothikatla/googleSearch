// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSeachInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container shadow">
        <div className="inside-container">
          <img
            alt="google logo"
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search-input-container">
            <img
              alt="search icon"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              placeholder="Search Google"
              type="search"
              className="search-input"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <ul className="list-container">
              {searchResults.map(each => (
                <SuggestionItem
                  suggestionDetails={each}
                  key={each.id}
                  updateSeachInput={this.updateSeachInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
