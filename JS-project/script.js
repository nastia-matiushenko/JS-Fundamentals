document.addEventListener("DOMContentLoaded", function () {
	const shopRow = document.querySelector(".row");
	const cartIcon = document.querySelector(".buy-items");
	const searchButton = document.querySelector(".search-btn");

	const shopItems = [
		{
			id: "paska1",
			img: "images/paska1.jpg",
			alt: "Paska with strawberry marshamallow",
			name: "Bunny Paska",
			desc: "Marshamallow cover, strawberry mouss and dried cranberries",
			price: 20,
		},
		{
			id: "paska2",
			img: "images/paska2.jpg",
			alt: "Chocolate Paska covered with almond flakes",
			name: "Sweet Nest Paska",
			desc: "Chocolate dough covered with almond flakes and two eatable nests",
			price: 25,
		},
		{
			id: "paska3",
			img: "images/paska3.jpg",
			alt: "Paska without spread and painted eggs",
			name: "Paska & Eggs set",
			desc: "Vanila filling, crusty cover and set of painted eggs",
			price: 30,
		},
		{
			id: "paska4",
			img: "images/paska4.jpg",
			alt: "Cinnamon Paska with the decorative flower",
			name: "Cinnamon Paska",
			desc: "Cinnamon filling, raisins, blueberries, decorated with flowers",
			price: 20,
		},
		{
			id: "paska5",
			img: "images/paska5.jpg",
			alt: "Choco Paska with decorative red ribbon",
			name: "Chocomoco Paska",
			desc: "Chocolate glaze, choco drops and decorative red ribbon",
			price: 25,
		},
		{
			id: "paska6",
			img: "images/paska6.jpg",
			alt: "Cinnamon Paska with the decorative flower",
			name: "Wedding Paska",
			desc: "Dried fruits in and out, used almond flour and covered with meringue",
			price: 35,
		},
	];

	let generateShop = (productsToRender = shopItems) => {
		shopRow.innerHTML = productsToRender
			.map((el) => {
				let { id, img, alt, name, desc, price } = el;
				return `<div class="card shop-card col-md-4" >
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
                <strong class="card-price p-0 m-0">$${price}</strong>
                <button
					id="${id}"
					type="button"
					class="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
					>
					Buy
				</button>
            </div>
            
        </div>
    </div>`;
			})
			.join("");
	};

	generateShop();

	function removeCartItem(event) {
		const buttonClicked = event?.target;

		const removeBtnId = buttonClicked?.dataset?.id;

		const cart = getItemFromLocaleStorage();

		if (!removeBtnId || !cart) return;

		const paskaIndex = cart.findIndex((el) => el.id === removeBtnId);

		if (paskaIndex !== undefined) {
			cart.splice(paskaIndex, 1);
		}
		setItemToLocaleStorage(cart);
		renderFullCart();
	}

	function addListenersForQuantity() {
		const quantityInputs = document.querySelectorAll(
			".main-row-quantity-input"
		);

		quantityInputs.forEach((el) => {
			el.addEventListener("change", changeLocalStorageQuantity);
		});

		const removeItemButtons = document.querySelectorAll(".btn-danger");

		removeItemButtons.forEach((el) => {
			el.addEventListener("click", removeCartItem);
		});
	}

	const buyButtons = document.querySelectorAll(".btn-primary");
	buyButtons.forEach((button) => {
		button.addEventListener("click", addPaskaToLocalStorage);
	});

	function addPaskaToLocalStorage(event) {
		const paskaId = event.target.id;

		const paskaObj = shopItems.find((obj) => obj.id === paskaId);

		const cart = getItemFromLocaleStorage();

		const existingProduct = cart.find((p) => p.id === paskaObj.id);

		if (existingProduct) {
			existingProduct.quantity++;
		} else {
			paskaObj["quantity"] = 1;
			cart.push(paskaObj);
		}

		setItemToLocaleStorage(cart);
		renderFullCart();
	}

	function changeLocalStorageQuantity(event) {
		const target = event?.target;
		const paskaId = target?.dataset?.id;
		const newQuantity = target?.value;

		if (!paskaId || !newQuantity) return;

		const cart = getItemFromLocaleStorage();

		const found = cart.find((p) => p.id === paskaId);

		if (!found) return;

		found.quantity = +newQuantity;

		setItemToLocaleStorage(cart);
		calculateTotal();
		renderCartIconQuantity();
	}

	function setItemToLocaleStorage(cart) {
		if (!cart) return;
		localStorage.setItem("cart", JSON.stringify(cart));
	}

	function getItemFromLocaleStorage() {
		return JSON.parse(localStorage.getItem("cart")) || [];
	}

	function renderCart() {
		const cart = getItemFromLocaleStorage();
		const cartElement = document.getElementById("cart");

		if (!cartElement) return;

		let html = cart
			.map((product) => {
				const { img, name, price, quantity, id } = product;

				return `
			<div class="main-row mt-3 d-flex flex-row justify-content-between align-items-center">
								<div class="main-row-item">
									<img class="main-row-item-picture" src="${img}" width="50px" height="50px">
									<span class="main-row-item-name">${name}</span>
								</div>
								<div class="main-row-price">
									<span class="main-row-price-amount">$${price}</span>
								</div>
								<class class="main-row-quantity">
								<input type="number" class="main-row-quantity-input" data-id="${id}" value="${quantity}" min="1"/>
								<button class="btn btn-danger" data-id="${id}" type="button">REMOVE</button>
								</class>
							</div>
			`;
			})
			.join("");

		const emptyCartHtml = `<div class="text-center">No chosen products...</div>`;

		cartElement.innerHTML = html || emptyCartHtml;

		addListenersForQuantity();
	}

	function calculateTotal() {
		const cart = getItemFromLocaleStorage();

		const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
		document.querySelector("#cart-total").innerHTML = "$" + total;
	}

	function renderCartIconQuantity() {
		const cart = getItemFromLocaleStorage();
		const totalQuantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);
		cartIcon.innerHTML = totalQuantity;
	}
	renderCartIconQuantity();

	function renderFullCart() {
		calculateTotal();
		renderCart();
		renderCartIconQuantity();
	}

	const form = document.forms.creationForm;

	form.onsubmit = (event) => {
		event.preventDefault();
	};

	searchButton.addEventListener("click", searchMatchedWord);

	function searchMatchedWord() {
		const searchInput = document.querySelector(".form-control");

		const searchedText = searchInput.value.toLowerCase();

		let matchedCards = shopItems.filter((el) => {
			return el.desc.toLowerCase().includes(searchedText);
		});

		generateShop(matchedCards);
	}

	function showCartModal() {
		$(".shopping-cart").click(() => {
			renderFullCart();
			$(".modal").modal("show");
		});
	}
	showCartModal();
});
