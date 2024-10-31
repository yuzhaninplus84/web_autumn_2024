// dishes.js

const dishes = [
    // Soups
    { name: "СУП ФО-БО", price: 450, weight: "450 мл", image: "soup1.jpg", category: "soup", dataDish: "phobo", kind: "meat" },
    { name: "СУП ФО ГА", price: 450, weight: "450 мл", image: "soup2.jpg", category: "soup", dataDish: "phoga", kind: "meat" },
    { name: "Томатный суп", price: 550, weight: "550 мл", image: "soup3.jpg", category: "soup", dataDish: "buntom", kind: "fish" },
    { name: "ТОМ ЯМ", price: 550, weight: "550 мл", image: "soup4.jpg", category: "soup", dataDish: "tomyam", kind: "fish" },
    { name: "Суп «Восемь сокровищ»", price: 550, weight: "550 мл", image: "soup5.jpg", category: "soup", dataDish: "batbao", kind: "vege" },
    { name: "Суп из семян лотоса", price: 550, weight: "550 мл", image: "soup6.jpg", category: "soup", dataDish: "hatsen", kind: "vege" },
    { name: "Грибной суп", price: 550, weight: "550 мл", image: "soup7.jpg", category: "soup", dataDish: "nam", kind: "vege" },
    // Salads
    { name: "НОМ ГА с курицей", price: 350, weight: "350 мг", image: "salad1.jpg", category: "salad", dataDish: "nomga", kind: "meat" },
    { name: "ГОЙ БО БОП ТХАУ с говядиной", price: 400, weight: "400 мг", image: "salad2.jpg", category: "salad", dataDish: "goibo", kind: "meat" },
    { name: "САЛАТ ХОАЙ ТОМ", price: 400, weight: "400 мг", image: "salad3.jpg", category: "salad", dataDish: "xoaitom", kind: "fish" },
    { name: "Салат из виноградных водорослей", price: 400, weight: "400 мг", image: "salad7.jpg", category: "salad", dataDish: "rong", kind: "vege" },
    { name: "Вегетарианские вонтоны", price: 400, weight: "400 мг", image: "salad8.jpg", category: "salad", dataDish: "hoanhthanh", kind: "vege" },
    { name: "Роллы из морских водорослей", price: 400, weight: "400 мг", image: "salad9.jpg", category: "salad", dataDish: "charong", kind: "vege" },
    // Main dishes
    { name: "БУН ЧОН (с говядиной)", price: 550, weight: "550 мг", image: "main1.jpg", category: "main", dataDish: "buntron", kind: "meat" },
    { name: "КОМ ДУЙ ГА РАН", price: 550, weight: "550 мг", image: "main2.jpg", category: "main", dataDish: "comdui", kind: "meat" },
    { name: "КОМ ТОМ ШОТ ТХАЙ", price: 550, weight: "550 мг", image: "main3.jpg", category: "main", dataDish: "comtom", kind: "fish" },
    { name: "НЕМ (голубцы по ханойски)", price: 450, weight: "450 мг", image: "main4.jpg", category: "main", dataDish: "nem", kind: "meat" },
    { name: "КОМРАНГ с говядиной", price: 450, weight: "450 мг", image: "main5.jpg", category: "main", dataDish: "comrang", kind: "meat" },
    { name: "БУН ЧА", price: 550, weight: "550 мг", image: "main6.jpg", category: "main", dataDish: "buncha", kind: "meat" },
    { name: "Рис с семенами лотоса", price: 550, weight: "550 мг", image: "main7.jpg", category: "main", dataDish: "comsen", kind: "vege" },
    { name: "Грибная лапша", price: 550, weight: "550 мг", image: "main8.jpg", category: "main", dataDish: "minam", kind: "vege" },
    // Drinks
    { name: "ВЬЕТНАМСКИЙ ЧАЙ ЗАВАРНОЙ черный/зеленый (чашка)", price: 70, weight: "70 мл", image: "drink1.jpg", category: "drink", dataDish: "tra", kind: "hot" },
    { name: "ВЬЕТНАМСКИЙ КОФЕ ЧЕРНЫЙ", price: 180, weight: "180 мл", image: "drink2.jpg", category: "drink", dataDish: "cafeden", kind: "hot" },
    { name: "ВЬЕТНАМСКИЙ КОФЕ ЧЕРНЫЙ СО СГУЩЕННЫМ МОЛОКОМ", price: 180, weight: "180 мл", image: "drink3.jpg", category: "drink", dataDish: "cafesua", kind: "hot" },
    { name: "СВЕЖЕВЫЖАТЫЙ СОК МАНГО", price: 450, weight: "450 мл", image: "drink4.jpg", category: "drink", dataDish: "stxoai", kind: "cold" },
    { name: "СВЕЖЕВЫЖАТЫЙ СОК МАРАКУЙИ", price: 450, weight: "450 мл", image: "drink5.jpg", category: "drink", dataDish: "stleo", kind: "cold" },
    { name: "СВЕЖЕВЫЖАТЫЙ СОК АНАНАСА", price: 450, weight: "450 мл", image: "drink6.jpg", category: "drink", dataDish: "stdua", kind: "cold" },
    // Desserts
    { name: "Бисквитный торт", price: 450, weight: "450 мл", image: "des1.jpg", category: "dessert", dataDish: "bonglan", kind: "big" },
    { name: "Соленый креповый пирог", price: 450, weight: "450 мл", image: "des2.jpg", category: "dessert", dataDish: "crepe", kind: "small" },
    { name: "Пончики со вкусом лета", price: 450, weight: "450 мл", image: "des3.jpg", category: "dessert", dataDish: "banhran", kind: "small" },
    { name: "Миндальный хлеб", price: 450, weight: "450 мл", image: "des4.jpg", category: "dessert", dataDish: "banhmi", kind: "medium" },
    { name: "Шоколадно-банановые маффины", price: 450, weight: "450 мл", image: "des5.jpg", category: "dessert", dataDish: "banhit", kind: "medium" },
    { name: "Бань Ит Чан", price: 450, weight: "450 мл", image: "des6.jpg", category: "dessert", dataDish: "stdua", kind: "big" },
    { name: "Вьетнамские блины", price: 450, weight: "450 мл", image: "des7.jpg", category: "dessert", dataDish: "banhxeo", kind: "small" },
];

