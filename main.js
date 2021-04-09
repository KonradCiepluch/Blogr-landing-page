const btnBrg = document.querySelector('.header__brg');
const nav = document.querySelector('.nav');
const brgIco = document.querySelector('.header__brg img');
const links = document.querySelectorAll('.nav__link');

btnBrg.addEventListener('click', () => {
    nav.classList.toggle('active');
    btnBrg.classList.toggle('active');
})

document.body.addEventListener('click', ()  => {
    if(document.body.offsetWidth >= 1024) {
        nav.classList.remove('active');
        links.forEach(link => {
            link.nextElementSibling.classList.remove('active');
            link.querySelector('.link-arrow').classList.remove('fa-angle-up');
            link.querySelector('.link-arrow').classList.add('fa-angle-down');
        })
    }
})
document.body.addEventListener('resize', () => {
    
})
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
        if(document.body.offsetWidth < 1024) {
            link.style.color = 'rgb(102, 102, 102)';
            link.nextElementSibling.classList.toggle('active');
            if(link.querySelector('.link-img').style.transform === '') {
                link.querySelector('.link-img').style.transform = 'rotateX(180deg)';
                }
            else if(link.querySelector('.link-img').style.transform === 'rotateX(180deg)') {
                link.querySelector('.link-img').style.transform = '';
                link.style.color = 'black';
                }
        } else {
            link.nextElementSibling.classList.toggle('active');
            if(link.querySelector('.link-arrow').classList.contains('fa-angle-down')) {
                link.querySelector('.link-arrow').classList.remove('fa-angle-down');
                link.querySelector('.link-arrow').classList.add('fa-angle-up');
                }
            else if(link.querySelector('.link-arrow').classList.contains('fa-angle-up')) {
                link.querySelector('.link-arrow').classList.remove('fa-angle-up');
                link.querySelector('.link-arrow').classList.add('fa-angle-down');
                }
        }
    })
})