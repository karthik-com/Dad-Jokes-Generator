const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "nz9Oas8RLDQ9SFG92z2I8A==fwXFla5ZwXlr7lhX";

const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
    jokeEl.innerText = "Updating....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading....";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later."
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";
    }
    
}

btn:addEventListener("click",getJoke)
