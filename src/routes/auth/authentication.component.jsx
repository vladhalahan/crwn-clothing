import SignUpForm from '../../components/sign_up_form/sign_up_form.component';
import SignInForm from '../../components/sign_in_form/sign_in_form.component';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
