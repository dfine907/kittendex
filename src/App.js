import './App.css';
import SearchBox from './components/searchBox/searchBox.component';

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title">Cartoon KittenDex</h1>
      <SearchBox
          placeholder="Search Kittens"
          className="kitten-search-box" 
          />
    </div>
  );
}

export default App;
