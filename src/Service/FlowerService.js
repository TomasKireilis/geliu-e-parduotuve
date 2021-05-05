export async function getAllFlowers() {
  const response = await fetch("http://localhost:8080/items");
  const data = await response.json();
  return mapFlowerData(data);
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
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  };
  console.log(formData);
  const response = await fetch("http://localhost:8080/order", requestOptions);
  console.log(response);
}

export async function getImageUrl(imageId) {
  return `http://localhost:8080/images/${imageId}`;
}
