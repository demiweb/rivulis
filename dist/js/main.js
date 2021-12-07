const technologySlider = new Swiper('.technology-slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    centeredSlides: true,

    on: {
        init: openAccordion,
    }
});

technologySlider.on('slideChange', openAccordion);

technologySlider.on('mount', openAccordion);

function openAccordion() {
    console.log(this)
    let content = [...document.querySelectorAll('.slider__accordions .technology')][this.activeIndex]

    if (content.style.maxHeight) {
        document.querySelectorAll('.slider__accordions .technology').forEach(accordion => accordion.style.maxHeight = null)
    } else {
        document.querySelectorAll('.slider__accordions .technology').forEach(accordion => accordion.style.maxHeight = null)
        content.style.maxHeight = content.scrollHeight + 'px'
    }
}


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