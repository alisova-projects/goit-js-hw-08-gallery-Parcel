import refs from './refs';

export default function onImageClick(evt) {
  evt.preventDefault();

  const target = evt.target;
  const parentItem = target.closest('.gallery__item');

  // проверяем, чтобы клик был точно по изображению
  const isImage = target.classList.contains('gallery__image');
  if (!isImage) {
    return;
  }
  // добавляем класс открытия модалки
  refs.backdrop.classList.add('is-open');

  // устанавливаем новый src элемента img.lightbox__image
  changeModalImgSourсe(target);

  // вешаем слушатели клавиатуры
  addKeyListeners();

  // вешаем активный класс на картинку, кот. открывается в модалке
  parentItem.classList.add('lightbox__image');
}

function addKeyListeners() {
  //   window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onRightArrowPress);
  window.addEventListener('keydown', onLeftArrowPress);
}

function changeModalImgSourсe(elem) {
  refs.imgInModal.src = elem.dataset.source;
}

// перелистывание картинок

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
