export async function getAllFlowers() {
  const response = await fetch("http://localhost:8080/items");
  const data = await response.json();
  return mapFlowerData(data);
}
function mapFlowerData(data) {
  let temp = [];

  for (let i = 0; i < data.length; i++) {
    let tempObject = {
      imgSrc: "flowersIcon.jpg",
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
