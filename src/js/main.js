const technologySlider = new Swiper('.technology-slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    centeredSlides: true,
});

technologySlider.on('slideChange', function (elem) {
    const accordions = document.querySelectorAll('.slider__accordions .technology')
    accordions.forEach(item => item.classList.remove('active'))
    accordions[elem.activeIndex].classList.add('active')
});


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