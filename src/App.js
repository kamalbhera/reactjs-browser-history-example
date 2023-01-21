import './App.css';
import { initialHistoryList } from './data'
import BrowsingHistory from './components/BrowsingHistory';
function App() {
  return (
    <div className="App">
      <BrowsingHistory initialHistoryList={initialHistoryList} /> 
    </div>
  );
}

export default App;
