let w  = window.innerWidth
let h = window.innerHeight


let s = document.querySelectorAll('.list > li')
//const $modal = $.listener()




const elementList = {
	1 : {
		desc : 'NASA запустило сборку межпланетной станции Psyche. Куда она будет отправлена?',
		name : 'NASA запустило сборку межпланетной станции Psyche',
		url : 'https://hi-news.ru/eto-interesno/nasa-zapustilo-sborku-mezhplanetnoj-stancii-psyche-kuda-ona-budet-otpravlena.html',
		pic : 'https://hi-news.ru/wp-content/uploads/2021/02/psyche_spacecraft_image_one-750x455.jpg',
	},
	2 : {
		desc : 'Видео: прототип корабля SpaceX Starship снова взорвался при посадке',
		name : 'Пототип корабля SpaceX Starship',
		url : 'https://hi-news.ru/technology/video-prototip-korablya-spacex-starship-snova-vzorvalsya-pri-posadke.html',
		pic : 'https://hi-news.ru/wp-content/uploads/2021/02/sn9_boom_image_two-750x434.jpg',
	},
	3 : {
		desc : 'Мы ошибались! Tesla не так уж хорошо продумана',
		name : 'Tesla не так уж хорошо продумана',
		url : 'https://hi-news.ru/auto/my-oshibalis-tesla-ne-tak-uzh-xorosho-produmana.html',
		pic : 'https://hi-news.ru/wp-content/uploads/2021/03/tesla_logo-750x422.jpg',
	},
	4 : {
		desc : 'Вы можете купить личного робота-собаку всего за 2 700 долларов. Что он умеет?',
		name : 'Купить личного робота-собаку',
		url : 'https://hi-news.ru/technology/vy-mozhete-kupit-lichnogo-robota-sobaku-vsego-za-2-700-dollarov-chto-on-umeet.html',
		pic : 'https://hi-news.ru/wp-content/uploads/2021/06/unitree_go1_image_one-750x461.jpg',
	}
}

$.listener(init(elementList))