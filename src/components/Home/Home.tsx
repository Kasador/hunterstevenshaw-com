import Me from "../../assets/images/me_cartoon_edited_v5.png"
import TypeWriter from "./Typewriter"

type Home = {
    title: string;
}

const Home : any = () => {
    return (
        <>
            <h1>Home</h1>
            <img src={Me} alt="Hunter Steven Shaw, cartoon hero image" id="me" />
            <TypeWriter message="TypeWriter"/>
        </>
    )
}

export default Home;