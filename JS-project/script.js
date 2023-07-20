document.addEventListener("DOMContentLoaded", function () {
	const shopRow = document.querySelector(".row");

	const shopItems = [
		{
			id: "paska1",
			img: "images/paska1.jpg",
			alt: "Paska with strawberry marshamallow",
			name: "Bunny Paska",
			desc: "Strawberry marshamallow spread, covered with dry berries",
			price: "20 $",
		},
		{
			id: "paska2",
			img: "images/paska2.jpg",
			alt: "Chocolate Paska covered with almond flakes",
			name: "Chocolate Paska",
			desc: "Chocolate dough covered with almond flakes",
			price: "25 $",
		},
		{
			id: "paska3",
			img: "images/paska3.jpg",
			alt: "Paska without spread and painted eggs",
			name: "Paska & Eggs set",
			desc: "Vanila flavour, without spread and painted eggs",
			price: "30 $",
		},
		{
			id: "paska4",
			img: "images/paska4.jpg",
			alt: "Cinnamon Paska with the decorative flower",
			name: "Cinnamon Paska",
			desc: "Cinnamon filling with the decorative flower",
			price: "15 $",
		},
	];

	let generateShop = () => {
		return (shopRow.innerHTML = shopItems
			.map((el) => {
				let { id, img, alt, name, desc, price } = el;
				return `<div class="card shop-card col-md-6" >
        <img
            src="${img}"
            class="card-img-top card-image"
            alt="${alt}"
            id="${id}"
        />
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${desc}</p>
            <div class="d-flex align-items-center justify-content-between">
                <p class="card-price p-0 m-0">${price}</p>
                <button type="button" class="btn btn-primary buy-button">Buy</button>
            </div>
            
        </div>
    </div>`;
			})
			.join(""));
	};

	generateShop();

	const buyBtn = document.querySelectorAll(".buy-button");
	const itemCount = document.querySelector(".buy-items");
	const shoppingCartIcon = document.querySelector(".shopping-cart");
    

	buyBtn.forEach((button) => {
		button.addEventListener("click", addItemToCard);
	});

	let count = 0;
	function addItemToCard() {
		// debugger
		count++;	
        changeShopCartDisplay;
		itemCount.innerHTML = count;
        
	}

	function changeShopCartDisplay() {
		// debugger
		if (shoppingCartIcon.style.display === "none")
			shoppingCartIcon.style.display = "block";
	}
});
