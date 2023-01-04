'use strict';

{
  const requestOpen = document.getElementById('c-request');
  const close = document.getElementById('c-close');
  const modal = document.getElementById('c-modal');
  const mask = document.getElementById('c-mask');

  requestOpen.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  let works = document.querySelectorAll('.c-each-work-img');

  for (let i = 0; i < works.length; i++) {
    works[i].addEventListener('click', () => {
      works[i].classList.toggle('selected');
    })
    
  }


}
