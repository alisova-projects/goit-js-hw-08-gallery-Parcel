import galleryItems from './img/gallery-items';
import './css/styles.scss';
import refs from './js/refs';

// создаём разметку галлереи
import { createGalleryItemsMarkup } from './js/markup-creation';
const galleryItemMarkup = createGalleryItemsMarkup(galleryItems);

refs.galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup);

//вешаем слушателя событий
refs.galleryContainer.addEventListener('click', onImageClick);
import onImageClick from './js/on-image-click';

// зыкрытие модалки
refs.closeModalBtn.addEventListener('click', onCloseModal);
import onCloseModal from './js/on-close-modal';
