import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Menu from "./components/Menu/Menu";
import PunchList from "./components/Pages/PunchList/PunchList";

class App extends Component {
  render() {
    let store = generateStore();
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Menu />
            <Switch>
              <Route exact path="/punchlist">
                <PunchList />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
