import {Routes, Route} from 'react-router-dom';
import { Quiz } from '../components';
import { Home, Categories, Authentication, Rules } from '../pages';

const NavigationRoutes = () => {
    
    return <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="categories" element={<Categories />}/>
        <Route path="auth" element={<Authentication />}/>
        <Route path="quiz" element={<Quiz />}/>
        <Route path="rules" element={<Rules />} />
    </Routes>
}

export { NavigationRoutes }