import Me from "../../assets/images/me/me_cartoon.png"
// import HeroImageDesktop from "../../assets/images/graphics/hero_image_desktop.png"
// import HeroImageMobile from "../../assets/images/graphics/hero_image_mobile.png"
import Test from "../../assets/images/graphics/forest/test_v10.png"
import HeaderText from "./HeaderText"

type Home = {
    title: string;
}

const Home = () => {
    return (
        <section id="Home">
            <section>
                <div id="HeroContent">
                    <img src={Me} alt="Hunter Steven Shaw, but in cartoon version" id="Me" />
                    <HeaderText message="Hunter Shaw" />
                </div>
                <img src={Test} alt="Mountain & Pine Trees Graphic" id="BottomHero" />
            </section>
        </section>
    )
}

export default Home;