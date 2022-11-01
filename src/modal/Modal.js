import './Modal.scss';
import ReactDom from 'react-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Modal = ({ open, children, onClose, domNodeRef }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal__overlay">
        <div className="modal__container" ref={domNodeRef}>
          <IoIosCloseCircleOutline
            className="modal-close-icon"
            size="2.6rem"
            color="#fff"
            title="close modal"
            style={{ stroke: '#000', strokeWidth: '4' }}
            onClick={onClose}
          />
          <div>{children}</div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
