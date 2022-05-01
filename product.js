const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("_id")
const url = "https://silfenstudio.com/wp-json/wc-analytics/products");

fetch(url, options)
.then((res) => res. json())
.then ( (data) => showBag (data));

//populate the page
const options = {
    method: 'POST',
    body: JSON.stringify(params)  
};


const params = {
     function showBag(bag) {
     console.log(bag);
     document.querySelector(".bagName").textContent = bag.name;
     document.querySelector(".bagPrice").textContent = 'KK ${bag.price}';
     document.querySelector(".bagImg img").src = bag.img;
     }
};

