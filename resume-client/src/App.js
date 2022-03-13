import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar/Sidebar";
import ContentWrapper from "./ContentWrapper/ContentWrapper";
import CodeExamples from "./CodeExamples";
import WebExamples from "./WebExamples";
import SingleExample from "./SingleExample";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Auth/Login.js";
import PrivateRoute from "./Auth/PrivateRoute";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Dashboard from "./dashboard/Dashboard";
import { AuthContext } from "./Auth/Auth";
import { AuthProvider } from "./Auth/Auth";
import { Link } from "react-router-dom";
import PageHeader from "./ContentWrapper/PageHeader";

const App = () => {
  const [codeExamples, setCodeExamples] = useState(null);
  const [webExamples, setWebExamples] = useState(null);
  const [settings, setsettings] = useState(null);

  const callSiteOptions = () => {
    axios.get(`${process.env.PUBLIC_URL}/profileSettings`).then((res) => {
      const options = res.data;
      setsettings(options);
    });
  };

  const callMyWorkAPI = () => {
    axios.get(`${process.env.PUBLIC_URL}/myworkAPI`).then((res) => {
      const work = res.data;
      setWebExamples(work);
    });
  };

  const callCodeAPI = () => {
    axios.get(`${process.env.PUBLIC_URL}/codeExamplesAPI`).then((res) => {
      const code = res.data;
      setCodeExamples(code);
    });
  };

  useEffect(() => {
    callMyWorkAPI();
    callCodeAPI();
    callSiteOptions();
  }, []);

  const { currentUser } = useContext(AuthContext) || {};

  if (codeExamples && webExamples && settings) {
    return (
      <div className="portfolio-wrap">
        <Sidebar />
        <div className="App">
          <AuthProvider>
            <Router>
              <Header />
              <ContentWrapper>
                <Switch>
                  <Route exact path={`${process.env.PUBLIC_URL}/`}>
                    <About settings={settings[0]} />
                  </Route>
                  <Route path={`${process.env.PUBLIC_URL}/resume`}>
                    <Resume />
                  </Route>
                  <Route path={`${process.env.PUBLIC_URL}/websites`}>
                    <PageHeader text="Web Examples" />
                    <WebExamples data={webExamples} />
                  </Route>
                  <Route path={`${process.env.PUBLIC_URL}/code`}>
                    <PageHeader text="Code Examples" />
                    <CodeExamples data={codeExamples} />
                  </Route>
                  <Route path={`${process.env.PUBLIC_URL}/contact`}>
                    <Contact settings={settings[0]} />
                  </Route>
                  <PrivateRoute
                    exact
                    path="/dashboard"
                    settings={settings[0]}
                    component={Dashboard}
                  />
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  {codeExamples.map(function (single, index) {
                    if (single.status === "publish") {
                      const route = "/" + single.slug;
                      const markup = (
                        <Route
                          key={index}
                          path={`${process.env.PUBLIC_URL}${route}`}
                        >
                          <SingleExample
                            single={single}
                            type="code"
                            index={index}
                            data={codeExamples}
                          />
                        </Route>
                      );
                      return markup;
                    }
                    return false;
                  })}
                  {webExamples.map(function (single, index) {
                    if (single.status === "publish") {
                      const route = "/" + single.slug;
                      const markup = (
                        <Route
                          key={index}
                          path={`${process.env.PUBLIC_URL}${route}`}
                        >
                          <SingleExample
                            single={single}
                            type="web"
                            index={index}
                            data={webExamples}
                          />
                        </Route>
                      );
                      return markup;
                    }
                    return false;
                  })}
                  <Route>
                    <h1>404 Page Not Found</h1>
                  </Route>
                </Switch>
              </ContentWrapper>
              <Footer settings={settings[0]} />
              <Link to="/login">
                <div className="settings-icon">
                  <i className="large material-icons">settings</i>
                  {currentUser && <span className="welcome">Signed In</span>}
                </div>
              </Link>
            </Router>
          </AuthProvider>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading-screen">
        <div className="loader-wrap center">
          <div className="loader"></div>
          <p>Just a second</p>
        </div>
      </div>
    );
  }
};

export default App;
