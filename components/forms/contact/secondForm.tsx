import { FormEvent, useRef } from "react";

const SecondContact = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    const enterEmail = emailInputRef.current?.value;
    const enterFeedback = feedbackInputRef.current?.value;

    console.log("enterEmail", enterEmail);
    console.log("enterFeed", enterFeedback);

    const reqBody = { email: enterEmail, text: enterFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("data", data));
  };

  return (
    <div>
      <h1>The home page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows={5} ref={feedbackInputRef} />
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
};

export default SecondContact;
