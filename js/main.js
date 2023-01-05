'use strict';

{
  const requestOpen = document.getElementById('c-request');
  const close = document.getElementById('c-close');
  const modal = document.getElementById('c-modal');
  const mask = document.getElementById('c-mask');
  const apply = document.getElementById('c-apply');
  const nameText = document.getElementById('nameTextBox');
  const emailText = document.getElementById('emailTextBox');
  const nameCaution = document.getElementById('nameCaution');
  const emailCaution = document.getElementById('emailCaution');
  const submitButton =document.getElementById('c-submit-btn');

  if (requestOpen != null) {
    requestOpen.addEventListener('click', () => {
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    });
  }

  if (close != null) {
    close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    });
  }

  if (apply != null) {
    apply.addEventListener('click', () => {
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    });
  }

  let works = document.querySelectorAll('.c-each-work-img');

  for (let i = 0; i < works.length; i++) {
    works[i].addEventListener('click', () => {
      works[i].classList.toggle('selected');
    })
  }

  nameText.addEventListener('input', () => {
    nameCaution.textContent = inputChange('Name', nameText.value);
  });

  emailText.addEventListener('input', () => {
    emailCaution.textContent = inputChange('Email', emailText.value);
  });

  function inputChange(info, inputText) {
    if (inputText === '') {
      return '* ' + info + ' is essential.';
    } else {
      return ''
    }
  }


  if (nameCaution.textContent === '' && emailCaution.textContent === '') {
    // submitButton.disabled = false;
    submitButton.disabled = true;
    // console.log(nameCaution.textContent);
  } else {
    submitButton.disabled = true;
    // console.log(nameCaution.textContent);
    // console.log(emailCaution.textContent);
  }


}
