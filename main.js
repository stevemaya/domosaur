const span = document.querySelector('span.mess-with-me');
span.style.fontSize = '3em';

const paragraph = document.querySelector('p.mess-with-me');
paragraph.style.backgroundColor = 'green';

const hideMe = document.querySelector('#hide-me')
hideMe.style.display = 'none';

const triceratops = document.querySelector('#triceratops');
triceratops.style.width = '324px';

const makeOrange = () => {
    span.style.color = 'orange';
}
span.addEventListener('click', makeOrange);

const makeRedBorder = () => {
    triceratops.style.border = '1px solid red';
}

triceratops.addEventListener('click', makeRedBorder);

const feather = document.querySelector('#feathers');
const makeTransparent = () => {
    feather.style.opacity = '50%';
}
feather.addEventListener('click', makeTransparent);

const toggle = document.querySelector('#toggle');
const row = document.querySelector('#row');
const changeBackground = () => {
    if (row.style.backgroundColor !== 'black'){
        row.style.backgroundColor = 'black';
    } else {
        row.style.backgroundColor = '';
    }
}
toggle.addEventListener('click', changeBackground);

const biggify = document.querySelector('#biggify');

const largerBiggify = function () {
    biggify.style.width = '200px';
}

const smallerBiggify = function () {
    biggify.style.width = '162px';
}

biggify.addEventListener('mouseover', largerBiggify);

biggify.addEventListener('mouseleave', smallerBiggify);