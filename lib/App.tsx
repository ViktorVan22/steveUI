import React from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { DialogExample } from "./dialog/dialog.example";
import { IconDemo } from "./icon/icon.demo";
import { Content, Aside, Header, Layout, Footer } from "./layout/layout";
import { LayoutExample } from "./layout/layout.example";
import "./App.scss";

function App() {
  return (
    <HashRouter>
      <Layout className="site-page">
        <Header className="site-header">
          <div className="logo">steveUI</div>
        </Header>
        <Layout>
          <Aside className="site-aside">
            <h2>组件</h2>
            <ul>
              <li>
                <NavLink to="/icon">Icon</NavLink>
              </li>
              <li>
                <NavLink to="/dialog">Dialog</NavLink>
              </li>
              <li>
                <NavLink to="/layout">Layout</NavLink>
              </li>
            </ul>
          </Aside>
          <Content className="site-main">
            <Routes>
              <Route path="/icon" element={<IconDemo />} />
              <Route path="/dialog" element={<DialogExample />} />
              <Route path="/layout" element={<LayoutExample />} />
            </Routes>
          </Content>
        </Layout>
        <Footer className="site-footer">footer</Footer>
      </Layout>
    </HashRouter>
  );
}

export default App;
