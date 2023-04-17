import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef(); // get the reference of an element inside this component and this is  A HOOK xd
  const router = useRouter(); // esto para tener la ruta de una pagina
  const [message, setMessage] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    try {
      // POST fetch request
      //body emailValue and the eventID
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message)
      
    } catch (e) {
      console.log(e, "ERROR");
    }
  };
  return (
    <div className="event_single_page">
      <Image src={data.image} width={1000} height={500} atl={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for this event</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};
export default SingleEvent;
