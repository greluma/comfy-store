import { Link } from 'react-router-dom';
import { Hero1, Hero2, Hero3, Hero4 } from '../assets'


const carouselImages = [Hero1, Hero2, Hero3, Hero4]

const Hero = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-24 items-center'>
            <div>
                <h1 className='max-w-2xl text-4xl font-bold sm:6xl uppercase text-primary tracking-widest mb-4'> Comfy Store</h1>
                {/* cspell:disable */}
                <h3 className='max-w-2xl text-2xl font-bold sm:4xl capitalize tracking-wider' >we are changing the way people shop</h3>
                <p className='mt-8 max-w-xl text-lg leading-8'> <span className='text-2xl text-primary tracking-wider pr-1 font-bold'>Our Mission</span>  Is to enhance your home with furniture that combines comfort, quality, and style, creating spaces that inspire and bring joy.</p>
                {/* cspell:enable */}
                <div className="mt-10">
                    <Link to='/products' className='btn btn-primary uppercase'> our products</Link>
                </div>
            </div>
            <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box '>
                {carouselImages.map((image) => {
                    return (
                        <div key={image} className='carousel-item'>
                            <img
                                src={image}
                                className='rounded-box h-full w-80 object-cover'
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Hero

