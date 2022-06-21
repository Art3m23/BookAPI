import React, { useState } from 'react';
import BookCard from './components/BookCard/BookCard/BookCard';
import TotalItem from './components/TotalItem';
import './App.css';
import Logo from './search.svg';
import Loading from './components/Loading/Loading';

function App() {
  const [book, setBook] = useState("");
  const [arrayBook, setArrayBook] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [maxResults] = useState(30);
  const [orderBy, setOrderBy] = useState("");
  const [categories, setCategories] = useState("");
  const [display, setDisplay] = useState("none");
  const style = { display: `${display}` };
  const orderByValue = 'relevance';
  function handleChange(event) {
    setLoading(false);
    setDisplay('none');
    setArrayBook([]);
    setStartIndex(0);
    const book = event.target.value;
    setBook(book);
  }

  function handleChangeForSelect(event) {
    setLoading(false);
    setDisplay('none');
    setArrayBook([]);
    setStartIndex(0);
    const orderBy = event.target.value;
    setOrderBy(orderBy);
  }

  function handleCategoriesChange(event) {
    setLoading(false);
    setDisplay('none');
    setArrayBook([]);
    setStartIndex(0);
    const categories = event.target.value;
    setCategories(categories);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStartIndex(0);
    console.log(arrayBook);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}+subject:${categories === 'all' ? '' : categories}&orderBy=${orderBy === '' ? orderByValue : orderBy}&key=AIzaSyADpr5R3V_nSai8eTz_RzNpBWm2ikEzSk0&maxResults=${maxResults}&startIndex=${startIndex}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArrayBook(data.items);
        setStartIndex(startIndex + 30);
        setTotalItems(data.totalItems);
        console.log(startIndex);
        setLoading(false);
        setDisplay('');
      });
  }
  function handleClick(event) {
    event.preventDefault();
    handleSubmit(event);
  }

  return (
    <>
      <div className="container">
        <h2>Search for books</h2>
        <form onSubmit={handleSubmit}>
          <div className="searchContainer">
            <input onChange={handleChange} type="search" placeholder="Search for books" id="book" required />
            <button><img src={Logo} alt="Search" className="searchLogo" /></button>
          </div>
          <div className="selectContainer">
            <div>
              <label htmlFor="categories">Categories</label>
              <select defaultValue={'all'} className="categories" id="categories" onChange={handleCategoriesChange}>
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
              <select defaultValue={'relevance'} className="sorting" id="sorting" onChange={handleChangeForSelect}>
                <option value="DEFAULT" disabled>Select a category</option>
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <TotalItem totalItems={totalItems} style={style}></TotalItem>
      <div className="cardContainer">
        <BookCard books={arrayBook} ></BookCard>
      </div>
      {loading ? <Loading /> : <button className='loadButton' onClick={(event) => handleClick(event)} style={style}>load more</button>}
    </>
  );
}

export default App;
