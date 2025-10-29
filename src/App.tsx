import "./App.css";

import Files from "./components/Files";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Files name="file1" fileType=".docx" dateAdded="12/02/12" />
      </header>
    </div>
  );
}

export default App;
