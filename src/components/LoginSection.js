import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Anchor, Section } from 'grommet';
import LoginForm from './LoginForm'


class LoginSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true, // switch between Login and SignUp
      email: '',
      password: '',
      name: '',
    }

    this._confirm = this._confirm.bind(this);
    this.handleChange= this.handleChange.bind(this);
  }


  handleChange = e => {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value })
    } else if (e.target.name === "email") {
      this.setState({ email: e.target.value })
    } else this.setState({ password: e.target.value })
  }

  _confirm = async data => {
    const { token } = await this.state.login ? data.login : data.signup
    await console.log(data)
    this._saveUserData(token)
    this.props.history.push(`/collection`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }

  render() {
    const { login, email, password, name } = this.state
    return (
      <Section pad='medium'
        justify='center'
        align='center'>
        <LoginForm
          login={login}
          email={email}
          name={name}
          password={password}
          handleChange={this.handleChange}
          handleClick={this._confirm} />
        < Anchor
          onClick={() => this.setState({ login: !login })}
          label={login ? 'I dont have an account, I would like to sign up' : 'Already have an account ? Please login !'} />
      </Section>
    )
  }
}

export default LoginSection