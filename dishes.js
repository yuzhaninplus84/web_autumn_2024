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