import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
        <Header />
        {showLoginForm ? <LoginForm toggleForm={toggleForm} /> : <SignupForm toggleForm={toggleForm} />}
        <Footer />
    </div>
  );
};

export default LoginPage;
