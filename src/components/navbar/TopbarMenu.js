import './styles/Topbar.css'
import { Link } from 'react-router-dom';
import menuItems from './TopbarItems.json'
import { useState, useEffect } from 'react';

function TopbarMenu() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(menuItems);
    }, []);
    
    return (
        <div className='topbar-menu'>
            <nav>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <Link to={item.url}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default TopbarMenu;