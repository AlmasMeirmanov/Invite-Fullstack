import { useInvite } from "../hooks"
import React from "react"

export default props => {
  const { user, sendGoing, sendNotgoing } = useInvite()
  return (
    <div className="box">
      <div className="invite">
        <img src={user.image}></img>
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
        <button className="x" onClick={e => sendGoing(user)}>
          X
        </button>
        <button className="ok" onClick={e => sendNotgoing(user)}>
          ok
        </button>
      </div>
    </div>
  )
}
