import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
// tworzenie elementów galerii
const markup = galleryItems
  .map(
    image => `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
</li>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', markup);

//wyszukanie elementów galerii dla skryptu SimpleLightbox
const galleryImages = document.querySelectorAll('.gallery__item');

//inicjalizacja biblioteki SimpleLightbox
new SimpleLightbox(galleryImages, {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
