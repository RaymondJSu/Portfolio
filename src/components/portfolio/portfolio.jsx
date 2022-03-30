import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/game_demonstration.png'
import IMG2 from '../../assets/texas-hold-em-poker.png'
import IMG3 from '../../assets/tic-tac-toe.png'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tetis-Battle',
    github: 'https://github.com/axa000/tetris-battle'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Texas-Holdem',
    github: 'https://github.com/axa000/Texas-Holdem-using-python'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tic-Tac-Toe',
    github: 'https://github.com/axa000/tic-tac-toe'
  },
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