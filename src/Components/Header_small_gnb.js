import { Link } from 'react-router-dom';
import '../nStyle/Header_small_gnb.scss';


function Header_small_gnb() {

    return (
        <div>
            <div className='gnb_small'>
                <ul>
                    <li><Link to="/0">White & Black</Link></li>
                    <li><Link to="/1">Red Knit</Link></li>
                    <li><Link to="/2">Grey Yordan</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header_small_gnb;