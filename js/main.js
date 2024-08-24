/* eslint-disable no-unused-vars */
const modalButton = document.querySelector('.jsModalButton');
const modalCloseButton = document.querySelector('.jsModalClose');
const modalOverlay = document.querySelector('.modal-overlay');

// const modal = document.querySelector('.modal');

modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', event => {
  console.log(event.target)
  if (!event.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open')
  }
})
