const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
const url = "http://marinedekoninck.com/silfen/wordpress-2/";

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showBag(data));

const options = {
  headers: {
    "x-apikey": "",
  },
};

//populate the page
function showBag(bag) {
  function showBag(bag) {
    console.log(bag);
    document.querySelector(".bagName").textContent = bag.name;
    document.querySelector(".bagPrice").textContent = "KK ${bag.price}";
    document.querySelector(".bagImg img").src = bag.img;
  }
}
