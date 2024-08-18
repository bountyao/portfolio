import './styles/Topbar.css';
import { useState, useEffect } from 'react';
import { RxDropdownMenu } from "react-icons/rx";
import SlideSideBar from '../sidebar/SlideSidebar';

function TopbarSidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleResize = () => {
        if (window.innerWidth >= 1000) {
            setShowSidebar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='topbar-sidebar'>
            <div className='topbar-dropdown' onClick={() => setShowSidebar(true)}>
                <RxDropdownMenu />
            </div>
            <SlideSideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
    );
}

export default TopbarSidebar;
