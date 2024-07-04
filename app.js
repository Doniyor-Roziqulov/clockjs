const title = document.querySelector(".title");
const sup = document.querySelector(".sup");
const day = document.querySelector(".day");

function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let secund = date.getSeconds();
    let millesec = date.getMilliseconds().toString().padStart(3, "0");
    let days = date.getDay();
    let months = date.getMonth();
    let years = date.getFullYear();
    let result = [hour, minute, secund]
        .map((i) => i.toString().padStart(2, "0"))
        .join(":");
    let resulta = [days, months + 1, years]
        .map((i) => i.toString().padStart(2, "0"))
        .join(":");
    title.textContent = result;
    sup.textContent = `${millesec}`;
    day.textContent = resulta;
}
clock();

setInterval(() => {
    clock();
}, 1000 / 60);
