// select all links in the menu
const links = document.querySelectorAll('ul a');

// iterate links to add animations
links.forEach((link, index) => {
    console.log(link);
    console.log((index));
    link.classList.add('bounceInLeft');
    link.setAttribute('style', 'animation-delay: ' + index/4 + 's;');
});

// animation for yes button
const yes = document.querySelector('.confirm');
yes.addEventListener('mouseenter', (evt) => {
    evt.target.classList.add('bounce');
});

yes.addEventListener('webkitAnimationEnd', (evt)=>{
    evt.target.classList.remove('bounce');
});

// animation for no button
const no = document.querySelector('.deny');
no.addEventListener('click', (evt) => {
    evt.target.classList.add('headShake');
});

no.addEventListener('webkitAnimationEnd', (evt)=>{
    evt.target.classList.remove('headShake');
});