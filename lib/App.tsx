import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { DialogExample } from "./dialog/dialog.example";
import { IconExample } from "./icon/icon.example";

function App() {
  return (
    <HashRouter>
      <div>
        <header>
          <div className="logo">steveUI</div>
        </header>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Routes>
            <Route path="/icon" element={<IconExample />} />
            <Route path="dialog" element={<DialogExample />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
