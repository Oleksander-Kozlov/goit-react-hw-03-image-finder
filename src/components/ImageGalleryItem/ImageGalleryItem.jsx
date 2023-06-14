import { GalerryLi, Img } from './ImageGalleryItem.styled'


export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <GalerryLi className="gallery-item">
      <Img src={webformatURL} alt={tags} />
    </GalerryLi>
  );
};

