import './App.css';
import FrameCall from './components/FrameCall';
import Searchbar from './components/Searchbar';
import TopNavBar from './components/TopNavBar';
import CategoryFilter from './components/CategoryFilter';
import ProductPanel from './components/ProductPanel';
import Footer from './components/Footer';
import AppDownloadSection from './components/AppDownloadSection';

function App() {
  return (
    <div className="App">
      <FrameCall/>
      <TopNavBar/>
      <Searchbar/>
      <CategoryFilter/>
      <ProductPanel name="Summer Collection"/>
      <ProductPanel name="Summer Collection"/>
      <AppDownloadSection/>
      <Footer/>
    </div>
  );
}

export default App;
