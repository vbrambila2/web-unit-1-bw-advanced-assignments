let topp = window.scrollY;
let vh = document.body.clientHeight - window.innerHeight;
let percent = (topp / vh) * 100;

let progressBar = document.querySelector('.progress');

window.addEventListener('scroll', function() {
    console.log('hello');
    topp = window.scrollY;
    vh = document.body.clientHeight - window.innerHeight;
    percent = (topp / vh) * 100;
    progressBar.style.width = percent + '%';
});
