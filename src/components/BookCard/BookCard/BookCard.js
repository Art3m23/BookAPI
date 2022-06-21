import React, { useState } from 'react';
import "./bookcard.css";
import bookImg from "../book.jpg";
import Modal from '../../Modal/Modal';

export default function BookCard({books}) {
  const [book, setBook] = useState();
  const [displayModal, setDisplayModal] = useState('none');
  const styleModal = { display: `${displayModal}` };
  const body = document.querySelector('body');
  function notevisibleScroll(){
    body.style.overflow='hidden';
  }
  function visibleScroll(){
    body.style.overflow='inherit';
  }
  return (
    books.map((item, index) => {
      return (
        <div key={index}>
          <div className="card"  onClick={()=>{setDisplayModal(''); setBook(item);notevisibleScroll()}}>
            <img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : bookImg} alt="book" />
            <h3>{item.volumeInfo.categories ? item.volumeInfo.categories[0] : ''}</h3>
            <h3>{item.volumeInfo.title ? item.volumeInfo.title : ''}</h3>
            <p>{item.volumeInfo.authors ? item.volumeInfo.authors.join(' / ') : ''}</p>
          </div>
          <Modal style={styleModal} bookItem={book} onClose={()=>{setDisplayModal('none');visibleScroll()}}></Modal>
        </div>
      );
    })
  );

}
