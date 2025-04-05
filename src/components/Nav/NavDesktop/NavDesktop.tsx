import { FaTree, FaAddressCard, FaFolderOpen } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

type NavDesktop = {
    title: string;
}

const NavDesktop  = () => {
    return (
        <nav id="NavDesktop">
            <ol>
                <li className="active">
                    <FaTree />Home</li>
                <li>
                    <FaAddressCard />About</li>
                <li>
                    <FaFolderOpen />Projects</li>
                <li>
                    <RiContactsFill />Contact</li>
            </ol>
        </nav>
    )
}

export default NavDesktop;