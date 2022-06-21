import React from "react";
import "./Modal.css";
import book from "../BookCard/book.jpg";
import Logo from '../../close.svg';

class Modal extends React.Component {
  render() {
    if(!this.props.bookItem){
      return null;
    }
    return (
      <div className="modal" style={this.props.style}>
        <div className="modal_container">
          <div className="close_img">
            <button onClick={this.props.onClose}><img src={Logo} alt="close" className="close"/></button>
          </div>
          <div className="modal_inner">
            <div className="modal_img_container"><img src={this.props.bookItem.volumeInfo.imageLinks ? this.props.bookItem.volumeInfo.imageLinks.thumbnail : book} alt="book" /></div>
            <div className="modal_text_container">
              <h3 className="categoriesModal">{this.props.bookItem.volumeInfo.categories ? this.props.bookItem.volumeInfo.categories.join(' / ') : ''}</h3>
              <h3 className="title">{this.props.bookItem.volumeInfo.title ? this.props.bookItem.volumeInfo.title : ''}</h3>
              <p className="authors">{this.props.bookItem.volumeInfo.authors ? this.props.bookItem.volumeInfo.authors.join(' / ') : ''}</p>
              <p className="description">{this.props.bookItem.volumeInfo.description ? this.props.bookItem.volumeInfo.description : 'There is no description for this book'}</p>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
export default Modal;