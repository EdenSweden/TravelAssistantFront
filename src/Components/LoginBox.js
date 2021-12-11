const LoginBox = () => {

    return(
    <div>
        {/*<div id='username-input'>*/}
    <form action='' method='get'>
        <label htmlFor='username' className='input-label'>Username/Email:</label>
        <input type='text' placeholder='your username or email' name='username' className='input-box'></input>
        {/*</div>*/}
        {/*<div id='password-input'>*/}
        <label htmlFor='pw' className='input-label'>Password:</label>
        <input type='password' placeholder='your password' name='pw' className='input-box'></input>
        {/*</div>*/}
    </form>
    </div>
    )
}

export default LoginBox;