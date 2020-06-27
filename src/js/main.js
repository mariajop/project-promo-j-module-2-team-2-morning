'use strict';

/* VARIABLES */

//Pasar a CSS creando una clase con los colores de cada paleta
/* .palette1 {
    color:
    & h1 {
        color: 
    }
    & p{
        color:
    }
} */

const palette1 = document.querySelector('.js-palette1');
const palette2 = document.querySelector('.js-palette2');
const palette3 = document.querySelector('.js-palette3');

//FORMULARIO
//Check Paleta de colores
const checkPalette1 = document.querySelector('.js-check1');

function setPalette1() {
  document.querySelector('.preview__container').classList.add('palette1');
  document.querySelector('.preview__container').classList.remove('palette2');
  document.querySelector('.preview__container').classList.remove('palette3');
}

checkPalette1.addEventListener('click', setPalette1);

const checkPalette2 = document.querySelector('.js-check2');

function setPalette2() {
  document.querySelector('.preview__container').classList.add('palette2');
  document.querySelector('.preview__container').classList.remove('palette1');
  document.querySelector('.preview__container').classList.remove('palette3');
}

checkPalette2.addEventListener('click', setPalette2);

const checkPalette3 = document.querySelector('.js-check3');

function setPalette3() {
  document.querySelector('.preview__container').classList.add('palette3');
  document.querySelector('.preview__container').classList.remove('palette1');
  document.querySelector('.preview__container').classList.remove('palette2');
}

checkPalette3.addEventListener('click', setPalette3);

//Datos Formulario

//Objeto para crear los datos del formulario
const formData = {};

//Objeto que tiene todas las clases de la card para poder pintarlas
const cardFields = {
  fullname: document.querySelector('.js-text-name'),
  job: document.querySelector('.js-text-job'),
  emailAddress: document.querySelector('.js-mail'),
  telephone: document.querySelector('.js-number'),
  linkedin: document.querySelector('.js-linkedin'),
  github: document.querySelector('.js-github'),
};

//Variables con input del form
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputEmail = document.querySelector('.js-input-mail');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');

//Funcion que guarda los datos en el objeto y lo pinta en la tarjeta
function setData(ev) {
  const name = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;

  formData[name] = inputValue;
  cardFields[name].innerHTML = ev.currentTarget.value;
}

//Funcion que valida los datos

//Listeners
inputName.addEventListener('keyup', setData);
inputJob.addEventListener('keyup', setData);

//-------------------RESET------------------------
// get resetElement dom element
const resetElement = document.querySelector('.js-reset');

// clear all inputs
function reset() {
  inputName.value = '';
  inputJob.value = '';
  inputEmail.value = '';
  inputPhone.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';

  cardFields.fullname.innerHTML = 'Nombre Apellido';
  cardFields.job.innerHTML = 'Front-end developer';
  /* cardFields.emailAddress. "";
  cardFields.telephone: "";
  cardFields.linkedin: "";
  cardFields.github: ""; */
}

// listen click in reset button
resetElement.addEventListener('click', reset);

function changeToRed() {
  console.log('changeToRed');
  document.querySelector('.preview__container').classList.add('palette1');
}
