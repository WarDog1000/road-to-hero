import React, {Component} from 'react'

function Login() {
  return(
    <h3>Login</h3>
  )
}
function Logout() {
  return(
    <h3>Logout</h3>
  )
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props)
    this.state = {
      session: true
    }
  }
  render() {
    return(
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    )
  }
}