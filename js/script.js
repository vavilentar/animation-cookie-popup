//GSAP BASICS
// gsap.to('.text', {y: 100, opacity: 0, duration: 1}) 
// gsap.fromTo('.text', {opacity:0, y: 20}, {opacity:1, y: 0, duration: 1})

//GSAP Timeline
const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power2.out"}});

//Timeline позволяет запускать анимации по очереди с определенным промежутком (duration)

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.2});
tl.fromTo('.cookie', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0deg'},'<50%');
tl.fromTo('.text', {x:30, opacity:0}, {x:0, opacity:1}, '<');

//'<' синхронизирует анимацию с предыдущей


//Скрываем окно
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
	gsap.to('.cookie-container', {opacity: 0, y:100, duration: 0.75, ease: "power1.out"});
})

//Cookie jump

tl.fromTo('.cookie', {y:0, rotation: '0deg'}, {y:-20, rotation: '-20deg', yoyo: true, repeat: -1})


tl.fromTo('#crumbs', {y:0, rotation: '0deg'}, {y:-20, rotation: '-20deg', yoyo: true, repeat: -1}, '<')