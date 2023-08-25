import React from 'react'


const Message = ({msg, bgColor}) => {
let  styles = {
  padding: "1rem",
  marginBootm: "1 rem",
  textAlign: "center",
  fontWight: "bold",
  backgroundColor: bgColor,
}
  return (
    <div style={styles}>
      <h2>{msg}</h2>
    </div>
  )
}

export default Message
