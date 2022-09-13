const host = document.querySelector(".jokes")!;
const button = document.querySelector("button")!;
const number = document.querySelector(
  'input[type="number"]'
)! as HTMLInputElement;

button.addEventListener("click", (e) => {
  e.preventDefault();
  getJokes();
  clearInput();
});

async function getJokes() {
  try {
    const response = await fetch(
      `http://api.icndb.com/jokes/random/${number.value}`
    );
    const data = await response.json();
    if (!data) throw new Error("No data");
    let output: string = "";
    if (data.type === "success") {
      data.value.forEach((joke: any) => {
        output += `
          <li>${joke.joke}</li>
        `;
      });
    } else {
      output += `<li>Something went wrong</li>`;
    }
    host.innerHTML = output;
  } catch (error) {
    console.log(error);
  }
}

function clearInput() {
  number.value = "";
}
