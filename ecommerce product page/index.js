let cartList = {
  name: "Fall Limited Edition Sneakers",
  image: "images/image-product-1.jpg",
  price: 12500,
  quantity: 1,
};

const cart = document.querySelector(".carts");
const cartIcon = document.querySelector(".cart");
const plus = document.querySelector(".plusbtn");
const minus = document.querySelector(".minusbtn");
const itemNum = document.querySelector(".itemnumber");
let zero = document.querySelector(".zerobtn");
let cartContainer = document.querySelector('.cart-container');
const firstImg = document.querySelector(".firstthumbnail");
const secondImg = document.querySelector(".secondthumbnail");
const thirdImg = document.querySelector(".thirdthumbnail");
const forthImg = document.querySelector(".forththumbnail");
let imgCont = document.querySelector(".select-img");
const img1 = document.querySelector(".thumbnail1");
const img2 = document.querySelector(".thumbnail2");
const img3 = document.querySelector(".thumbnail3");
const img4 = document.querySelector(".thumbnail4");
const images = document.querySelectorAll(".imgg");
let imgSelect = document.querySelector(".selectimg");
let container = document.querySelector (".container");
let secondcontainer = document.querySelector (".absoluteCont");
const cross = document.querySelector(".crossimg");
const nextBtn = document.querySelector(".nextdiv");
const previousBtn = document.querySelector(".previousdiv");
const next = document.querySelector(".nextbtn");
const previous = document.querySelector(".previousbtn");
const allImgs = document.querySelector(".pick-image");

let priceFormat = ((cartList.price/100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ","); 

function addToCart() {
  let cartQty = zero.innerHTML;
  let totalAmt = priceFormat*cartQty;
  cartContainer.innerHTML =
  `
    <div class="cartgrid">
      <img src=${cartList.image} alt="" class="cartimg"/>
      <div class="cartinfo">
        <p class="cartname">${cartList.name}</p>
        <p class="qtyinfo">$${priceFormat} &times ${cartQty} = $${totalAmt.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>
      <img src="images/icon-delete.svg" alt="" class="cartdelete"/>
    </div>
    <button type="button" class="cartbtn">Checkout</button>
  `
const deleteIcon = document.querySelector(".cartdelete");
function deleteItem() {
  cartContainer.innerHTML = "Your Cart is Empty";
};

deleteIcon.addEventListener("click", deleteItem);
}

quantity = 0;
function addQuantity() {
  quantity += 1;
  zero.innerHTML = quantity;
  itemNum.innerHTML = quantity;
  if (zero.innerHTML > 0) {
    itemNum.classList.remove("hidden");
  }
};
function removeQuantity() {
  if (zero.innerHTML >= 1) {
    itemNum.classList.remove("hidden");
  } else if (zero.innerHTML < 1) {
    itemNum.classList.add("hidden");
  }
  if (zero.innerHTML > 0) {
    quantity -= 1;
    itemNum.innerHTML = quantity;
  }
  zero.innerHTML = quantity;
};
let cartQty = zero.innerHTML;
if (zero.innerHTML != 0) {
  i
};

cartIcon.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});
firstImg.addEventListener("click", () => {
  imgCont.src = "images/image-product-1.jpg";
  firstImg.classList.add("selected");
  secondImg.classList.remove("selected");
  thirdImg.classList.remove("selected");
  forthImg.classList.remove("selected");
});
secondImg.addEventListener("click", () => {
  imgCont.src = "images/image-product-2.jpg";
  firstImg.classList.remove("selected");
  secondImg.classList.add("selected");
  thirdImg.classList.remove("selected");
  forthImg.classList.remove("selected");
});
thirdImg.addEventListener("click", () => {
  imgCont.src = "images/image-product-3.jpg";
  firstImg.classList.remove("selected");
  secondImg.classList.remove("selected");
  thirdImg.classList.add("selected");
  forthImg.classList.remove("selected");
});
forthImg.addEventListener("click", () => {
  imgCont.src = "images/image-product-4.jpg";
  firstImg.classList.remove("selected");
  secondImg.classList.remove("selected");
  thirdImg.classList.remove("selected");
  forthImg.classList.add("selected");
});
imgCont.addEventListener("click", () => {
  container.style.opacity = "0.5";
  secondcontainer.classList.remove("hidden");
  imgSelect.src = `images/image-product-1.jpg`;
  images.forEach((image) => {
    image.classList.remove("selected");
  });
  img1.classList.add("selected");
  num = 1;
});
cross.addEventListener("click", () => {
  container.style.opacity = "1";
  secondcontainer.classList.add("hidden");
});
let imgNum = [1,2,3,4];
let num = 0;
nextBtn.addEventListener("click", () => {
  num++;
  if (num >= 5) {
    num = 1; 
  }
  imgSelect.src = `images/image-product-${num}.jpg`;
  images.forEach((image) => {
    image.classList.remove("selected");
  });
  if (num === 1) {
    img1.classList.add("selected");
  } else if (num === 2) {
    img2.classList.add("selected");
  } else if (num === 3) {
    img3.classList.add("selected");
  } else if (num === 4) {
    img4.classList.add("selected");
  };
});
next.addEventListener("click", () => {
  num++;
  if (num >= 5) {
    num = 1; 
  };
  imgCont.src = `images/image-product-${num}.jpg`;
});
previous.addEventListener("click", () => {
  num--;
  if (num < 1) {
    num = 4; 
  };
  imgCont.src = `images/image-product-${num}.jpg`;
});
previousBtn.addEventListener("click", () => {
  num--;
  if (num < 1) {
    num = 4; 
  };
  imgSelect.src = `images/image-product-${num}.jpg`;
  images.forEach((image) => {
    image.classList.remove("selected");
  });
  if (num === 1) {
    img1.classList.add("selected");
  } else if (num === 2) {
    img2.classList.add("selected");
  } else if (num === 3) {
    img3.classList.add("selected");
  } else if (num === 4) {
    img4.classList.add("selected");
  };
});
function addClassinMedia() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    next.classList.remove("hidden");
    previous.classList.remove("hidden");
    allImgs.classList.add("hidden");
  } else {
    next.classList.add("hidden");
    previous.classList.add("hidden");
    allImgs.classList.remove("hidden");
  };
};
addClassinMedia();
window.addEventListener("resize", addClassinMedia);

