const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav__link');

console.log(header);
console.log(navLinks);

let name = 'Yaroslav';

function sayHello() {
    let message = 'Hello JavaScript ' + name;
    console.log(message);
}

sayHello();


function simpleMatch(a, b) {
    let result = a + b;
    return result;
}

let sum = simpleMatch(11, 22);
console.log(sum);




// вызывать ф-цию можно по разному, как видно на 2-х примерах ниже
window.addEventListener('scroll', checkScroll);

// проверка после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    checkScroll();
});

function checkScroll() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('red');
    } else {
        header.classList.remove('red');
    }
}




for(let navItem of navLinks) {
    navItem.addEventListener('click', function() {
        console.log(navItem.text);
    });
}




let myHtml = document.querySelector('button');
myHtml.addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
});




let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
    let imgSrc = myImage.getAttribute('src');
    if(imgSrc === 'images/first_400x400.jpg') {
        myImage.setAttribute('src', 'images/last_400x400.jpg');
    } else {
        myImage.setAttribute('src', 'images/first_400x400.jpg');
    }
});




let changeBtn = document.querySelector('.change-user'),
    changeHead = document.querySelector('.change-heading');

    function setUserName() {
        let myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        changeHead.textContent = 'Mozilla is cool, ' + myName;
    }
    if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        let recievedName = localStorage.getItem('name');
        changeHead.textContent = recievedName;
    }
    changeBtn.addEventListener('click', setUserName);