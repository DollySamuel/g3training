import React from 'react'

function LoginForm() {

    function handleSubmit () {

    }
  return (
    <div>
      <form className='loginPage'>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
