import { ModalOverlay, Modalwin } from './Modal.styled.js';
export const Modal = ({ largeImageURL }) => {
  return (
    <ModalOverlay className="overlay">
      <Modalwin className="modal">
        <img src={largeImageURL} alt="" />
      </Modalwin>
    </ModalOverlay>
  );
};
