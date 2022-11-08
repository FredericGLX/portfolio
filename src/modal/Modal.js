import './Modal.scss';
import ReactDom from 'react-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ open, children, onClose, domNodeRef }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal__overlay">
        <motion.div
          key={children.props.alt}
          ref={domNodeRef}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <IoIosCloseCircleOutline
            className="modal-close-icon"
            size="2.6rem"
            color="#fff"
            title="close modal"
            style={{ stroke: '#000', strokeWidth: '4' }}
            onClick={onClose}
          />
          <>{children}</>
        </motion.div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
