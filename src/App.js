
import './App.css';
import Searchbar from './Components/Searchbar';

function App() {
  const handleOnSearchChange=(searchData)=>{
    console.log(searchData);
  }

  return (
    <div className="container">
      <Searchbar onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
