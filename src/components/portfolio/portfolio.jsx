import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/sorting-visualizer.PNG'
import IMG2 from '../../assets/KOL.PNG'
import IMG3 from '../../assets/h-m.PNG'
import IMG4 from '../../assets/podcast.jpg'

const data = [
  {
    id: 1,
    image: IMG4,
    title: 'Podcast Summarizer.AI',
    github: 'https://podcast-summarizer-frontend.onrender.com/'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Sorting Visualizer',
    github: 'https://raymondjsu.github.io/sorting-visualizer/'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Reddit Key Opinion Leader',
    github: 'https://github.com/RaymondJSu/Reddit-key-opinion-leader'
  },
  {
    id: 4,
    image: IMG3,
    title: 'H&M Personalized Fashion Recommendation',
    github: 'https://github.com/RaymondJSu/HM-personalized-fashion-recommendation'
  },

]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github}) =>{
            return(
              <article key = {id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio