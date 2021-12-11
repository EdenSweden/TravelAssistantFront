import '../Styles/UsernameBox.css';

const UsernameBox = () => {
    return(
    <div id='username-input'>
    <label htmlFor='username' className='input-label'>Username/Email:</label>
    <input type='text' placeholder='your username or email' name='username' className='input-box'></input>
    </div>
    )
}

export default UsernameBox;