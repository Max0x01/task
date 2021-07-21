function _createElements (obj) 
{
	if(Object.keys(obj).length === 0 && obj.constructor === Object)
	{
		console.group("Error the object is empty or not a object")
		console.error(`Error: ${obj}`)
		console.groupEnd()
	} 
	else {
		let windowsWidth = window.screen.width
		const elementList = document.querySelector('body')
		elementList.insertAdjacentHTML('afterbegin',`<div class='wrapper'></div>`)
		const wrap = elementList.querySelector('.wrapper')
		wrap.insertAdjacentHTML('afterbegin',`
				<div class="header">
		            <h1>${obj.title.name}</h1>
		            <p>${obj.title.desc}</p>
	        	</div>
	        	<div class="content">
	        		<div class="list"></div>
	        		<div class="view"></div>
	        	</div>
			`)
		const list = wrap.querySelector('.list')
		for(let o in obj.elements){
			let img = o == Object.keys(obj.elements).length ? obj.elements[o].pic : ''

			list.insertAdjacentHTML('afterbegin', `
				<div class="item ${windowsWidth < 990 ? '': o == Object.keys(obj.elements).length ? 'selected' : 'onselected'}" data-number='${o}'>
                    <span></span>
                    <p class="name">${obj.elements[o].name ? obj.elements[o].name : 'No Name'}</p>
                    <img src="${obj.elements[o].pic}" alt="${obj.elements[o].desc ? obj.elements[o].desc : 'No Description'}" data-lity data-lity-target='${obj.elements[o].pic ? obj.elements[o].pic : 'No Image'}'>
                    <p class="desc">${obj.elements[o].desc ? obj.elements[o].desc : 'No Description'}<a href="${obj.elements[o].url ? obj.elements[o].url : '#'}">Read More...</a></p>
                </div>
				`)
			if(o == Object.keys(obj.elements).length){
				list.nextElementSibling.insertAdjacentHTML('afterbegin',`
					<img src="${img}" alt="${obj.elements[o].desc ? obj.elements[o].desc : 'No Description'}" data-lity data-lity-target='${obj.elements[o].pic ? obj.elements[o].pic : 'No Image'}'>
				`)
			}
		}
	}
}


window.addEventListener('resize',function(e)
{
	const elements = document.querySelectorAll('.item')
	for(let el of elements)
	{
		e.target.screen.width < 990 ? el.className = 'item': el.dataset.number == elements.length ? el.className = 'item selected' : el.className = 'item onselected'
	}
})


document.addEventListener('click', function(e) 
{
	clearInterval(timerId)
	const elements = document.querySelectorAll('.item')
	const activeElement = document.querySelector('.selected')
	const parentElement = e.target.localName == 'div' ? e.target : e.target.parentElement
	const windowWidth = window.innerWidth;
	if(windowWidth < 990){return} 
	else {
		if(!parentElement || parentElement.className == 'item'){console.log('no Parent Element')} 
		else {
			let pE = parentElement			
			for(let el = 0; el <= elements.length - 1; el++)
			{
				elements[el].className = 'item onselected'
				elements[el].querySelector('span').className = ''
				if(elements[el].dataset.number >= pE.dataset.number)
				{
					elements[el].querySelector('span').className = 'active'

					if(elements[el].dataset.number >= pE.dataset.number)
					{
						pE.className = 'item selected'
						pE.querySelector('span').className = ''
						let src = pE.querySelector('img').currentSrc
						let alt = pE.querySelector('img').alt
						document.querySelector('.view').innerHTML = `<img src="${src}" alt="${alt ? alt : 'No Description'}" data-lity data-lity-target='${src ? src : 'No Image'}'>`
					}
				}
			}
		}
	}
})


let i = 0
let timerId = setInterval(function(){
	const el = document.querySelectorAll('.item')
	if(i == (el.length - 1)){clearInterval(timerId)}
	el[i].className = 'item selected'
	el[i].previousElementSibling == null ? '' : el[i].previousElementSibling.className = 'item onselected'
	el[i].nextElementSibling == null ? '' : el[i].querySelector('span').className = 'active'
	i++
},elementList.params.animDelay)


_createElements(elementList);