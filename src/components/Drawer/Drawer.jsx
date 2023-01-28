import { useContext } from "react";
import { ScrollContext } from "../../Contexts/ScrollContext";
import "./Drawer.css";

function Drawer() {

    const { isDrawerOpen, setIsDrawerOpen } = useContext(ScrollContext);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(false)
    }

    return (
        <>
            { isDrawerOpen ? <div className="drawer__overlay" onClick={handleDrawerOpen}></div> : null }
            <div onClick={(e) => e.stopPropagation()} className={`drawer ${isDrawerOpen ? 'drawer--open' : ''} `}>
                <a className="drawer__link" href="#" onClick={handleDrawerOpen}>Company</a>
                <a className="drawer__link drawer__link--special" href="https://en.wikipedia.org/wiki/Major_depressive_disorder">Feruza</a>
            </div>
        </>
     );
}

export default Drawer;