import { useRef , useContext} from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
  const {showNofication} = useContext(NotificationContext)
  const emailInputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    showNofication({
      title:"Signing Up",
      message:"Registering for Newsletter",
      status:"pending"
    })
    const email = emailInputRef.current.value
    fetch('/api/register',{
      method:"POST",
      body: JSON.stringify({email:email}),
      headers:{
        'Content-Type':'application/json',
      }
    })
    .then((res)=>res.json())
    .then((data)=> showNofication({
      title:"Success",
      message:"Registered Successfully",
      status:"success"
    }));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
