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
  return await mapFlowerData(data);
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

async function mapFlowerData(data) {
  let temp = [];

  for (let i = 0; i < data.length; i++) {
    var imageUrl = await getImageUrl(data[i].id);
    let tempObject = {
      id: data[i].id,
      imgSrc: imageUrl,
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

export async function postOrder(formData, userData) {
  let requestOptions = {};
  if (userData.loggedIn && userData.loggedIn == true) {
    requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Basic ${Buffer.from(
          `${userData.email}:${userData.password}`
        ).toString("base64")}`,
      },
      body: JSON.stringify(formData),
    };
  } else {
    requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
  }
  const response = await fetch("http://localhost:8080/order", requestOptions);
  return response.status;
}

export async function getImageUrl(imageId) {
  return `http://localhost:8080/photo/${imageId}`;
}
export async function getOrderHistory(userData) {
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
    return {};
  }
  const response = await fetch("http://localhost:8080/orders", requestOptions);
  const data = await response.json();

  if (data == null) {
    return [];
  }
  return data;
}
