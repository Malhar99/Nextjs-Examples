import { useRef } from 'react'
export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormInput = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch()
  }

  return (
    <div >
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInputRef}></input>
        </div>
        <div>
          <label htmlFor="feedback">feedback</label>
          <textarea row='5' id="feedback" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send FeedBack</button>
      </form>
    </div>
  );
}
