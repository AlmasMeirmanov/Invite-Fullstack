import React from "react"
import Invite from "./Invite"
import Going from "./Going"
import Notgoing from "./Notgoing"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default props => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/going">GOING</Link>
          </li>
          <li>
            <Link to="/notgoing">Not Going</Link>
          </li>
        </ul>

        <Route exact path="/" component={Invite}></Route>
        <Route path="/going" component={Going}></Route>
        <Route path="/notgoing" component={Notgoing}></Route>
      </div>
    </Router>
  )
}
