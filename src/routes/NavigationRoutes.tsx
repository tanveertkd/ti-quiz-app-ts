import {Routes, Route} from 'react-router-dom';
import { Home, Categories, Authentication } from '../pages';

const NavigationRoutes = () => {
    
    return <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="categories" element={<Categories />}/>
        <Route path="auth" element={<Authentication />}/>
    </Routes>
}

export { NavigationRoutes }