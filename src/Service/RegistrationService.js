export async function postUser(data) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    const response = await fetch("http://localhost:8080/register", requestOptions);
    console.log(response.status);
    return response.status;
}
