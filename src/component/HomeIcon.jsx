import { BsArrowUpCircle } from "react-icons/bs";
import { Link } from "react-scroll";

const HomeIcon = () => {
    return (
        <div className="fixed bottom-10 right-5 text-[#7041CE]">
            <Link to='home' smooth={true} duration={500} className="text-5xl"><BsArrowUpCircle /></Link>
        </div>
    );
};

export default HomeIcon;