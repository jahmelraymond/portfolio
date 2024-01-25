import emailjs from "@emailjs/browser";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRef } from "react";
import { useStateContext } from "../Provider/contextProvider";

export default function ContactForm({ props }) {
  const { context, setContext } = useStateContext();
  const form = useRef();

  const templateId = "template_vgw3wtf";

  const serviceId = "service_0f24hyo";
  const publicKey = "o2wwyNMf8UyVGWgjF";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("message delivered", result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  const closeForm = (e) => {
    setContext((prev) => ({
      ...prev,
      form: false,
      name: "",
      email: "",
      message: "",
    }));
  };
  return (
    <div
      id="myform"
      className="contactForm"
      style={{
        position: "fixed",
        borderRadius: "10px",
        backgroundColor: "gainsboro",
        color: "royalblue",
        flexDirection: "column",
        padding: "20px",
        width: "25%",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
        zIndex: "2",
        display: context.form ? "flex" : "none",
      }}
    >
      {console.log("context", context)}
      <AiFillCloseCircle
        style={{
          position: "absolute",
          right: "10",
          top: "10",
          fontSize: "34px",
          cursor: "pointer",
        }}
        onClick={(e) => closeForm(e)}
      />
      <h1
        style={{
          margin: "10px 0",
          color: "royalblue",
          fontFamily: "Istok Web",
        }}
      >
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label
          htmlFor="name"
          style={{ fontSize: "24px", fontFamily: "Istok Web" }}
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          style={{
            padding: "10px",
            border: "solid 0.5px royalblue",
            borderRadius: "10px",
          }}
          placeholder="Name"
          onChange={(e) =>
            setContext((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          value={context.name}
        />
        <label
          htmlFor="email"
          style={{ fontSize: "24px", fontFamily: "Istok Web" }}
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          style={{
            padding: "10px",
            border: "solid 0.5px royalblue",
            borderRadius: "10px",
          }}
          placeholder="Email"
          onChange={(e) =>
            setContext((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          value={context.email}
        />
        <label
          htmlFor="message"
          style={{ fontSize: "24px", fontFamily: "Istok Web" }}
        >
          Message
        </label>
        <textarea
          rows={5}
          type="text"
          name="message"
          id="message"
          style={{
            padding: "10px",
            border: "solid 0.5px royalblue",
            borderRadius: "10px",
          }}
          placeholder="Message"
          onChange={(e) =>
            setContext((prev) => ({ ...prev, message: e.target.value }))
          }
          value={context.message}
        />
        <button
          className="send"
          style={{
            padding: "10px",
            fontSize: "24px",
            fontFamily: "Istok Web",
            border: "solid 0.5px royalblue",
            borderRadius: "10px",
            margin: "10px 0",
            // backgroundColor: "white",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
