import "./App.css";

import FolderBlock from "./components/FolderBlock/FolderBlock";
import UserFetcher from "components/UserFetcher/UserFetcher";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FolderBlock />
        <UserFetcher />
      </header>
    </div>
  );
}

export default App;
