// import { Modal } from 'components/Modal/Modal';
import React from 'react';

export const ImageGalleryItem = ({
  image: { id, smallImageURL, tag },
  onClick,
}) => {
  return (
    <li className="gallery-item" onClick={() => onClick(id)}>
      <img src={smallImageURL} alt={tag} width="50" />
    </li>
  );
};
