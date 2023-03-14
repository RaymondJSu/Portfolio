import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/KOL.PNG'
import IMG2 from '../../assets/h-m.PNG'
import IMG3 from '../../assets/game_demonstration.png'
import IMG4 from '../../assets/texas-hold-em-poker.png'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Reddit Key Opinion Leader',
    github: 'https://github.com/RaymondJSu/Reddit-key-opinion-leader'
  },
  {
    id: 2,
    image: IMG2,
    title: 'H&M Personalized Fashion Recommendation',
    github: 'https://github.com/RaymondJSu/HM-personalized-fashion-recommendation'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tetis Battle',
    github: 'https://github.com/raymondjsu/tetris-battle'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Texas Holdem',
    github: 'https://github.com/raymondjsu/Texas-Holdem-using-python'
  }
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'This is a portfolio item title',
  //   github: 'https://github.com'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'This is a portfolio item title',
  //   github: 'https://github.com'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'This is a portfolio item title',
  //   github: 'https://github.com'
  // },
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