import '../Styles/Register.css';

const Register = () => {
    return(<div>
        <form id='register-form' action='' method='post'>
            <label htmlFor='firstName'>First name:</label>
            <input name='firstName' type='text' placeholder='Your first name'></input>
            <label htmlFor='lastName'>Last name:</label>
            <input name='lastName' type='text' placeholder='Your last name'></input>
            <label htmlFor='username'>Username:</label>
            <input name='username' type='text' placeholder='Preferred username'></input>
            <label htmlFor='email'>Email:</label>
            <input name='email' type='text' placeholder='Your email address'></input>
            <label htmlFor='pw'>Password:</label>
            <input name='pw' type='password' placeholder='Create a password'></input>
            <label htmlFor='confirm'>Confirm password:</label>
            <input name='confirm' type='password' placeholder='Confirm password'></input>
        </form>
    </div>)

}

export default Register;