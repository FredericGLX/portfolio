import './Project.scss';
import CodeIcon from '../icons/icon_code.svg';
import DemoIcon from '../icons/icon_demo.svg';

import { useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import Modal from '../modal/Modal';

function Project({
  picture,
  title,
  description,
  technologies,
  codeLink,
  demoLink,
}) {
  const [isOpen, setIsOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <>
      <div className="project__container">
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
              <img src={CodeIcon} className="icon__code" />
              <p>Code</p>
            </a>
          </div>
          {!demoLink ? (
            ''
          ) : (
            <div className="project__icon">
              <a href={demoLink}>
                <img src={DemoIcon} className="icon__demo" /> <p>Demo</p>
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
