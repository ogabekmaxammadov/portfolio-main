import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		resources: {
			en: {
				translation: {
					'Ogabek Maxammadov': 'Ogabek Maxammadov',
					About: 'About',
					Contacts: 'Contacts',
					Information: 'Information',
					'Im Frontend developer': "I'm Frontend developer",
					'Frontend developer': 'Fronted developer',
					Home: 'Home',
					Projects: 'Projects',

					// About Page
					Birthday: 'Birthday',
					Website: 'Website',
					Phone: 'Phone',
					City: 'City',
					Age: 'Age',
					Degree: 'Degree',
					Email: 'Email',
					Freelance: 'Freelance',
					Aviable: 'Aviable',
					'3 years': '3 years',
					Experience: 'Experience',
					'Happy clients': 'Happy clients',

					//Projects Page
					'View site': 'View site',
					'Show more': 'Show more',

					//Contact Page
					name: 'name',
					email: 'email',
					'phone number': 'phone number',
					message: 'message',
					Send: 'Send',
					Address: 'Address',
					'Samarkand, Amur temur 12': 'Samarkand, Amur temur 12',
					'Contact Us': 'Contact Us',
				},
			},
			uz: {
				translation: {
					'Ogabek Maxammadov': 'Ogabek Maxammadov',
					About: 'Haqimda',
					Contacts: 'Boglanish',
					Information: 'Malumot',
					'Im Frontend developer': 'Men Frontend dasturchisiman',
					'Frontend developer': 'Frontend dasturchi',
					Home: 'Asosiy',
					Projects: 'Loihalar',

					// About Page
					Birthday: 'tugilgan',
					Website: 'Websayt',
					Phone: 'Raqam',
					City: 'Shaxar',
					Age: 'Yosh',
					Degree: 'Daraja',
					Email: 'Email',
					Freelance: 'Frilans',
					Aviable: 'Mavjud',
					'3 years': '3 yil',
					Experience: 'Tajriba',
					'Happy clients': 'Mijozlar',

					//Projects Page
					'View site': 'Ochish',
					'Show more': "Ko'proq",

					//Contact Page
					name: 'ismingizni kiriting',
					email: 'email manzilingz',
					'phone number': 'telefon raqamangiz',
					message: 'xabarni kiriting',
					Send: 'Yuborish',
					Address: 'Manzil',
					'Samarkand, Amur temur 12': 'Samarkand, Amur temur 12',
					'Contact Us': "Bog'lanish",
				},
			},
			ru: {
				translation: {
					'Ogabek Maxammadov': 'Огабек Махаммадов',
					About: 'Обо мне',
					Contacts: 'Контакт',
					Information: 'информация',
					'Im Frontend developer': 'Я фронтенд-разработчик',
					'Frontend developer': 'фронтенд-разработчик',
					Home: 'Дом',
					Projects: 'Проекты',

					// About Page
					Birthday: 'День рождения',
					Website: 'Веб-сайт',
					Phone: 'Телефон',
					City: 'Город',
					Age: 'Возраст',
					Degree: 'Степень',
					Email: 'Э.почта',
					Freelance: 'Фриланс',
					Aviable: 'Доступный',
					'3 years': '3 года',
					Experience: 'опыт',
					'Happy clients': 'клиенты',

					//Projects Page
					'View site': 'Открыть',
					'Show more': 'снова',

					//Contact Page
					name: 'Ваше имя',
					email: 'электронная почта',
					'phone number': 'номер телефона',
					message: 'сообщение',
					Send: 'Отправлять',
					Address: 'Адрес',
					'Samarkand, Amur temur 12': 'Самарканд, Амур Темур 12',
					'Contact Us': 'Контакт',
				},
			},
		},
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
