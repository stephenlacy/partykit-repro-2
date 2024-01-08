import { useState } from "react";
import "./App.css";
import { Page } from "./Page";

function App() {

  return (
    <>
      <h1>Party Kit</h1>
      <div className="card">
        <Page />
        <p>
          Edit <code>src/Page.tsx</code> and save to test HMR resetting socket
        </p>
      </div>
    </>
  );
}

export default App;
