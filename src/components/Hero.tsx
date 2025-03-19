import Profile from "./Profile"
import Verse from "./Verse"

const Hero = () => {
  return (
    <div className="relative">
        <div className="bg-[url('src/assets/HeroBackgroundImage.png')] bg-no-repeat bg-cover rounded-b-xl h-60"></div>
        <div className="absolute top-0 left-0 right-0 pt-8 px-5 flex flex-col gap-4">
            <Profile/>
            <Verse verse="“He said: Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected).”" ayat="Al-A’raaf (7:25)"/>
        </div>
    </div>
  )
}

export default Hero