import { Link } from "react-router-dom";
import "./styles.css";
import Footer from "./components/Footer";
import "./styles.css";
import { useState } from "react";
import { addCard } from "./PostAPI";

export default function AddForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function salaryChangeHandler(event) {
    setSalary(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function statusChangeHandler(event) {
    setStatus(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    let number = parseInt(Math.random() * 50);
    let gender = Math.random() > 0.5 ? "men" : "women";
    let url =
      "https://randomuser.me/api/portraits/" + gender + "/" + number + ".jpg";
    let post = {
      name: name,
      email: email,
      salary: salary,
      status: status,
      date: date,
      avatar: url,
    };

    addCard(post)
      .then(() => {
        alert("Employee successfully added!");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="AddProfile">
      <form onSubmit={submitHandler}>
        <div className="AddLine1">
          <label>
            <input
              className="InputAdd"
              type="text"
              placeholder="FirstName"
              onChange={nameChangeHandler}
            />
          </label>

          <label>
            <input
              className="InputAdd"
              type="number"
              placeholder="Salary"
              onChange={salaryChangeHandler}
            />
          </label>
          <label>
            <input
              className="InputAdd"
              type="email"
              placeholder="Email"
              onChange={emailChangeHandler}
            />
          </label>
          <label>
            <div className="SelectDate">
              <input
                className="InputAdd"
                type="date"
                onChange={dateChangeHandler}
              />
            </div>
          </label>
        </div>
        <div className="statusText">
          <label className="statusTextAdd">
            <input
              className="select"
              onChange={statusChangeHandler}
              value="Active"
              type="radio"
              name="CheckDefault"
            />
            Active
          </label>
          <label className="statusTextAdd">
            <input
              className="select"
              onChange={statusChangeHandler}
              value="Inactive"
              type="radio"
              name="CheckDefault"
            />
            Inactive
          </label>
        </div>
        <hr />
        <div className="AddLine3">
          <button type="submit" className="Add">
            <img src="https://super.so/icon/light/plus.svg" alt="add" /> ADD
          </button>
          <Link to="/" className="cancelAddLink">
            <button className="Cancel">
              <img src="https://super.so/icon/light/x.svg" alt="cancel" />
              CANCEL
            </button>
          </Link>{" "}
        </div>
      </form>
      <Footer />
    </section>
  );
}
