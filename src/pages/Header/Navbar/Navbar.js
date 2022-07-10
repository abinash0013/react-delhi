import { Refresh } from "@material-ui/icons";
//import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            {/* navbar section start */}
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        Lottery
                        {/* <Link to="/">LOTTERY</Link> */}
                        {/* <a href="index.html">Lottery</span></a> */}
                    </div>
                    <div className="refresh">
                        <i className="fas fa-redo"></i>
                        <Refresh />
                    </div>
                </div>
            </nav>
            {/* // navbar section finished */}
        </>
    );
}

export default Navbar;
