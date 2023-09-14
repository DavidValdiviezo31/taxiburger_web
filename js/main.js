const d = document

const sliderInner = d.querySelector('.slider-inner')
const sliderItems = d.querySelectorAll('.slider-inner img')
const sliderArrows = d.querySelectorAll('.arrows a')
const dots = d.querySelectorAll('.dots span')
const btnMenu = d.querySelector('.nav-btn')

btnMenu.addEventListener('click', e => {
	e.preventDefault()
	d.querySelector('.nav-bar').classList.toggle('btn-active')
})


let count = 1

const sliderPosition = index => {
	let percentage = index * -100
	sliderInner.style.transform = `translateX(${percentage}%)`
    activeDot(index)
    count++
	if (count > sliderItems.length - 1) {
		count = 0
	}
}

const activeDot = index => {
    dots.forEach(dot => {
        dot.classList.remove('active')
    })
    dots[index].classList.add('active')
}

activeDot(0)

sliderArrows.forEach(arrow => {
	arrow.addEventListener('click', e => {
		e.preventDefault()
		if (arrow.classList.contains('right-arrow')) {
			count++
			if (count > 0) {
				count = sliderItems.length - 1
			}
		} else {
			count--
			if (count < sliderItems.length - 1) {
				count = 0
			}
		}
		sliderPosition(count)
	})
})

setInterval(() => {
	sliderPosition(count)
}, 10000)
