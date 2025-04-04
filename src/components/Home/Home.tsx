import Me from "../../assets/images/me_cartoon_edited_v5.png"
import TypeWriter from "./Typewriter"

type Home = {
    title: string;
}

const Home : any = () => {
    return (
        <section id="Home">
            <img src={Me} alt="Hunter Steven Shaw, cartoon hero image" id="me" />
            <h1>Hunter Shaw</h1>
            <TypeWriter message="TypeWriter"/>
        </section>
    )
}

export default Home;