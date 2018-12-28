import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import Header from "../Header/Header"
import Story from "../Story/Story"
import Footer from "../Footer/Footer"

//@ts-ignore
class Homepage extends Component<IProps, IState> {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Header />
        <Story />
        <Footer />
      </div>
    )
  }
}

const mapState = (state: any) => {
  return {
    all: state
  }
}

const connector = connect(mapState)(Homepage)
//@ts-ignore
export default withRouter(connector)
