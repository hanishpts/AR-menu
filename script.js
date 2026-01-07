document.addEventListener("DOMContentLoaded", () => {

  const foods = [
    ["Butter Chicken",199,"https://images.unsplash.com/photo-1604908554164-8c85a1b79f58"],
    ["Paneer Tikka",179,"https://images.unsplash.com/photo-1600628422019-51c4d68b57c6"],
    ["Masala Dosa",99,"https://images.unsplash.com/photo-1626500155232-9d35b01c57a9"],
    ["Idli Sambhar",79,"https://images.unsplash.com/photo-1626500155463-29f6ed15c93d"],
    ["Chicken Biryani",249,"https://images.unsplash.com/photo-1604908554164-8c85a1b79f58"],
    ["Veg Biryani",199,"https://images.unsplash.com/photo-1600628422019-51c4d68b57c6"],
    ["Rajma Chawal",129,"https://images.unsplash.com/photo-1626500155232-9d35b01c57a9"],
    ["Chole Bhature",149,"https://images.unsplash.com/photo-1626500155463-29f6ed15c93d"],
    ["Samosa",30,"https://images.unsplash.com/photo-1604908554164-8c85a1b79f58"],
    ["Pav Bhaji",119,"https://images.unsplash.com/photo-1600628422019-51c4d68b57c6"],
    ["Vada Pav",40,"https://images.unsplash.com/photo-1626500155232-9d35b01c57a9"],
    ["Poha",60,"https://images.unsplash.com/photo-1626500155463-29f6ed15c93d"],
    ["Upma",70,"https://images.unsplash.com/photo-1604908554164-8c85a1b79f58"],
    ["Dal Tadka",129,"https://images.unsplash.com/photo-1600628422019-51c4d68b57c6"],
    ["Roti Sabzi",99,"https://images.unsplash.com/photo-1626500155232-9d35b01c57a9"],
    ["Malai Kofta",189,"https://images.unsplash.com/photo-1626500155463-29f6ed15c93d"],
    ["Fish Curry",229,"https://images.unsplash.com/photo-1604908554164-8c85a1b79f58"],
    ["Egg Curry",159,"https://images.unsplash.com/photo-1600628422019-51c4d68b57c6"],
    ["Gulab Jamun",60,"https://images.unsplash.com/photo-1626500155232-9d35b01c57a9"],
    ["Jalebi",50,"https://images.unsplash.com/photo-1626500155463-29f6ed15c93d"]
  ];

  const menu = document.getElementById("menu");
  let cart = [];
  let total = 0;

  foods.forEach(food => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${food[2]}" />
      <h3>${food[0]}</h3>
      <p>₹${food[1]}</p>
      <button onclick="addToCart('${food[0]}', ${food[1]})">Add to Cart</button>
      <button onclick="open3D()">View 3D</button>
    `;
    menu.appendChild(card);
  });

  window.addToCart = function(name, price) {
    cart.push({ name, price });
    total += price;
    document.getElementById("cartCount").innerText = cart.length;
  };

  window.openCart = function() {
    document.getElementById("cartModal").style.display = "block";
    const el = document.getElementById("cartItems");
    el.innerHTML = "";
    cart.forEach(i => el.innerHTML += `<p>${i.name} - ₹${i.price}</p>`);
    document.getElementById("totalPrice").innerText = total;
  };

  window.closeCart = function() {
    document.getElementById("cartModal").style.display = "none";
  };

  window.placeOrder = function() {
    closeCart();
    const queue = Math.floor(Math.random() * 5) + 1;
    const eta = queue * 7;

    document.getElementById("queue").innerText = queue;
    document.getElementById("eta").innerText = eta;
    document.getElementById("orderModal").style.display = "block";

    cart = [];
    total = 0;
    document.getElementById("cartCount").innerText = 0;
  };

  window.closeOrder = function() {
    document.getElementById("orderModal").style.display = "none";
  };

});

/* 3D VIEWER */
let scene, camera, renderer, model;

function open3D() {
  document.getElementById("modelModal").style.display = "block";

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("threeCanvas"),
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1));

  new THREE.GLTFLoader().load("models/food.glb", gltf => {
    model = gltf.scene;
    scene.add(model);
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  if (model) model.rotation.y += 0.01;
  renderer.render(scene, camera);
}

function close3D() {
  document.getElementById("modelModal").style.display = "none";
}
