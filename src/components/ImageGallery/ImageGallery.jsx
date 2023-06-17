// import * as basicLightbox from 'basiclightbox';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';

import { ImaGalleryUl } from './ImageGallery.styled.js';
import { Modal } from '../Modal/Modal.jsx';
// import * as basicLightbox from 'basiclightbox';
// import { array } from 'yup';
// import PropTypes  from 'pro;
export class ImageGallery extends Component {
  // Props = { articles: array, }

  state = {
    ImageData: {},
    isModal: false,
  };
  // modalIsOpen() {
  //   this.setState({ isModal: true });
  //   // return this.state.isModal
  // }

  getImgById = id =>
    this.setState({
      ImageData: this.props.images.find(el => el.id === id),
      isModal: true,
    });
  modalIsClose= ()=> {
    this.setState({ isModal: false });
  }

  //  isModal&&<Modal largeImageURL={this.props.articles.largeImageURL}
  //       ></Modal>}

  render() {
  
    return (
      <ImaGalleryUl>
        {this.props.images.map(img => {
          // const { id, tags, largeImageURL, webformatURL } = img;
          return (
            <ImageGalleryItem
              key={img.id}
              // onClick={() => this.handleClick(id)}
              // images={this.props.images}
              isModal={this.state.isModal}
              // tags={tags}
              // largeImageURL={largeImageURL}
              // webformatURL={webformatURL}
              getImgById={this.getImgById}
              picture={img}
            ></ImageGalleryItem>
          );
        })}
        {/* {this.state.isModal && ( */}
        <Modal
          modalIsOpen={this.state.isModal}
          // afterOpenModal={this.afterOpenModal}
          img={this.state.ImageData}
          closeModal={this.modalIsClose}
        ></Modal>
        {/* )} */}
      </ImaGalleryUl>
    );
  }
};
