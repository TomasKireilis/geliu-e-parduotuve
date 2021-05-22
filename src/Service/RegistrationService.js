export async function postUser(data) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    let response;
    try
    {
        response = await fetch("http://localhost:8080/register", requestOptions);
    }
    catch(e)
    {
        return 499;
    }

    return response.status;
}
