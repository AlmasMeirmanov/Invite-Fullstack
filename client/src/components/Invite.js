import { useInvite } from "../hooks"
import React from "react"

export default props => {
  const { user, sendGoing, sendNotgoing } = useInvite()
  return (
    <div>
      <div className="invite">
        <img src={user.image}></img>
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </div>
      <button onClick={e => sendGoing(user)}>going</button>
      <button onClick={e => sendNotgoing(user)}>notgoing</button>
    </div>
  )
}
