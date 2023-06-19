import { GalerryLi, Img } from './ImageGalleryItem.styled'
// import { Modal } from '../Modal/Modal.jsx';
   
export const ImageGalleryItem = ({ picture, getImgById }) => {
  const { id, webformatURL, tags } = picture;
  const handleClick = id => {
    // console.log("Clicked item ID:", id);

    getImgById(id);
  };
  return (
    <GalerryLi className="gallery-item" onClick={() => handleClick(id)}>
      <Img src={webformatURL} alt={tags} loading="lazy" />
    </GalerryLi>
  );
};

