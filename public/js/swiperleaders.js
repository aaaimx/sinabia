const data = [
    {
        name: 'Bezael Perez',
        img: './images/leaders/leader-bezael_perez.webp',
        team: 'angular',
    },
    {
        name: 'Anartz Mugika Ledo',
        img: './images/leaders/leader-anartz_mugika_ledo.webp',
        team: 'angular',
    },
    {
        name: 'Mayra Rodríguez',
        img: './images/leaders/leader-mayra_rodríguez.webp',
        team: 'angular',
    },
    {
        name: 'Nicolas Molina',
        img: './images/leaders/leader-nicolas_molina.webp',
        team: 'angular',
    },
    {
        name: 'Diego Montoya',
        img: './images/leaders/leader-diego_montoya.webp',
        team: 'angular',
    },
    {
        name: 'Diego Plascencia (diegod3v)',
        img: './images/leaders/leader-diego_plascencia.webp',
        team: 'react',
    },
    {
        name: 'Vanessa Marely',
        img: './images/leaders/leader-vanessa_marely.webp',
        team: 'react',
    },
    {
        name: 'Lina María Montaño Ramírez',
        img: './images/leaders/leader-lina_maría_montaño_ramírez.webp',
        team: 'react',
    },
    {
        name: 'Martin Bavio',
        img: './images/leaders/leader-Martin_Bavio.webp',
        team: 'react',
    },
    {
        name: 'Lara Diaz',
        img: './images/leaders/leader-lara_diaz.webp',
        team: 'react',
    },


    {
        name: 'Cristopher Paniagua',
        img: './images/leaders/leader-cristopher_paniagua.webp',
        team: 'vue',
    },
    {
        name: 'Manuel Ojeda',
        img: './images/leaders/leader-manuel_ojeda.webp',
        team: 'vue',
    },
    {
        name: 'Fernando de la Rosa',
        img: './images/leaders/leader-fernando_de_la_rosa.webp',
        team: 'vue',
    },
    {
        name: 'Noemi Leon',
        img: './images/leaders/leader-noemi_leon.webp',
        team: 'vue',
    },
    {
        name: 'Ignacio Anaya',
        img: './images/leaders/leader-ignacio_anaya.webp',
        team: 'vue',
    },





    {
        name: 'Marcos Rivas',
        img: './images/leaders/leader-marcos_rivas.webp',
        team: 'svelte',
    },
    {
        name: 'Manuel Muños',
        img: './images/leaders/leader-manuel_muños.webp',
        team: 'svelte',
    },
    {
        name: 'Noah Kaufman (Svelte Mastery)',
        img: './images/leaders/leader-noah_kaufman.webp',
        team: 'svelte',
    },
    {
        name: 'Silvestre Vivo',
        img: './images/leaders/leader-silvestre_vivo.webp',
        team: 'svelte',
    },
    {
        name: 'Oscar Barajas',
        img: './images/leaders/leader-oscar_barajas.webp',
        team: 'svelte',
    },
]

const swiper = document.getElementById('swiperContainer')

data.map((e) => {
    const divswiper = document.createElement('div')
    divswiper.classList.add('swiper-slide')
    const divContainer = document.createElement('div')
    divContainer.classList.add('swiperContainer')
    divswiper.appendChild(divContainer)
    const image = document.createElement('img')
    image.src = e.img
    image.alt = e.name
    image.classList.add('swiperContainer__image')
    const spanContainer = document.createElement('div')
    spanContainer.classList.add('swiperContainer__spanContainer')
    const span = document.createElement('span')
    span.innerHTML = e.name
    span.classList.add('swiperContainer__spanContainer__span')

    const logoContainer = document.createElement('div')
    logoContainer.classList.add('swiperContainer__spanContainer__logoContainer')
    const logo = document.createElement('img')
    logo.src = `./icons/${e.team}-icon.svg`
    logo.alt = `${e.team} icon`

    logoContainer.appendChild(logo)

    spanContainer.appendChild(span)
    spanContainer.appendChild(logoContainer)
    divContainer.appendChild(image)
    divContainer.appendChild(spanContainer)
    swiper.appendChild(divswiper)
})

new Swiper('.swiper-container', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 50,
        },
        1440: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 60,
        },
    },
})
