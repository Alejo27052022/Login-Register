
//Declaracion de Variables

const section_one = document.querySelector('#section1');
const section_two = document.querySelector('#section2');

const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const direction = document.querySelector('#direction');

direction.addEventListener('click', mostrarsection1)
button2.addEventListener('click', mostrarsection2);

function mostrarsection2(){
    section_one.classList.add('inactive');
    section_two.classList.remove('inactive');
}

function mostrarsection1(){
    section_two.classList.add('inactive');
    section_one.classList.remove('inactive');
}


