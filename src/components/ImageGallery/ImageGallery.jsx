// import * as basicLightbox from 'basiclightbox';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';
import { Modal } from 'components/Modal/Modal.jsx';
import { ImaGalleryUl } from './ImageGallery.styled.js';
// import * as basicLightbox from 'basiclightbox';
// import { array } from 'yup';
// import PropTypes  from 'pro;
export class ImageGallery extends Component {
  // Props = { articles: array, }

  state = {
    id: 0,
    isModal: false,
  };
  // showModal() {
  //   this.setState({ isModal: true });
  // }
  // closeModal() {
  //   this.setState({ isModal: false });
  // }
  // handleClick(id) { 
  //   for (const img of this.props.images) {
  //     if (img.id === id) {
  //       return img.largeImageURL;
  //     }
  //   }
    
      // this.setState.isModal = true;
    

      
    // }
  // }
  //  isModal&&<Modal largeImageURL={this.props.articles.largeImageURL}
  //       ></Modal>}

  render() {
   
    return (
      <ImaGalleryUl>
        {this.props.images.map(
          ({ id, tags, largeImageURL, webformatURL }) => (
            <ImageGalleryItem
              key={id}
              // onClick={() => this.handleClick(id)}
              images={this.props.images}
              isModal={this.state.isModal}
              tags={tags}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
            ></ImageGalleryItem>
          )
        )}
        {this.state.isModal && (
          <Modal
          // closeModal={}
          ></Modal>
        )}
      </ImaGalleryUl>
    );
  }
};
