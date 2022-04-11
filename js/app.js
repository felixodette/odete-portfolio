const navSlide = () => {
    const burger = document.querySelector('.menu-button');
    const nav = document.querySelector('.desktop-nav');
    const navLinks = document.querySelectorAll('.desktop-nav a');
    

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // navLinks.forEach(link, index) => {
        //     if (link.style.animation) {
        //         link.style.animation = '';
        //     } else {
        //         link.style.animation = `nav-links-fade 0.5s ease forwards $(index/7)s`;
        //     }
        // }
    });
}

const app = () => {
    navSlide();
}

app();