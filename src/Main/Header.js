import {Link} from 'react-router-dom'
import { TopicContext } from './TopicContext'
import { useContext } from 'react';

function Navbar(){
    let currentTopic = useContext(TopicContext);
    return(
        <nav className='nav'>
            <ul className='ul-nav'>
                <li className='li-nav'>
                    <Link to={`/${currentTopic}/concepts`} className='nav-a'>Concepts</Link>
                </li>
                <li  className='li-nav'>
                    <Link to={`/${currentTopic}/example`} className='nav-a'>Examples</Link>
                </li>
                <li className='li-nav'>
                    <Link to={`/${currentTopic}/quiz`} className='nav-a'>Quiz</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar