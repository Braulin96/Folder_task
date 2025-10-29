import "./App.css";

import Files from "./components/Files/Files";
import Folder from "./components/Folder/Folder";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Folder
          name="folder 1"
          onClick={() => console.log("clicked in folder")}
        />
        <Files
          name="file1"
          fileType=".docx"
          dateAdded="12/02/12"
          onClick={() => console.log("clicked")}
        />
      </header>
    </div>
  );
}

export default App;
