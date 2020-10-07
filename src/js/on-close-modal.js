import refs from './refs';

export default function onCloseModal(event) {
  refs.backdrop.classList.remove('is-open');
  refs.imgInModal.src = '';

  refs.galleryContainer
    .querySelectorAll('gallery__item')
    .forEach(el => el.classList.remove('lightbox__image'));

  removeKeyListeners();
}

// закрытие модалки по клику на оверлей
refs.backdropOverlay.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.target !== refs.imgInModal) {
    onCloseModal();
  }
}

// закрытие модалки по нажатию клавиши ESC
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEsc = ESC_KEY_CODE === event.code;

  if (isEsc) {
    onCloseModal();
  }
}

function removeKeyListeners() {
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('keydown', onRightArrowPress);
  window.removeEventListener('keydown', onLeftArrowPress);
}

function onRightArrowPress(event) {
  const RIGHT_ARROW_KEY_CODE = 'ArrowRight';

  if (event.code === RIGHT_ARROW_KEY_CODE) {
    const currentItem = document.querySelector('.lightbox__image');

    if (currentItem === refs.galleryContainer.lastElementChild) {
      return;
    }

    const nextItem = currentItem.nextElementSibling;

    changeImage(currentItem, nextItem);
  }
}

function onLeftArrowPress(event) {
  const LEFT_ARROW_KEY_CODE = 'ArrowLeft';

  if (event.code === LEFT_ARROW_KEY_CODE) {
    const currentItem = document.querySelector('.lightbox__image');

    if (currentItem === refs.galleryContainer.firstElementChild) {
      return;
    }

    const nextItem = currentItem.previousElementSibling;

    changeImage(currentItem, nextItem);
  }
}

function changeImage(currentActiveItem, nextActiveItem) {
  const nextImg = nextActiveItem.querySelector('.gallery__image');

  changeModalImgSourсe(nextImg);

  currentActiveItem.classList.remove('lightbox__image');
  nextActiveItem.classList.add('lightbox__image');
}
