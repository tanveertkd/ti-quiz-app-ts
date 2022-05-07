import {Routes, Route} from 'react-router-dom';
import { Quiz, SignUp } from '../components';
import { Home, Categories, Authentication, Rules, Results } from '../pages';

const NavigationRoutes = () => {
    
    return <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="categories" element={<Categories />}/>
        <Route path="auth" element={<Authentication />}/>
        {/* Have this redirected to the auth page */}
        <Route path="signup" element={<SignUp />} />
        <Route path="/quiz/:id" element={<Quiz />}/>
        <Route path="rules" element={<Rules />} />
        <Route path="results" element={<Results />} />
    </Routes>
}

export { NavigationRoutes }