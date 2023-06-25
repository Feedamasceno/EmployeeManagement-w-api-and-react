import { deletePost } from "./PostAPI.js";
import { useState } from "react";
import "./styles.css";

export default function Delete({ id }) {
  const [isCardOn, setIsCardOn] = useState(true);

  function clickHandlerDelete() {
    deletePost(id).then(() => {
      alert("Successfully deleted employee!");
      window.location.href = "/";
    });
  }

  function clickHandler() {
    setIsCardOn(!isCardOn);
  }

  var content = (
    <button class="Delete">
    <img
      src="https://super.so/icon/dark/delete.svg"
      alt="Delete"
      onClick={clickHandler}
    />
    </button>
  );

  if (!isCardOn) {
    content = (
      <section className="Deletar">
        <div className="ConfirmDelete">
          <p>Are you sure about that?</p>
          <div className="DeleteButtons">
            <button className="YesDelete" onClick={clickHandlerDelete}>Yes</button>
            <button className="NoDelete" onClick={clickHandler}>No</button>
          </div>
        </div>
      </section>
    );
  }

  return <> {content} </>;
}
