import { GalerryLi, Img } from './ImageGalleryItem.styled'
// import { Modal } from '../Modal/Modal.jsx';

export const ImageGalleryItem = (images) => {

   
  return (
    <GalerryLi className="gallery-item">
      <Img src={images.webformatURL} alt={images.tags} />
    </GalerryLi>
  );
};

