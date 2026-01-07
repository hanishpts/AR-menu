const foods = [
  ["Butter Chicken",199,"https://images.unsplash.com/photo-1604908554164-8c85a1b79f58"],
  ["Paneer Tikka",179,"https://images.unsplash.com/photo-1600628422019-51c4d68b57c6"],
  ["Masala Dosa",99,"https://images.unsplash.com/photo-1626500155232-9d35b01c57a9"],
  ["Idli Sambhar",79,"https://images.unsplash.com/photo-1626500155463-29f6ed15c93d"],
  ["Chicken Biryani",249,"https://images.unsplash.com/photo-1600628422019-51c4d68b57c6"],
  ["Veg Biryani",199,"https://images.unsplash.com/photo-1604908554164-8c85a1b79f58"],
  ["Rajma Chawal",129,"https://images.unsplash.com/photo-1626500155232-9d35b01c57a9"],
  ["Chole Bhature",149,"https://images.unsplash.com/photo-1626500155463-29f6ed15c93d"],
  ["Samosa",30,"https://images.unsplash.com/photo-1600628422019-51c4d68b57c6"],
  ["Pav Bhaji",119,"https://images.unsplash.com/photo-1604908554164-8c85a1b79f58"],
  ["Vada Pav",40,"https://images.unsplash.com/photo-1626500155232-9d35b01c57a9"],
  ["Poha",60,"https://images.unsplash.com/photo-1626500155463-29f6ed15c93d"],
  ["Upma",70,"https://images.unsplash.com/photo-1600628422019-51c4d68b57c6"],
  ["Dal Tadka",129,"https://images.unsplash.com/photo-1604908554164-8c85a1b79f58"],
  ["Roti Sabzi",99,"https://images.unsplash.com/photo-1626500155232-9d35b01c57a9"],
  ["Malai Kofta",189,"https://images.unsplash.com/photo-1626500155463-29f6ed15c93d"],
  ["Fish Curry",229,"https://images.unsplash.com/photo-1600628422019-51c4d68b57c6"],
  ["Egg Curry",159,"https://images.unsplash.com/photo-1604908554164-8c85a1b79f58"],
  ["Gulab Jamun",60,"https://images.unsplash.com/photo-1626500155232-9d35b01c57a9"],
  ["Jalebi",50,"https://images.unsplash.com/photo-1626500155463-29f6ed15c93d"]
];

let cart = [];
let total = 0;

const menu = document.getElementById("menu");

foods.forEach(f => {
  menu.innerHTML += `
    <div class="card">
      <img src="${f[2]}">
      <h3>${f[0]}</h3>
      <p>₹${f[1]}</p>
      <button onclick="addToCart('${f[0]}',${f[1]})">Add to Cart</button>
      <button onclick="open3D()">View 3D</button>
    </div>
  `;
});

function addToCart(name, price){
  cart.push({name, price});
  total += price;
  document.getElementById("cartCount").innerText = cart.length;
}

function openCart(){
  document.getElementById("cartModal").style.display = "block";
  const el = document.getElementById("cartItems");
  el.innerHTML = "";
  cart.forEach(i => el.innerHTML += `<p>${i.name} - ₹${i.price}</p>`);
  document.getElementById("totalPrice").innerText = total;
}

function closeCart(){
  document.getElementById("cartModal").style.display = "none";
}

function placeOrder(){
  closeCart();
  const queue = Math.floor(Math.random()*5)+1;
  const eta = queue * 7;

  document.getElementById("queue").innerText = queue;
  document.getElementById("eta").innerText = eta;

  document.getElementById("orderModal").style.display = "block";

  cart = [];
  total = 0;
  document.get
