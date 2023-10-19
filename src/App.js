import './App.css';
import Header from './Component/Header';
import "leaflet/dist/leaflet.css";
import Map from './Component/Map'
import Aqi from './Component/AQI/Aqi';
import MajorPolutedArea from './Component/MajorPolutedArea/MajorPolutedArea';
import MyChart from './Component/Charts/MyChart';
function App() {
  return (
    <>
      <Header />
      <Map/>
      <Aqi/>
      <MajorPolutedArea/>
      <MyChart/>
    </>
  );
}

export default App;
