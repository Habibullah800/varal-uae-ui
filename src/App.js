import './App.css';
import Banner from './components/banner/Banner';
import CardFeature from './components/feature/CardFeature';
import Footer from './components/footer/Footer';
import MissionFeature from './components/missionFeature/MissionFeature';
import Navbar from './components/navbar/Navbar';
import Pricing from './components/pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MissionFeature />
      <CardFeature />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
