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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officia quam nobis at excepturi, sit impedit harum, nostrum ipsum quasi officiis dolor, earum animi vero adipisci alias facilis eum delectus ad voluptatum voluptate consequuntur repellat aliquid quaerat. Reiciendis, consectetur in!
            </p>
            {/* cspell:enable */}
        </>
    )
}
export default About