"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const host = document.querySelector(".jokes");
const button = document.querySelector("button");
const number = document.querySelector('input[type="number"]');
button.addEventListener("click", (e) => {
    e.preventDefault();
    getJokes();
    clearInput();
});
function getJokes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://api.icndb.com/jokes/random/${number.value}`);
            const data = yield response.json();
            if (!data)
                throw new Error("No data");
            let output = "";
            if (data.type === "success") {
                data.value.forEach((joke) => {
                    output += `
          <li>${joke.joke}</li>
        `;
                });
            }
            else {
                output += `<li>Something went wrong</li>`;
            }
            host.innerHTML = output;
        }
        catch (error) {
            console.log(error);
        }
    });
}
function clearInput() {
    number.value = "";
}
//# sourceMappingURL=app.js.map