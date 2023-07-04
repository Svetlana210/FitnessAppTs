
import { SelectedPage } from "@/shared/types";
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"


type Props = {setSelectedPage:(value:SelectedPage)=>void}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
      <section id='home' className="gap-16 bg-gray-20 pb-10 pt-10 md:h-full">
          {/* Image and main header */}
          <div>
              {/* Main header */}
              <div></div>
              {/* Image */}
              <div>
                  {/* Headings */}
                  <div>
                      <div>
                          <img alt='home-page-text' src={HomePageText} />
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Home;