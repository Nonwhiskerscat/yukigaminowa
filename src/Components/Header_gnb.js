import '../nStyle/Header_gnb.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header_small_gnb from './Header_small_gnb';

function Header_gnb() {


    const [ visible, setVisible ] = useState(false);

    return (
        <div>
            <ul className='gnb_big'>
                <li><Link to="/">Home</Link></li>
                <li onClick={e=> {
                    setVisible(!visible);
                }}
                
                onMouseLeave= { e=> {
                    setVisible(false);
                }}
                >
                    Detail
                    {visible&&<Header_small_gnb />}
                </li>
            </ul>
        </div>


    );
}

export default Header_gnb;