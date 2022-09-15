document.addEventListener('DOMContentLoaded', function () {
    const dataSponsors = [
        {
            name: 'Rescate Zarigüeyal',
            img: './images/sponsors/rescate_zarigueyal.png',
            link: 'http://www.rescatezarigueyal.org/',
        },
        {
            name: 'Autmix',
            img: './images/sponsors/autmix.png',
            link: 'https://autmix.com/',
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
})
