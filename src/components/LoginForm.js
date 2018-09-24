import React from 'react'
import { Form, Header, Heading, Footer, Button, FormFields, TextInput, PasswordInput, FormField } from 'grommet'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`


const LoginForm = props => {
  const { email, password, name, login, handleChange, handleClick } = props
  return (
    <Form pad='large'>
      <Header>
        <Heading>
          {login ? 'Login' : 'Sign up'}
        </Heading>
      </Header>
      <FormFields>
        {!login && (<FormField label='name'>
          <TextInput id='name'
            name='name'
            value={name}
            onDOMChange={e => handleChange(e)}
          />
        </FormField>)}
        <FormField label='email'>
          <TextInput id='email'
            name='email'
            placeholder='email'
            value={email}
            onDOMChange={e => handleChange(e)}
          />
        </FormField>
        <FormField label='password'>
          <PasswordInput value={password}
            onChange={e => handleChange(e)} />
        </FormField>
      </ FormFields>
      <Footer pad={{ "vertical": "medium" }}>
        <Mutation
          mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
          variables={{ email, password, name }}
          onCompleted={data => handleClick(data)}
        >
          {mutation => (
              <Button label={login ? 'Login' : 'Sign up'}
                onClick={mutation} />

          )}
        </Mutation>
      </Footer>
    </Form>
  )
}

export default LoginForm

