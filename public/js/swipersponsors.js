const dataSponsors = [
    {
        name: 'huawei',
        img: './images/sponsors/sponsor-huawei.webp',
        link: 'https://developer.huawei.com/consumer/en/'
    },
    {
        name: 'Fernando Herrera',
        img: './images/sponsors/sponsor-fernando_herrera.webp',
        link: 'https://www.udemy.com/user/550c38655ec11/'
    },
    {
        name: 'Stackly Code',
        img: './images/sponsors/sponsor-stacklycode.webp',
        link: 'https://stacklycode.com/'
    },
    {
        name: 'José Dimas Luján',
        img: './images/sponsors/sponsor-jose_dimas_lujan.webp',
        link: 'https://www.youtube.com/channel/UC17hjKubJGdyPbWI5jvyiVg'
    },
    {
        name: 'Domini Code',
        img: './images/sponsors/sponsor-dominicode.webp',
        link: 'https://www.youtube.com/channel/UC3QuZuJr2_EOUak8bWUd74A'
    },
    {
        name: 'TekkiTV',
        img: './images/sponsors/sponsor-tekkitv.webp',
        link: 'https://tekki.tv/'
    },
    {
        name: 'CodelyTV',
        img: './images/sponsors/sponsor-codelytv.webp',
        link: 'https://codely.tv/pro/comfeco'
    },
    {
        name: 'LatamDev',
        img: './images/sponsors/sponsor-latamdev.webp',
        link: 'http://latamdev.co/'
    },
    {
        name: 'Códigofacilito',
        img: './images/sponsors/sponsor-codigofacilito.webp',
        link: 'https://codigofacilito.com/'
    },
    {
        name: 'egghead',
        img: './images/sponsors/sponsor-egghead.webp',
        link: 'https://egghead.io/'
    }
]

const swiperSponsors = document.getElementById('swiperContainer2')

dataSponsors.map((e) => {
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
