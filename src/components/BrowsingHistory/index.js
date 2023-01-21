import React, { useState } from 'react'
import BrowserItem from '../BrowserItem'
import './index.css'

const BrowsingHistory = ({ initialHistoryList }) => {
  const [items, setItems] = useState(initialHistoryList)
  const onClickDelete = id => {
    const updatedResults = items.filter(eachItem => eachItem.id !== id)
    setItems(updatedResults)
  }

  const onChangeSearchInput = searchInput => {
    if (searchInput) {
      const newResults = items.filter(eachResult => eachResult.title.toLowerCase().includes(searchInput.toLowerCase()));
      setItems(newResults);
    } else {
      setItems(initialHistoryList);
    }
  }

  return (
    <div className="browser-app">
      <div className="browser-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="history"
        />
        <div className="search-cont">
          <button className="search-btn" type="button" id="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
          </button>
          <input
            type="search"
            className="search-input"
            placeholder="Search History"
            onChange={(e) => onChangeSearchInput(e.target.value)}
          />
        </div>
      </div>
      <ul className="history-cont">
        {items.length > 0 ? items.map(item => (
          <BrowserItem
            key={item.id}
            browserDetails={item}
            onClickDelete={onClickDelete}
          />
        )) :
          <div className="history-cont">
            <p className="empty-cont">There is no history to show</p>
          </div>
        }
      </ul>
    </div>
  )
}

export default BrowsingHistory
