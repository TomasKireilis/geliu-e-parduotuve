export async function getAllFlowers(userData) {
  let requestOptions = {};
  if (userData.loggedIn && userData.loggedIn == true) {
    requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          `${userData.email}:${userData.password}`
        ).toString("base64")}`,
      },
    };
  } else {
    requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  const response = await fetch("http://localhost:8080/items", requestOptions);
  const data = await response.json();
  return mapFlowerData(data);
}

export async function checkCurrentUserRole(userData) {
  let requestOptions = {};
  if (userData.loggedIn && userData.loggedIn == true) {
    requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Basic ${Buffer.from(
          `${userData.email}:${userData.password}`
        ).toString("base64")}`,
      },
    };
  } else {
    requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  const response = await fetch(
    "http://localhost:8080/currentUserRole",
    requestOptions
  );
  const data = await response.text();
  return data;
}

function mapFlowerData(data) {
  let temp = [];

  for (let i = 0; i < data.length; i++) {
    let tempObject = {
      id: data[i].id,
      imgSrc: getImageUrl(data[i].id),
      name: data[i].name,
      info: data[i].description,
      price: data[i].price,
      amount: data[i].amount,
      type: data[i].itemType.toLowerCase(),
    };
    if (data[i].itemType === "FLOWERPACK") {
      tempObject.type = "flowerBouquet";
    }

    temp = [...temp, tempObject];
  }

  return temp;
}

export async function postOrder(formData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch("http://localhost:8080/order", requestOptions);
  return response.status;
}

export async function getImageUrl(imageId) {
  return `http://localhost:8080/photo/${imageId}`;
}
