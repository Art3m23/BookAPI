import React from 'react';
import './App.css';
import Logo from './search.svg';

function App() {

  return (
    <>
      <div className="container">
        <h2>Search for books</h2>
        <form>
          <div className="searchContainer">
            <input type="search" placeholder="Search for books" id="book" />
            <button><img src={Logo} alt="Search" className="searchLogo" /></button>
          </div>
          <div className="selectContainer">
            <div>
              <label htmlFor="categories">Categories</label>
              <select defaultValue={'all'} className="categories" id="categories" >
                <option value="DEFAULT" disabled>Select a category</option>
                <option value="all">all</option>
                <option value="Art">art</option>
                <option value="Biography">biography</option>
                <option value="Computers">computers</option>
                <option value="History">history</option>
                <option value="Medical">medical</option>
                <option value="Poetry">poetry</option>
              </select>
            </div>
            <div>
              <label htmlFor="sorting">Sorting by</label>
              <select defaultValue={'relevance'} className="sorting" id="sorting">
                <option value="DEFAULT" disabled>Select a category</option>
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
