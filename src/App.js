import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navBar/NavBar';
import HeroSection from './components/heroSection/HeroSection';
import TrendCard from './components/trendCard/TrendCard';
import Trending from './components/trendingColection/TrendingCollection';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <Trending />
        <div className="container" style={{ display: "flex" , justifyContent: "space-evenly"}}>
          <TrendCard />
          <TrendCard />
          <TrendCard />
        </div>
      </div>
    </>
  );
}

export default App;
