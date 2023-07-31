document.querySelector('.header__burger').addEventListener("click", function(e){
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.burger__list').classList.toggle('active');
    document.body.classList.toggle('scrollLock');
});

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin:'top'});
sr.reveal('.hero-img', {delay: 450, origin:'top'});
sr.reveal('.main__icons', {delay: 500, origin:'left'});
sr.reveal('.main__scroll-down', {delay: 500, origin:'right'});