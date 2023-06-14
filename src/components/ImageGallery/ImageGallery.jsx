// import * as basicLightbox from 'basiclightbox';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';
import { Modal } from 'components/Modal/Modal.jsx';
import { ImaGalleryUl } from './ImageGallery.styled.js';
import * as basicLightbox from 'basiclightbox';
// import { array } from 'yup';
// import PropTypes  from 'pro;
export class ImageGallery extends Component {
  // Props = { articles: array, }

  state = {
    id: 0,
    isOpen: false,
  };
  //  ;
handleClick() {
  const instance = basicLightbox.create(`
	${(<Modal largeImageURL={this.props.articles.largeImageURL}
      ></Modal>)}
`);
    instance.show();
    // if (instance.visible()) {
    //   document.addEventListener('keydown', closer);
    //   function closer(event) {
    //     if (event.code === 'Escape') {
    //       instance.close(() => document.removeEventListener('keydown', closer));
    //     }
    //   }
    // }
  }
  render() {
    // console.log();
    return (
      <ImaGalleryUl>
        {this.props.articles.map(
          ({ id, tags, largeImageURL, webformatURL }) => (
            <ImageGalleryItem
              key={id}
              onClick={() => this.handleClick(id)}
              tags={tags}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
            ></ImageGalleryItem>
          )
        )}
      </ImaGalleryUl>
    );
  }
};
