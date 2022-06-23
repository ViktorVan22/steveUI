import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { DialogExample } from "./dialog/dialog.example";
import { IconExample } from "./icon/icon.example";
import { Content, Aside, Header, Layout, Footer } from "./layout/layout";
import { LayoutExample } from "./layout/layout.example";
import "./App.scss";

const x = require("!!raw-loader!./icon/icon.example.tsx");
console.log(x.default);

function App() {
  return (
    <HashRouter>
      <Layout className="page" style={{ border: "1px solid red" }}>
        <Header style={{ border: "1px solid green" }}>
          <div className="logo">steveUI</div>
        </Header>
        <Layout>
          <Aside style={{ border: "1px solid blue" }}>
            <h2>组件</h2>
            <ul>
              <li>
                <Link to="/icon">Icon</Link>
              </li>
              <li>
                <Link to="/dialog">Dialog</Link>
              </li>
              <li>
                <Link to="/layout">Layout</Link>
              </li>
            </ul>
          </Aside>
          <Content style={{ border: "1px solid grey" }}>
            <Routes>
              <Route path="/icon" element={<IconExample />} />
              <Route path="/dialog" element={<DialogExample />} />
              <Route path="/layout" element={<LayoutExample />} />
            </Routes>
          </Content>
        </Layout>
        <Footer style={{ border: "1px solid purple" }}>footer</Footer>
      </Layout>
    </HashRouter>
  );
}

export default App;
