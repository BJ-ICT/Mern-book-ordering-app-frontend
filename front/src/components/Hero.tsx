import hero from "../assets/hero.png";

const Hero  = () => {
    return (
        <div>
            <img src={hero} className="w-full max-h-[600px] object-cover mr-2" />
        </div>
    );
};

export default Hero;