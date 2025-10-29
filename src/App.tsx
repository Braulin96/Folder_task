import "./App.css";

import Files from "./components/Files/Files";
import Folder from "./components/Folder/Folder";
import FolderBlock from "./components/FolderBlock/FolderBlock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FolderBlock />
      </header>
    </div>
  );
}

export default App;
