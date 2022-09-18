
import './App.css';
import CurrentWeather from './Components/Current_Weather/CurrentWeather';
import Searchbar from './Components/Searchbar';

function App() {
  const handleOnSearchChange=(searchData)=>{
    console.log(searchData);
  }

  return (
    <div className="container">
      <Searchbar onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
