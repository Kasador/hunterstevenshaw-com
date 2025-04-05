import Me from "../../assets/images/me_cartoon_edited_v5.png"
import HeaderText from "./HeaderText"

type Home = {
    title: string;
}

const Home = () => {
    return (
        <section id="Home">
            <section>
                <img src={Me} alt="Hunter Steven Shaw, cartoon hero image" id="me" />
                <h1>HS</h1>
                <HeaderText message="TypeWriter"/>
            </section>
        </section>
    )
}

export default Home;