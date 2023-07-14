import React from 'react'
import hero from '../../media/bg.webp'
import { Link } from 'react-router-dom'
import ImgSlider from './ImgSlider'

const Home = () => {
    return (
        <div className='mx-2 md:mx-10 lg:mx-20'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={hero} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Durga Puja of Kolkata</h1>
                        <p className="mb-8 leading-relaxed text-black">Kolkata's Durga Puja is a vibrant and grand celebration that captivates the city with its exuberance. As the autumn season sets in, the entire city immerses itself in preparations for this much-awaited festival. Magnificent pandals (temporary structures) are meticulously crafted, showcasing intricate artwork and themes that mesmerize visitors. The streets come alive with colorful decorations, the beat of dhak drums, and the fragrance of incense. People from all walks of life unite in their devotion to Goddess Durga, engaging in fervent prayers, elaborate rituals, and joyful festivities. Kolkata's Durga Puja is not just a religious event but a cultural extravaganza that showcases the city's artistic prowess and community spirit. It is a time when joy, spirituality, and creativity intertwine, leaving an indelible mark on the hearts of all who experience this enchanting celebration.</p>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font flex flex-col justify-center items-center">
                <h1 className="title-font sm:text-4xl text-4xl mb-2 font-medium text-black">Durga Puja – UNESCO Intangible Cultural Heritage</h1>
                <div className="container px-5 py-20 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <iframe className="object-cover object-center w-full" height="350" src="https://www.youtube.com/embed/Az8SGiqk9-o?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base text-black">Durgapuja, the grand festival of Kolkata, has been recognized as an Intangible Cultural Heritage by UNESCO. This prestigious recognition acknowledges the significance and unique cultural value of this age-old tradition. Durgapuja is not just a religious event but a manifestation of Kolkata's rich heritage, art, and community spirit. It represents the collective creativity and craftsmanship of the city's artisans who meticulously create magnificent idols and intricate pandals. The festival also showcases the fusion of music, dance, theater, and gastronomy, forming an integral part of Kolkata's cultural identity. Durgapuja fosters a sense of unity, as people from diverse backgrounds come together to celebrate and immerse themselves in the festivities. This UNESCO recognition further emphasizes the global importance of Durgapuja and its role in preserving and promoting intangible cultural heritage for future generations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="rounded-full inline-flex text-black bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 hover:text-white rounded text-lg my-2"><Link to='/puja'>Know More About Durga Puja</Link></button>
            </section>
            <ImgSlider />
        </div>
    )
}

export default Home
