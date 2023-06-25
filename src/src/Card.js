import { useEffect, useState } from "react";
import StatusProfile from "./StatusProfile";
import { Link } from "react-router-dom";
import Delete from "./Delete.js";
import Edit from "./Edit.js";

function SearchInput({ onSearchChange }) {
  function handleChange(event) {
    onSearchChange(event.target.value);
  }

  return <input type="text" placeholder="Search..." onChange={handleChange} />;
}

export default function Card() {
  const [dataAPI, setDataAPI] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    getDataAPI().then((c) => {
      setDataAPI(c.sort(sortName));
      setDataSearch(c);
    });
  }, []);

  function handleSearchChange(value) {
    setDataSearch(
      dataAPI.filter((data) =>
        data.name.toUpperCase().includes(value.toUpperCase())
      )
    );
  }

  function handleDateChange(event) {
    setDataSearch(
      dataAPI.filter((data) => {
        return Date.parse(data.date) >= Date.parse(event.target.value);
      })
    );
  }

  function handleStatusChange(event) {
    setStatusFilter(event.target.value);
  }

  const DataViews = dataSearch.map((data) => {
    if (statusFilter == "All" || statusFilter == data.status) {
      return <DataViewCard info={data} />;
    } else {
      return <></>;
    }
  });

  return (
    <div>
      <section className="Top">
        <h2>Employees</h2>
        <Link to="/employees" className="AddLink">
          <button>
            <img
              src="https://super.so/icon/light/user-plus.svg"
              alt="user-plus"
            />
            Add Employee
          </button>
        </Link>
      </section>

      <section className="Top2">
        <section className="Results">
          <button>
            <img src="https://super.so/icon/dark/search.svg" alt="search" />
          </button>
          <SearchInput onSearchChange={handleSearchChange} />
          <div className="VerticalLine"></div>
          <button>
            <img src="https://super.so/icon/dark/x.svg" alt="x" />
          </button>
        </section>

        <div class="Status">
          <label>
            <input
              type="radio"
              name="status"
              value="All"
              onChange={handleStatusChange}
            />{" "}
            All <br />
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="Active"
              onChange={handleStatusChange}
            />{" "}
            Active <br />
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="Inactive"
              onChange={handleStatusChange}
            />{" "}
            Inactive
          </label>
        </div>

        <div class="Date">
          <label>
            <input type="date" onChange={handleDateChange} />
          </label>
        </div>
      </section>

      <section className="Cards">
        <section className="dataAPI">{DataViews}</section>
      </section>
    </div>
  );
}

function DataViewCard({ info }) {
  const [CardOn, setCardOn] = useState(true);

  function clickHandler() {
    setCardOn(!CardOn);
  }

  var content = (
    <section className="CardEmployee">
      <div className="ImageProfileMore">
        <img src={info.avatar} alt="Avatar" />
      </div>
      <div className="InformationProfile">
        <div className="Left">
          <div class="StatusProfile">
            <StatusProfile status={info.status} />
          </div>
          <h3>{info.name}</h3>
        </div>
        <div className="Right">
          <Delete id={info._id} />
          <button className="SeeMore" onClick={clickHandler}>
            See more
          </button>
        </div>
      </div>
    </section>
  );
  if (!CardOn) {
    content = (
      <section className="CardEmployeeMore">
        <div className="ImageProfileMore">
          <img src={info.avatar} alt="Avatar" />
        </div>
        <div className="InformationProfileMore">
          <div className="LeftMore">
            <div class="StatusProfile">
              <StatusProfile status={info.status} />
            </div>
            <h3> {info.name} </h3>
            <div className="InformationsMore">
              <p>Email</p>
              <h4>{info.email}</h4>
              <p>Salary</p>
              <h4>$ {info.salary}</h4>
              <p>Joined</p>
              <h4>{info.date}</h4>
            </div>
          </div>
          <div className="RightMore">
            <div className="ButtonsRightMore">
              <Delete id={info._id} />
              <Edit id={info} />
            </div>
            <div>
              <button className="SeeLess" onClick={clickHandler}>
                See less
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <>{content}</>;
}

async function getDataAPI() {
  try {
    const response = await fetch("https://mack-webmobile.vercel.app/api/users");
    const dataInfoAPI = await response.json();
    return dataInfoAPI;
  } catch (error) {
    console.log(error);
    return [];
  }
}

function sortName(a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  }
  return 0;
}
