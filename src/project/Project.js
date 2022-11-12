import './Project.scss';
import { useState, useContext } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import Modal from '../modal/Modal';
import { ThemeContext } from '../context/ThemeContext';
import { BiCode } from 'react-icons/bi';
import { BiCheck } from 'react-icons/bi';

function Project({
  picture,
  title,
  description,
  technologies,
  codeLink,
  demoLink,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { darkTheme } = useContext(ThemeContext);

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <>
      <div
        className={`project__container ${
          darkTheme ? 'project__dark-theme' : ''
        }`}
      >
        <img
          className="project__img"
          src={picture}
          alt={title}
          onClick={() => setIsOpen(true)}
        />
        <h3 className="project__title">{title}</h3>
        <div className="project__badges">{technologies}</div>
        <p className="project__description">{description}</p>
        <div className="project__icons">
          <div className="project__icon">
            <a href={codeLink}>
              <BiCode className="icon__code" size={22} />
              <p>Code</p>
            </a>
          </div>
          {!demoLink ? (
            ''
          ) : (
            <div className="project__icon">
              <a href={demoLink}>
                <BiCheck className="icon__code" size={22} />
                <p>Demo</p>
              </a>
            </div>
          )}
        </div>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        domNodeRef={domNode}
      >
        <img className="modal__img" src={picture} alt={title} />
      </Modal>
    </>
  );
}

export default Project;
