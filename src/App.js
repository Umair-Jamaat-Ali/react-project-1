import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navBar/NavBar';
import HeroSection from './components/heroSection/HeroSection';
import TrendCard from './components/trendCard/TrendCard';
import Trending from './components/trendingColection/TrendingCollection';
import TopCreators from './components/topCreators/TopCreator';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <Trending />
        <div className="container" style={{ display: "flex" , justifyContent: "space-evenly", }}>
          <TrendCard />
          <TrendCard />
          <TrendCard />
        </div>
        <TopCreators/>
      </div>
    </>
  );
}

export default App;
