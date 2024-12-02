let img = document.querySelector("#img");
let ssid = document.getElementById("ssid");
let pass = document.getElementById("pass");
let print = document.getElementById("print");
function update() {
  let wifi = `WIFI:S:${ssid.value};T:WPA2;P:${pass.value};H:false;;`
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=${wifi}`;
}
ssid.addEventListener("input", () => {
  update()
});
pass.addEventListener("input", () => {
  update()
});
print.addEventListener("click",() => {
  window.print();
});