let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let div = document.querySelector("div");

plus.addEventListener("click", () => {
    let result = Number(inp1.value) + Number(inp2.value);
    div.textContent = result;
});
minus.addEventListener("click", () => {
    let result = Number(inp1.value) - Number(inp2.value);
    div.textContent = result;
});
multiply.addEventListener("click", () => {
    let result = Number(inp1.value) * Number(inp2.value);
    div.textContent = result;
});
divide.addEventListener("click", () => {
    let result = Number(inp1.value) / Number(inp2.value);
    div.textContent = result;
});