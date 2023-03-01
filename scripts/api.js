'use strict'
/*API unsplash*/
const requestUrl ='https://api.unsplash.com/search/photos?query=city&client_id=1gqn_L1wNrrEEh1aXcgFjKKLiWUQD5mEbKABCTpTQzo';
const getButton = document.querySelector('.getButton');
const galeria = document.querySelector('.galeria');

getButton.addEventListener('click', async () => {
  let randomImage = await getNewImage();
  galeria.src = randomImage;
});

async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 5);
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    });
}