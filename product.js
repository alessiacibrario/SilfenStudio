// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("_id");
// const url = "http://marinedekoninck.com/silfen/wordpress-2/";

// function getData() {
// .then((data) => showBag(data));
// }
// const options = {
//   headers: {
//     "x-apikey": "",
//   },
// };

fetch("http://marinedekoninck.com/silfen/wordpress-2/wp-json/wp/v2/posts")
  .then((res) => res.json())
  .then((data) => showBag(data));

//populate the page
function showBag(bag) {
  console.log(bag);
  document.querySelector(".bagName").textContent = bag.title;
  document.querySelector(".bagInfo").textContent = bag.rendered;
  document.querySelector(".bagPrice").textContent = "KK ${bag.price}";
  document.querySelector(".bagImg img").src = bag.link;
}

showBag(bag);
