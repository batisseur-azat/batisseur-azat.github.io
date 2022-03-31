const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.slider');
const navClose = document.querySelector('.close');

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener('click', () => {
    if (navLeft < 0) {
        menu.classList.add('show');
        document.body.classList.add('show');
        navBar.classList.add('show');
    }
})

navClose.addEventListener('click', () => {
    if (navLeft < 0) {
        menu.classList.remove('show');
        document.body.classList.remove('show');
        navBar.classList.remove('show');
    }
})

const navBar = document.querySelector('nav');
const navHeight = navBar.getBoundingClientRect().height;
const setup = document.querySelector('.color_setup')


window.addEventListener('scroll', () => {
    const scrollHeight = window.pageXOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add('fix-nav')
    } else {
        navBar.classList.remove('fix-nav')
    }
    setup.classList.remove('open')
})

// const widget = document.querySelectorAll('.widget')

// widget.addEventListener('click', () => {
//     setup.classList.toggle('open')
// })

const colors = [...document.querySelectorAll('.colors span')];
document.querySelector(':root').style.setProperty('--baseColor', '#0044ff')

colors.forEach(color => {
    color.addEventListener('click', () => {
        const currentColor = color.dataset.id;
        document.querySelector(':root').style.setProperty('--baseColor', currentColor)
    })
})

constlinks = [...document.querySelectorAll('.scroll-link')]
link.map(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const id = e.target.getAttribute('href').slice(1);
        const el = document.getElementsById(id);
        constfixNav = navBar.classList.contains('fix-nav')
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0
        })
    })
})