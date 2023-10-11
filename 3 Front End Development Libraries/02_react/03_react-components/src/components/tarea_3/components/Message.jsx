import React from 'react'
export default function Message({msg, bgColor}) {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color:"fff",
    fontWight:"bold",
    backgroundcolor:bgColor,
  }
  return(
    <div style={styles}>
      <p>{msg}</p>
    </div>
  )
}