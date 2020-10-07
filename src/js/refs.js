export default {
  galleryContainer: document.querySelector('ul.js-gallery'),
  backdrop: document.querySelector('.lightbox'),
  backdropOverlay: document.querySelector('.lightbox__overlay'),
  backdropContent: document.querySelector('.lightbox__content'),
  closeModalBtn: document.querySelector(
    ".lightbox button[data-action='close-lightbox']",
  ),
  imgInModal: document.querySelector('img.lightbox__image'),
  galleryItem: document.querySelector('.gallery__item'),
  galleryImage: document.querySelector('.gallery__image'),
};
