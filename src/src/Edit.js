import { editPost } from "./PostAPI.js";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Edit({ id }) {
  const [isCardOn, setIsCardOn] = useState(true);
  const [name, setName] = useState(id.name);
  const [email, setEmail] = useState(id.email);
  const [salary, setSalary] = useState(id.salary);
  const [date, setDate] = useState(id.date);
  const [status, setStatus] = useState(id.status);

  function submitHandler(event) {
    event.preventDefault();
    let number = parseInt(Math.random() * 50);
    let gender = Math.random() > 0.5 ? "men" : "women";
    let url =
      "https://randomuser.me/api/portraits/" + gender + "/" + number + ".jpg";
    let put = {
      name: name,
      email: email,
      salary: salary,
      status: status,
      date: date,
      avatar: url,
      id: id._id,
    };

    editPost(put)
      .then(() => {
        alert("Employee successfully edited!");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function clickHandler() {
    setIsCardOn(!isCardOn);
  }

  var content = (
    <button class="Edit">
      <img
        src="https://super.so/icon/dark/edit.svg"
        alt="edit"
        onClick={clickHandler}
      />
    </button>
  );

  if (!isCardOn) {
    content = (
      <section className="CardEmployeeEdit">
        <div className="ImageProfileMoreEdit">
          <img src={id.avatar} alt="Avatar" />
        </div>
        <div className="InformationProfileMore">
          <div className="LeftMore">
            <form className="EditPage" onSubmit={submitHandler}>
              <div className="InformationsMoreEdit">
                <p className="StatusP">Status</p>
                <label className="CheckEditPage">
                  <div className="ActiveEditPage">
                    <input
                      type="radio"
                      value="Active"
                      checked={status === "Active"}
                      onChange={() => setStatus("Active")}
                    />
                    Active
                  </div>
                  <div className="InactiveEditPage">
                    <input
                      type="radio"
                      value="Inactive"
                      checked={status === "Inactive"}
                      onChange={() => setStatus("Inactive")}
                    />
                    Inactive
                  </div>
                </label>
                <label className="LineEditPage">
                  <p>Name</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>Email</p>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <div className="TitleEdit">
                  <p>Salary</p>
                  <p>Joined</p>
                </div>
                <label className="NumberEditPage">
                  <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </label>
              </div>
              <div className="BotoesEditPage">
                <button className="EditButton" type="submit">
                  <img src="https://super.so/icon/dark/edit.svg"/>
                  Edit
                </button>
                <Link className="EditEmployee" to="/">
                  <button className="CancelButton" onClick={clickHandler}>
                    <img src="https://super.so/icon/dark/x.svg"/>
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return <>{content}</>;
}
