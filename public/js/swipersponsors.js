const dataSponsors = [
    {
        name: 'huawei',
        img: './images/sponsors/sponsor-huawei.webp',
        link: 'https://developer.huawei.com/consumer/en/',
    },
    {
        name: 'Fernando Herrera',
        img: './images/sponsors/sponsor-fernando_herrera.webp',
        link: 'https://www.udemy.com/user/550c38655ec11/',
    },
    {
        name: 'Stackly Code',
        img: './images/sponsors/sponsor-stacklycode.webp',
        link: 'https://stacklycode.com/',
    },
    {
        name: 'José Dimas Luján',
        img: './images/sponsors/sponsor-jose_dimas_lujan.webp',
        link: 'https://www.youtube.com/channel/UC17hjKubJGdyPbWI5jvyiVg',
    },
    {
        name: 'Domini Code',
        img: './images/sponsors/sponsor-dominicode.webp',
        link: 'https://www.youtube.com/channel/UC3QuZuJr2_EOUak8bWUd74A',
    },
    {
        name: 'TekkiTV',
        img: './images/sponsors/sponsor-tekkitv.webp',
        link: 'https://tekki.tv/',
    },
    {
        name: 'CodelyTV',
        img: './images/sponsors/sponsor-codelytv.webp',
        link: 'https://codely.tv/pro/comfeco',
    },
    {
        name: 'LatamDev',
        img: './images/sponsors/sponsor-latamdev.webp',
        link: 'http://latamdev.co/',
    },
    {
        name: 'Códigofacilito',
        img: './images/sponsors/sponsor-codigofacilito.webp',
        link: 'https://codigofacilito.com/',
    },
    {
        name: 'egghead',
        img: './images/sponsors/sponsor-egghead.webp',
        link: 'https://egghead.io/',
    },
]

const swiperSponsors = document.getElementById('swiperContainer2')

dataSponsors.map(e => {
    const linkContainer = document.createElement('a')
    const divContainer = document.createElement('div')
    const spanContainer = document.createElement('div')
    const image = document.createElement('img')
    const span = document.createElement('span')

    linkContainer.href = e.link
    linkContainer.target = '_blank'
    linkContainer.rel = 'noopener noreferrer'

    divContainer.classList.add('sponsors__container')

    spanContainer.classList.add('sponsors__container__spanContainer')
    span.innerHTML = e.name

    image.src = e.img
    image.alt = e.name
    image.title = e.name

    linkContainer.appendChild(divContainer)
    spanContainer.appendChild(span)
    divContainer.appendChild(image)
    divContainer.appendChild(spanContainer)
    swiperSponsors.appendChild(linkContainer)
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
