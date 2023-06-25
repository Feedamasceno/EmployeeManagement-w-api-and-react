let Base_API = "https://mack-webmobile.vercel.app/api/users";

export async function getCard() {
  var cardsLocal = [];

  try {
    var response = await fetch(Base_API);
    cardsLocal = await response.json();
  } catch (error) {
    console.log(error);
  }

  return cardsLocal;
}
export async function addCard(data) {
  if (
    !data ||
    !data.name ||
    !data.date ||
    !data.salary ||
    !data.email ||
    !data.avatar ||
    !data.status
  ) {
    return undefined;
  }

  let { name, date, salary, email, status, avatar } = data;

  let number = parseInt(Math.random() * 50);
  let gender = Math.random() > 0.5 ? "men" : "women";
  let url =
  "https://randomuser.me/api/portraits/" + gender + "/" + number + ".jpg";
    let options = {
    method: "POST",
    body: JSON.stringify({ name, date, salary, email, status, avatar }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(Base_API, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }

  return undefined;
}

//DELETAR
export async function deletePost(id) {
  if (!id) {
    return undefined;
  }

  let options = {
    method: "DELETE",
  };

  try {
    let response = await fetch(Base_API + "/" + id, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }

  return undefined;
}

//EDITAR
export async function editPost(data) {
  if (
    !data ||
    !data.name ||
    !data.date ||
    !data.salary ||
    !data.email ||
    !data.status ||
    !data.id
  ) {
    return undefined;
  }

  let { name, date, salary, email, status, id } = data;
  let options = {
    method: "PUT",
    body: JSON.stringify({ name, date, salary, email, status, id }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(Base_API + "/" + id, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }

  return undefined;
}
