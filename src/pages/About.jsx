const About = () => {
    return (
        <>
            <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
                <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
                    We love
                </h1>
                <div className="stats bg-primary shadow">
                    <div className="stat">
                        <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                            Comfy
                        </div>
                    </div>
                </div>
            </div>
            {/* cspell:disable */}
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
                Welcome to Comfy Store, your one-stop destination for home furniture that perfectly blends comfort and style. We are passionate about transforming houses into homes with our wide range of high-quality furniture. Each piece is thoughtfully designed with a focus on comfort, durability, and aesthetics. From plush sofas that make your living room a cozy haven, to sturdy dining tables that bring families together for meals, and sleek desks that create productive home offices, we have something for every room in your home. Our commitment to quality materials and craftsmanship ensures that our furniture not only looks great but also stands the test of time. Discover the Comfy Store difference today and create a home that you love.
            </p>
            {/* cspell:enable */}
        </>
    )
}
export default About