import '../Styles/PWBox.css';

const PWBox = () => {
    return(
    <div>
        <div id='username-input'>
        <label htmlFor='username' className='input-label'>Username/Email:</label>
        <input type='text' placeholder='your username or email' name='username' className='input-box'></input>
        </div>
        <div id='password-input'>
        <label htmlFor='pw' className='input-label'>Password:</label>
        <input type='password' placeholder='your password' name='pw' className='input-box'></input>
        </div>
    </div>
    )
}

export default PWBox;