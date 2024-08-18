import './styles/Topbar.css'
import { useNavigate } from 'react-router-dom';
import TopbarMenu from './TopbarMenu';
import TopbarSidebar from './TopbarSidebar';

function Topbar() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <div className="Topbar">
            <div className='topbar-organization' onClick={goToHomePage}>
                <div className='topbar-logo'></div>
                <h1>SHOREWOODS</h1>
            </div>
            <TopbarMenu/>
            <TopbarSidebar/>
        </div>
    );
}

export default Topbar;