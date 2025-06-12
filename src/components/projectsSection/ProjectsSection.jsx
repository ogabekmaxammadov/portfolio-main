import { useTranslation } from 'react-i18next'
import '../../App.css'
import AiImg from '../../assets/assetsImg/image.png'
import itTatAppImg from '../../assets/assetsImg/it-tat-app.png'
import kafeImg from '../../assets/assetsImg/kafeImg.png'
import maktabImg from '../../assets/assetsImg/maktabImg.png'
import moviesImg from '../../assets/assetsImg/movies.png'
import projectImg from '../../assets/assetsImg/projectImg.jfif'
import '../aboutSection/aboutSection.css'
import './projectsSection.css'

const ProjectsSection = () => {
	const { t } = useTranslation()
	return (
		<div className='projects-section'>
			<h1>{t('Projects')}</h1>
			<div className='content-primary'></div>

			<div className='projects'>
				<a className='project' href='https://t.me/ItTat_bot'>
					<img src={AiImg} alt='' />
					<h2>Web site</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Recusandae, dicta?
					</p>
					<button className='btn-primary'>{t('View site')}</button>
				</a>

				<a className='project' href='https://t.me/itTatApp_bot'>
					<img src={itTatAppImg} alt='' />
					<h2>Web site</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Recusandae, dicta?
					</p>
					<button className='btn-primary'>{t('View site')}</button>
				</a>

				<a className='project' href='https://for-kafes.netlify.app/'>
					<img src={kafeImg} alt='' />
					<h2>Web site</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Recusandae, dicta?
					</p>
					<button className='btn-primary'>{t('View site')}</button>
				</a>

				<a
					href='https://qoshrabot-tumani-12-maktabi.netlify.app/'
					className='project'
				>
					<img src={maktabImg} alt='' />
					<h2>Web site</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Recusandae, dicta?
					</p>
					<button className='btn-primary'>{t('View site')}</button>
				</a>

				<a
					href='https://polite-sunflower-68ca2b.netlify.app/'
					className='project'
				>
					<img src={moviesImg} alt='' />
					<h2>Web site</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Recusandae, dicta?
					</p>
					<button className='btn-primary'>{t('View site')}</button>
				</a>

				<div className='project'>
					<img src={projectImg} alt='' />
					<h2>Web site</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Recusandae, dicta?
					</p>
					<button className='btn-primary'>{t('View site')}</button>
				</div>
			</div>
			<button className='btn-secondary'>{t('Show more')}</button>
		</div>
	)
}

export default ProjectsSection
