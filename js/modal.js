
init = function(object)
{
    const elementList = document.querySelector('.info-table')    
    elementList.innerHTML = `<div class='col col-5'><ul class='list'></ul></div><div class="col col-15"><div class='pic'></div></div>`
    const ul = document.querySelector('.list')
    const pic = document.querySelector('.pic')

    if(!object) 
    {
        elementList.insertAdjacentHTML('afterbegin','<h1>Not Y Information</h1>')
        console.error('Error: not a Information Object')
    } else {
        let lengthObj = Object.keys(object).length
        for(let obj in object) 
        {
            ul.insertAdjacentHTML('afterbegin',`
            <li class='list-${obj} list-element ${obj == lengthObj ? 'selected' : 'onselected'}' data-number='${obj}' data-element='${obj == lengthObj ? 'selected' : 'onselected'}'> 
                <span class="${obj == lengthObj ? 'active' : ''}" data-number='${obj}'></span>
                <p class="btn" data-number='${obj}'>${object[obj].name}</p>
                <p class='desc' style='${obj == lengthObj ? "display : block;" : "display : none;"}'>${object[obj].desc} <a href="${object[obj].url}">Подробно...</a></p>
            </li>
            `)
            
            pic.insertAdjacentHTML('afterbegin', `<img src="${object[obj].pic}" data-lity data-lity-target="${object[obj].pic}" alt="${object[obj].desc}" style="${obj == lengthObj ? 'display:block' : 'display:none'}" data-number="${obj}" class='img img-${obj}'>`)
        }
        
    }

        console.group('Loaded Elements')
        console.log('Количество Элементов: ' + Object.keys(object).length)
        console.groupEnd()
        return ul
} 


$.listener = function (init) 
{
    init.addEventListener('click', function(e) {
        
        if(!e.target.dataset.number )
        {
            return false
        }
        let parentElement = document.querySelector('.selected')
        let selectedElement = e.toElement.parentElement.localName == 'li' ? e.toElement.parentElement: e.target
        
        if(parentElement.dataset.element == selectedElement.dataset.element )
        {
            return false
        }
        let n = new Number(e.target.dataset.number)
        let className = e.target.class
        let elementCount = +init.children.length
        const pic = document.querySelector('.pic')

        //change

        parentElement.classList.remove('selected')
        parentElement.classList.add('onselected')
        parentElement.dataset.element = 'onselected'
        parentElement.querySelector('.desc').style.display = 'none'

        selectedElement.classList.remove('onselected')
        selectedElement.classList.add('selected')
        selectedElement.dataset.element = 'selected'


        if(+selectedElement.dataset.number > +parentElement.dataset.number)
        {
            for(let i = 1; i <= +selectedElement.dataset.number; i++ )
            {
                i == 4 ? '' : init.querySelector('.list-'+i).querySelector('span').classList.remove('active')
                pic.querySelector('.img-'+i).style.display = 'none'
            }
            pic.querySelector('.img-'+selectedElement.dataset.number).style.display = 'block'
        } else {            
            for(let s = elementCount - 1; s >= +selectedElement.dataset.number; s-- )
            {
                s == 1 ? '' : init.querySelector('.list-'+s).querySelector('span').classList.add('active')
            }
            pic.querySelector('.img-'+selectedElement.dataset.number).style.display = 'block'
        }
        selectedElement.querySelector('.desc').style.display = 'block'
        
    })
  
}


   /*
let i = 0;
let animation = setInterval(function() {
    const anim = document.querySelectorAll('.list > li')
    const pic = document.querySelector('.pic')

    if(i == anim.length  ){
        i = 0;
        for(let n = 1; n <= anim.length; n++){
            if(n != anim.lenght) 
            {
            anim[n].classList.add('onselected')
            console.dir(anim[n])
            anim[n].classList.remove('selected')
            anim[n].dataset.element = 'onselected'
            anim[n].querySelector('span').classList.remove('active')
            anim[n].querySelector('.desc').style.display = 'none'
            n == +anim.lengt ? pic.querySelector('.img-'+pic.children[n].dataset.number).style.display = 'block' : pic.querySelector('.img-'+pic.children[n].dataset.number).style.display = 'none'
            }            
            

        }
    }

    let parent = anim[i]
    let childrenSpan = anim[i].querySelector('span')
    let childrenPDesc = anim[i].querySelector('.desc')


    parent.dataset.element = 'selected'
    parent.classList.remove('onselected')
    parent.classList.add('selected')
    anim[i].dataset.number == 1 ? '' : childrenSpan.classList.add('active') 
    childrenPDesc.style.display = 'block'

    pic.querySelector('.img-'+pic.children[i].dataset.number).style.display = 'block'
    
    i++
}, 1000);

function clearAnim(){clearInterval(animation)}
*/