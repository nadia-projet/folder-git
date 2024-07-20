const products = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      description:
        "High-quality wireless Bluetooth headphones with noise-canceling features and up to 20 hours of battery life.",
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=3776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 59,
      quantity: 1,
    },
    {
      id: 2,
      title: "Stainless Steel Water Bottle",
      description:
        "Eco-friendly stainless steel water bottle with a 1-liter capacity, perfect for outdoor activities.",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 19,
      quantity: 1,
    },
    /*{
      id: 3,
      title: "Portable Phone Charger",
      description:
        "Compact and lightweight portable phone charger with a 10000mAh battery capacity, compatible with all smartphones.",
      image:
        "https://images.unsplash.com/photo-1619489646924-b4fce76b1db5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 29,
      quantity: 1,
    },
    {
      id: 4,
      title: "Yoga Mat",
      description:
        "Non-slip yoga mat made from high-density foam for maximum comfort and support during yoga sessions.",
      image:
        "https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 24,
      quantity: 1,
    },*/
  ];
  
  const divContainer = document.getElementById("container");
  
  products.map((product) => {
    const div = document.createElement("div");
    div.classList.add("container");
    div.setAttribute("data-id", product.id);  // Set data-id attribute
    const title = document.createElement("h2");
    title.textContent = product.title;
    const image = document.createElement("img");
    image.src = product.image;
    image.classList.add("image");
  
    //
  
      const cartDetail = document.createElement("div");
      cartDetail.classList.add("cart-detail");
  
      const mid = document.createElement("div");
      mid.classList.add("mid");
  
      const decrButton = document.createElement("button");
      decrButton.innerHTML = "-";
      decrButton.onclick = () => decrItem(product.id);
  
      const quantity = document.createElement("span");
      quantity.textContent = product.quantity;
  
      const incrButton = document.createElement("button");
      incrButton.innerHTML = "+";
      incrButton.onclick = () => incrItem(product.id);
  
      mid.appendChild(decrButton);
      mid.appendChild(quantity);
      mid.appendChild(incrButton);
  
      const likeButton = document.createElement("button");
      likeButton.innerHTML = '<i class="fa fa-heart"></i>';
      likeButton.onclick = () => toggleLike(product.id);
  
      cartDetail.appendChild(mid);
      cartDetail.appendChild(likeButton);
  
      //
  
    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(cartDetail);
    divContainer.appendChild(div);
  });
  
  function getTotal(cart) {
    let cartTotal = 0;
  
    cart.forEach((cartItem) => {
      cartTotal += cartItem.price * cartItem.quantity;
    });
  
    const totalAmount = document.querySelector("#total");
    totalAmount.textContent = `${cartTotal.toFixed(2)}DH`;
  }
  
  // Example usage of getTotal function
  getTotal(products);
  
  
  function decrItem(id) {
      // Find the product in the 'products' array with matching 'id'
      const product = products.find(p => p.id === id);
      // Check if the product's quantity is greater than 0
      if (product.quantity > 0) {
          // Decrease the quantity of the product by 1
          product.quantity--;
          // Update the display of the product's quantity
          updateProductDisplay(id);
          // Recalculate and update the total amount of all products
          getTotal(products);
      }
  }
  
  function incrItem(id) {
      // Find the product in the 'products' array with matching 'id'
      const product = products.find(p => p.id === id);
       // Increase the quantity of the product by 1
      product.quantity++;
       // Update the display of the product's quantity
      updateProductDisplay(id);
          // Recalculate and update the total amount of all products
  
      getTotal(products);
  }
  
  
  function updateProductDisplay(id) {
      const product = products.find(p => p.id === id);
      // Find the HTML element (div) that corresponds to the product
      const div = document.querySelector(`div[data-id="${id}"]`);
      // Find the element inside the product's div that displays quantity
      const quantity = div.querySelector("span");
      // Update the text content of the quantity display element
      console.log(quantity)
      quantity.textContent = product.quantity;
  
  }