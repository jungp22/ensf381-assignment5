import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  return (
    <div>
        <Header />
        <LoginForm />
        <hr></hr>
        <SignupForm/>
        <Footer />
    </div>
  );
};

export default LoginPage;