// script.js
let currentFilter = null; // Track the current filter

function displayDishes() {
    const categories = {};
    const uniqueKinds = {};

    // Sort dishes alphabetically within each category
    dishes.sort((a, b) => a.name.localeCompare(b.name));

    // Group dishes by category and collect unique kinds
    dishes.forEach(dish => {
        if (!categories[dish.category]) {
            categories[dish.category] = [];
        }
        categories[dish.category].push(dish);
        
        if (!uniqueKinds[dish.category]) {
            uniqueKinds[dish.category] = new Set();
        }
        uniqueKinds[dish.category].add(dish.kind);
    });

    // Create HTML for each category with filter buttons
    for (const [category, items] of Object.entries(categories)) {
        const section = document.createElement('section');
        const header = document.createElement('h2');

        // Set category titles in Russian
        const categoryTitles = {
            soups: 'Супы',
            salads: 'Салаты',
            mains: 'Основные блюда',
            desserts: 'Десерты',
            drinks: 'Напитки',
            combos: 'Комбо'
        };
        header.textContent = categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1);

        // header.textContent = category === 'soup' ? 'Супы' :
        // category === 'salad' ? 'Салаты' :
        // category === 'main' ? 'Основные блюда' :
        // category === 'drink' ? 'Напитки' :
        // category === 'dessert' ? 'Десерты' : '';

        section.appendChild(header);

        // Create filter buttons for the current category
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filter-buttons';

        uniqueKinds[category].forEach(kind => {
            // Set filter button texts in Russian
            const kindTitles = {
                meat: 'Мясные',
                fish: 'Рыбные',
                vege: 'Вегетарианские',
                hot: 'Горячие',
                cold: 'Холодные',
                big: 'Большие',
                small: 'Маленькие',
                medium: 'Средние'
            };
            const buttonText = kindTitles[kind] || kind.charAt(0).toUpperCase() + kind.slice(1);
            const kindButton = createFilterButton(buttonText, kind, category);
            kindButton.className = 'filter';
            filterContainer.appendChild(kindButton);
        });

        section.appendChild(filterContainer);

        const grid = document.createElement('div');
        grid.className = "dish-grid";

        items.forEach(item => {
            const dishDiv = document.createElement('div');
            dishDiv.className = "dish";
            dishDiv.setAttribute("data-dish", item.dataDish);
            dishDiv.setAttribute("data-kind", item.kind); // Store kind in the dish element
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            
            const price = document.createElement('p');
            price.className = "price";
            price.textContent = `${item.price} ₽`;
            
            const dishName = document.createElement('p');
            dishName.className = "dish-name";
            dishName.textContent = item.name;

            const weight = document.createElement('p');
            weight.className = "dish-weight";
            weight.textContent = item.weight;

            const button = document.createElement('button');
            button.className = "add-to-cart";
            button.textContent = "Добавить";
            button.onclick = () => addToOrder(item);
            
            // Prevent button style from changing on filter
            button.style.transition = 'none'; // Disable transitions if needed

            dishDiv.appendChild(img);
            dishDiv.appendChild(price);
            dishDiv.appendChild(dishName);
            dishDiv.appendChild(weight);
            dishDiv.appendChild(button);
            grid.appendChild(dishDiv);
        });

        section.appendChild(grid);
        document.body.appendChild(section);
    }
}

