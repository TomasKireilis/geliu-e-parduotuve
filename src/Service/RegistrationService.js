export async function postUser(data) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "no-cors",
    };
   // const response = await fetch("http://localhost:8080/order", requestOptions);
}