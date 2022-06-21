import './App.css';
import { Navbar, Footer } from "./components/index";
import { useThemeHook } from './hooks/useThemeHook';
import { NavigationRoutes } from './routes/NavigationRoutes';

function App() {
  const { theme } = useThemeHook();

  return (
    <div className={`${theme === "dark" ? "dark-mode" : "App"}`}>
      <Navbar />
      <NavigationRoutes />
      <Footer />
    </div>
  );
}

export default App;
