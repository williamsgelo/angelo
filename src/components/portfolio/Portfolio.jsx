import React from 'react'
import './portfolio.css'
import img5 from '../../assets/portfolio5.png'
import img7 from '../../assets/bank-app1.png'
import img8 from '../../assets/codex.png'
import img9 from '../../assets/restaurant-ui.png'
import img10 from '../../assets/gpt3.png'
import img11 from '../../assets/movie-ui.png'
import img12 from '../../assets/dalles.png'
import img13 from '../../assets/quiz-app.png'
import img14 from '../../assets/memory-game.png'
import img15 from '../../assets/stripe-menu.png'


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work </h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img7} alt="" />
                    </div>
                    <h3>Mordern UI/UX business app build with ReactJs and Tailwind</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/williamsgelo/mordern-bank" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://mordern-bank-ten.vercel.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img8} alt="" />
                    </div>
                    <h3>Mordern ChatGPT application build with OPEN AI and JavaScript</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/williamsgelo/codex-bot" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://codex-bot-iota.vercel.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img9} alt="" />
                    </div>
                    <h3>Fine Dining mobile-responsive mordern UI Restaurant Landing Page</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/williamsgelo/restaurant-ui" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https//williamsgelo.github.io/restaurant-ui" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img10} alt="" />
                    </div>
                    <h3>Mordern GPT3 mobile responsive user inerface build with ReactJS. </h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/williamsgelo/gpt3" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://williamsgelo.github.io/gpt3" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img12} alt="" />
                    </div>
                    <h3>OPEN AI image generation app build with OPEN AI and MongoDB backend</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/williamsgelo/dall-e" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://dall-e-gold.vercel.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img11} alt="" />
                    </div>
                    <h3>Mordern movie UI search build app with MovieDB API</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/williamsgelo/movieapp" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://williamsgelo.github.io/movieapp" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img13} alt="" />
                    </div>
                    <h3>Mobile repsonsive multi-choice quiz app build with ReactJs</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://dribble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img14} alt="" />
                    </div>
                    <h3>Mobile responsive fun memory game build with ReactJs</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/williamsgelo/magic-memory" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://williamsgelo.github.io/magic-memory" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img15} alt="" />
                    </div>
                    <h3>Mobile-responsive stripe menu build with ReactJs</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/williamsgelo/stripe-menu" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://williamsgelo.github.io/stripe-menu" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Portfolio