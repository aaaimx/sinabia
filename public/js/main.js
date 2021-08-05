if (document.readyState !== 'loading') {
    ready()
} else {
    document.addEventListener('DOMContentLoaded', ready)
}

function ready() {
    const accordion = document.getElementsByTagName('dt')

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            accordionClick(event)
        })
    }
}

const accordionClick = (eventHappened) => {
    let targetClicked = event.target
    let classClicked = targetClicked.classList
    while (classClicked[0] != 'description-title') {
        targetClicked = targetClicked.parentElement
        classClicked = targetClicked.classList
    }
    const description = targetClicked.nextElementSibling
    const expander = targetClicked.children[0]
    if (description.style.maxHeight) {
        description.style.maxHeight = null
        expander.innerHTML = '&plus;'
        description.style.paddingBottom = '0px'
    } else {
        const allDescriptions = document.getElementsByTagName('dd')
        for (let i = 0; i < allDescriptions.length; i++) {
            if (allDescriptions[i].style.maxHeight) {
                allDescriptions[i].style.maxHeight = null
                allDescriptions[i].previousElementSibling.children[0].innerHTML = '&plus;'
                allDescriptions[i].style.paddingBottom = '0px'
            }
        }
        description.style.paddingBottom = '20px'
        description.style.maxHeight = description.scrollHeight + 'px'
        expander.innerHTML = '&minus;'
    }
}
