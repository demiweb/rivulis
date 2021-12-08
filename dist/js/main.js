const technologySlider = new Swiper('.technology-slider', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    initialSlide: 1,

    on: {
        init: openAccordion,
    },
    slideToClickedSlide: true,

    breakpoints: {
        1200: {
            slidesPerView: 3,

        },
        320: {
            slidesPerView: 2,
        }
    }
});

technologySlider.on('slideChange', openAccordion);

technologySlider.on('mount', openAccordion);

// Функция плавного открытия аккордеона
function openAccordion() {
    let content = [...document.querySelectorAll('.slider__accordions .technology')][this.activeIndex]

    if (content.style.maxHeight) {
        document.querySelectorAll('.slider__accordions .technology').forEach(accordion => accordion.style.maxHeight = null)
    } else {
        document.querySelectorAll('.slider__accordions .technology').forEach(accordion => accordion.style.maxHeight = null)
        content.style.maxHeight = content.scrollHeight + 'px'
    }
}


// Кастомный селект
const selectBrochure = document.querySelectorAll('.brochure__select')

if (!selectBrochure.length) {

} else {
    selectBrochure.forEach(elem => {
        elem.addEventListener('click', function (e) {
            e.stopPropagation()
            this.classList.toggle('open')
        })
    })

    const options = document.querySelectorAll('.brochure__select .option')

    const currentValue = document.querySelector('.brochure__select .current__value')

    options.forEach(item => {
        item.addEventListener('click', function () {
            const name = this.innerHTML
            currentValue.innerHTML = name

        })
    })
}