import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { selectArticle } from "../actions"
import Homepage from "./Homepage/Homepage"
import { BrowserRouter, Route, Link } from "react-router-dom"
const PATH = process.env.NODE_ENV === "production" ? "/nexter/" : "/"

interface IState {}
interface IProps {}

class App extends Component<IProps, IState> {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route path={`${PATH}`} exact component={Homepage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)
