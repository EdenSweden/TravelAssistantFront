import '../Styles/LoginPage.css';
import LoginBox from './LoginBox';
import Register from './Register';

const LoginPage = () => {

return(<div id='bg'>
    <h1 id='front-page-header'>Trip planning, made simpler.</h1>
    <div id='login-box'>
        <LoginBox />
    </div>
    <Register />
</div>)
}
export default LoginPage;