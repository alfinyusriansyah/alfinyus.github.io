// -------------------toogle navbar--------------------------------
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}



// -------------------active link--------------------------------

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    // -------------------------sticky bar------------------------------
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
};


// ------------scroll reveal ----------------------------
ScrollReveal({
    reset:true, 
    distance: '80px', 
    duration:  2000, 
    delay: 200,})


ScrollReveal().reveal('.content-home', {origin:'top'});
ScrollReveal().reveal('.heading', {origin:'top'});
ScrollReveal().reveal('.home-image', {origin:'bottom'});
ScrollReveal().reveal('.skills-container', {origin:'bottom'});
ScrollReveal().reveal('.portofolio-box', {origin:'bottom'});
ScrollReveal().reveal('.line', {origin:'bottom'});
ScrollReveal().reveal('.content-home h1', {origin:'left'});
ScrollReveal().reveal('.about-image img', {origin:'left'});
ScrollReveal().reveal('.about-description', {origin:'right'});






// ----------------typed.js--------------------------------

const type = new Typed('.multiple-text',{
    strings : ['Backend','Data science','Frontend'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});