import '../App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Advice from './advice'
import WeatherPage from './weather'

export default function Header() {
    return (
        <>
            <h1 className='header'>
                <Link className='link' to="/">Weather</Link>
                <Link className='link' to="/advice">Advice ;)</Link>
            </h1>
            <Routes>
                <Route path='/' element={<WeatherPage/>}/>
                <Route path='/advice' element={<Advice/>}/>
            </Routes>
        </>
    );
}