function createFilterButton(text, kind, category) {
    const button = document.createElement('button');
    button.className = 'filter-btn';
    button.textContent = text;
    button.setAttribute('data-kind', kind);
    button.onclick = () => handleFilterClick(kind, category);
    return button;
}

function handleFilterClick(kind, category) {
    if (currentFilter === kind) {
        // If the same filter is clicked again, show all dishes in that category
        currentFilter = null;
        showAllDishes(category);
    } else {
        currentFilter = kind;
        filterDishes(category, kind);
    }
}

function filterDishes(category, kind) {
    const categorySection = Array.from(document.querySelectorAll('section'))
        .find(section => section.querySelector('h2').textContent.toLowerCase() === category);

    const allDishes = categorySection.querySelectorAll('.dish'); // Get dishes only from the specific category

    allDishes.forEach(dish => {
        const dishKind = dish.getAttribute('data-kind'); // Get the kind from the dish element

        if (dishKind === kind) {
            dish.style.display = 'block'; // Show matching dishes
        } else {
            dish.style.display = 'none'; // Hide non-matching dishes
        }
    });
}

function showAllDishes(category) {
    const categorySection = Array.from(document.querySelectorAll('section'))
        .find(section => section.querySelector('h2').textContent.toLowerCase() === category);

    const allDishes = categorySection.querySelectorAll('.dish');
    allDishes.forEach(dish => {
        dish.style.display = 'block'; // Show all dishes in the category
    });
}

function addToOrder(item) {
    const orderContainer = document.getElementById("order");
    const dishCategory = item.category + "s"; // e.g., "soups"
    const categoryDiv = document.getElementById(dishCategory);
    
    // Clear existing message if there is one
    const existingMessage = categoryDiv.querySelector("p");
    if (existingMessage) {
        existingMessage.remove();
    }

    const dishDiv = document.createElement('div');
    dishDiv.textContent = `${item.name} - ${item.price} ₽`;
    categoryDiv.appendChild(dishDiv);
    
    updateTotalPrice();
}

// Initialize the dish display
displayDishes();

// Giỏ hàng
const cart = [];
let totalPrice = 0;

// Hàm thêm món vào giỏ hàng
function addToCart(name, price) {
    document.getElementById('order').style.display = 'block';
    document.getElementById('no-dishes').style.display = 'none';
    cart.push({ name: name, price: price });
    totalPrice += price;
    updateCart();
}

// Cập nhật giỏ hàng hiển thị
function updateCart() {
    // Cập nhật tổng tiền
    document.getElementById('total-price').textContent = `${totalPrice} ₽`;
}

// Tìm tất cả các nút "Добавить" và thêm sự kiện cho chúng
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        // Lấy thông tin tên món và giá từ các phần tử tương ứng
        const dishName = button.previousElementSibling.previousElementSibling.textContent;
        const dishPrice = parseInt(button.previousElementSibling.textContent.replace(' ₽', ''));

        // Gọi hàm thêm vào giỏ hàng
        addToCart(dishName, dishPrice);
    });
});

// Giữ màu khi nút được bấm
document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                filters.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});
