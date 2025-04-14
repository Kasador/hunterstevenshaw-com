import Me from "../../assets/images/me/me_cartoon.png"
// import HeroImageDesktop from "../../assets/images/graphics/hero_image_desktop.png"
// import HeroImageMobile from "../../assets/images/graphics/hero_image_mobile.png"
import Test from "../../assets/images/graphics/forest/hero_image_desktop_test_v5.png"
import HeaderText from "./HeaderText"

type Home = {
    title: string;
}

const Home = () => {
    return (
        <section id="Home">
                <div id="HeroContent">
                    <img src={Me} alt="Hunter Steven Shaw, but in cartoon version" id="Me" />
                    <HeaderText />
                </div>
                <img src={Test} alt="Mountain & Pine Trees Graphic" id="BottomHero" />
        </section>
    )
}

export default Home;