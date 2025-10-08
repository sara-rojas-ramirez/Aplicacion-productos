// Productos
let products = [
    [{
  "id": 1,
  "name": "Energy Protein Bars",
  "price": "$468.65M",
  "categoria": "Food - Snacks",
  "stock": 17
}, {
  "id": 2,
  "name": "Silicone Stretch Lids",
  "price": "$49.63B",
  "categoria": "Kitchen",
  "stock": 51
}, {
  "id": 3,
  "name": "Waterproof Rain Boots",
  "price": "$6.3B",
  "categoria": "Clothing - Footwear",
  "stock": 35
}, {
  "id": 4,
  "name": "Vegetable Chips",
  "price": "$1.35B",
  "categoria": "Food - Snacks",
  "stock": 12
}, {
  "id": 5,
  "name": "Portable Solar Camp Shower",
  "price": "$6.7B",
  "categoria": "Outdoor",
  "stock": 56
}, {
  "id": 6,
  "name": "Organic Quinoa",
  "price": "$477.6M",
  "categoria": "Food - Grains",
  "stock": 63
}, {
  "id": 7,
  "name": "Dog Car Seat Cover",
  "price": "$605.93M",
  "categoria": "Pets",
  "stock": 66
}, {
  "id": 8,
  "name": "Carrot Sticks",
  "price": "$13.02M",
  "categoria": "Food - Produce",
  "stock": 84
}, {
  "id": 9,
  "name": "Sweet and Spicy Barbecue Sauce",
  "price": "$32.96B",
  "categoria": "Food - Condiments",
  "stock": 29
}, {
  "id": 10,
  "name": "Electric Heating Pad",
  "price": "n/a",
  "categoria": "Health",
  "stock": 11
}, {
  "id": 11,
  "name": "Sporty Leggings",
  "price": "$47.92M",
  "categoria": "Clothing - Activewear",
  "stock": 43
}, {
  "id": 12,
  "name": "Chili Lime Shrimp",
  "price": "n/a",
  "categoria": "Food - Seafood",
  "stock": 36
}, {
  "id": 13,
  "name": "Baby Monitor",
  "price": "$72.13M",
  "categoria": "Baby",
  "stock": 25
}, {
  "id": 14,
  "name": "Organic Tomato Ketchup",
  "price": "n/a",
  "categoria": "Food - Condiments",
  "stock": 34
}, {
  "id": 15,
  "name": "Spinach Pizza Rolls",
  "price": "$93.02M",
  "categoria": "Food - Frozen Foods",
  "stock": 98
}, {
  "id": 16,
  "name": "Buttermilk Pancakes",
  "price": "$2.64B",
  "categoria": "Food - Breakfast",
  "stock": 77
}, {
  "id": 17,
  "name": "Computer Monitor Stand",
  "price": "$320.19M",
  "categoria": "Office",
  "stock": 32
}, {
  "id": 18,
  "name": "Beach Cover-Up",
  "price": "$81.19M",
  "categoria": "Clothing - Swimwear",
  "stock": 48
}, {
  "id": 19,
  "name": "Cotton Sweatpants",
  "price": "$741.77B",
  "categoria": "Clothing - Bottoms",
  "stock": 35
}, {
  "id": 20,
  "name": "Compact Hair Dryer",
  "price": "$1.21B",
  "categoria": "Beauty",
  "stock": 43
}, {
  "id": 21,
  "name": "Honey Mustard Chicken Breasts",
  "price": "$9.73B",
  "categoria": "Food - Meat",
  "stock": 17
}, {
  "id": 22,
  "name": "Laundry Detergent",
  "price": "$1.55B",
  "categoria": "Food - Household",
  "stock": 91
}, {
  "id": 23,
  "name": "Graphic Tee",
  "price": "$7.81B",
  "categoria": "Clothing",
  "stock": 27
}, {
  "id": 24,
  "name": "Vegetable Quinoa Bowl",
  "price": "$95.04M",
  "categoria": "Food - Frozen Meals",
  "stock": 88
}, {
  "id": 25,
  "name": "Protein Bar Variety Pack",
  "price": "n/a",
  "categoria": "Food - Snacks",
  "stock": 75
}, {
  "id": 26,
  "name": "Compressible Packing Cubes",
  "price": "n/a",
  "categoria": "Travel",
  "stock": 14
}, {
  "id": 27,
  "name": "Chickpea Salad Deluxe",
  "price": "$9.44B",
  "categoria": "Food - Produce",
  "stock": 95
}, {
  "id": 28,
  "name": "Gluten-Free Bread",
  "price": "$1.11B",
  "categoria": "Food - Bakery",
  "stock": 23
}, {
  "id": 29,
  "name": "Chipotle Seasoning Blend",
  "price": "$8.43B",
  "categoria": "Food - Spices",
  "stock": 25
}, {
  "id": 30,
  "name": "Vanilla Bean Greek Yogurt",
  "price": "$180.27M",
  "categoria": "Food - Dairy",
  "stock": 41
}, {
  "id": 31,
  "name": "Aged White Cheddar Popcorn",
  "price": "$68.03M",
  "categoria": "Food - Snacks",
  "stock": 27
}, {
  "id": 32,
  "name": "Peach Green Tea",
  "price": "$2.25B",
  "categoria": "Food - Beverages",
  "stock": 93
}, {
  "id": 33,
  "name": "Sriracha Chili Sauce",
  "price": "$57.31M",
  "categoria": "Food - Condiments",
  "stock": 78
}, {
  "id": 34,
  "name": "Tahini",
  "price": "$431.8M",
  "categoria": "Food - Condiments",
  "stock": 34
}, {
  "id": 35,
  "name": "Frozen Mixed Vegetables",
  "price": "n/a",
  "categoria": "Food - Frozen",
  "stock": 15
}, {
  "id": 36,
  "name": "Plant Watering Spikes",
  "price": "$13.86B",
  "categoria": "Garden",
  "stock": 56
}, {
  "id": 37,
  "name": "Spicy BBQ Sauce",
  "price": "$99.71M",
  "categoria": "Food - Condiments",
  "stock": 56
}, {
  "id": 38,
  "name": "Puzzle 3D Model Kit",
  "price": "$1.87B",
  "categoria": "Toys",
  "stock": 56
}, {
  "id": 39,
  "name": "Vegetarian Chili",
  "price": "$452.92M",
  "categoria": "Food - Canned Goods",
  "stock": 62
}, {
  "id": 40,
  "name": "Sous Vide Cooker",
  "price": "$12.41B",
  "categoria": "Kitchen",
  "stock": 62
}, {
  "id": 41,
  "name": "Travel Jewelry Organizer",
  "price": "$63.73B",
  "categoria": "Accessories",
  "stock": 60
}, {
  "id": 42,
  "name": "Honey Sesame Cashews",
  "price": "$215.85M",
  "categoria": "Food - Snacks",
  "stock": 73
}, {
  "id": 43,
  "name": "Magnetic Spice Jars",
  "price": "$108.87B",
  "categoria": "Kitchen",
  "stock": 11
}, {
  "id": 44,
  "name": "Rechargeable Laptop Battery Pack",
  "price": "n/a",
  "categoria": "Electronics",
  "stock": 48
}, {
  "id": 45,
  "name": "Air Fryer Oven",
  "price": "$9.12M",
  "categoria": "Kitchen",
  "stock": 10
}, {
  "id": 46,
  "name": "Electric Ice Cream Maker",
  "price": "$185.53B",
  "categoria": "Kitchen",
  "stock": 88
}, {
  "id": 47,
  "name": "Brussels Sprouts",
  "price": "$5.53B",
  "categoria": "Food - Produce",
  "stock": 13
}, {
  "id": 48,
  "name": "Pesto Pasta Salad",
  "price": "$19.89B",
  "categoria": "Food - Prepared Foods",
  "stock": 83
}, {
  "id": 49,
  "name": "Chocolate Hazelnut Granola",
  "price": "$208.28M",
  "categoria": "Food - Cereal",
  "stock": 52
}, {
  "id": 50,
  "name": "Avocados",
  "price": "$3.3B",
  "categoria": "Food - Produce",
  "stock": 54
}, {
  "id": 51,
  "name": "Athletic Compression Tights",
  "price": "$106.49M",
  "categoria": "Clothing - Activewear",
  "stock": 54
}, {
  "id": 52,
  "name": "Portable Projector",
  "price": "$392.16M",
  "categoria": "Electronics",
  "stock": 29
}, {
  "id": 53,
  "name": "Solar String Lights",
  "price": "$1.83B",
  "categoria": "Outdoor",
  "stock": 32
}, {
  "id": 54,
  "name": "Pumpkin Puree",
  "price": "$2.46B",
  "categoria": "Food - Canned Goods",
  "stock": 40
}, {
  "id": 55,
  "name": "Hot Salsa",
  "price": "$890M",
  "categoria": "Food - Dips",
  "stock": 99
}, {
  "id": 56,
  "name": "Canned Sardines",
  "price": "$505.59M",
  "categoria": "Food - Seafood",
  "stock": 61
}, {
  "id": 57,
  "name": "Kids' Activity Book",
  "price": "$53.16B",
  "categoria": "Books",
  "stock": 21
}, {
  "id": 58,
  "name": "Vegan Chocolate Cake Mix",
  "price": "$1.65B",
  "categoria": "Food - Baking",
  "stock": 23
}, {
  "id": 59,
  "name": "Rechargeable Hand Warmer",
  "price": "$3.93B",
  "categoria": "Accessories",
  "stock": 84
}, {
  "id": 60,
  "name": "Lemonade Mix",
  "price": "$847.46M",
  "categoria": "Food - Beverages",
  "stock": 54
}, {
  "id": 61,
  "name": "Fleece Throw Blanket",
  "price": "$330M",
  "categoria": "Home",
  "stock": 72
}, {
  "id": 62,
  "name": "Falafel Mix",
  "price": "$643.63M",
  "categoria": "Food - Baking & Cooking",
  "stock": 20
}, {
  "id": 63,
  "name": "Plaid Flannel Shirt",
  "price": "$16.53M",
  "categoria": "Clothing - Tops",
  "stock": 65
}, {
  "id": 64,
  "name": "Mesh Sports Leggings",
  "price": "$487.29M",
  "categoria": "Clothing - Activewear",
  "stock": 52
}, {
  "id": 65,
  "name": "Kids' STEM Robotics Kit",
  "price": "$1.28B",
  "categoria": "Toys",
  "stock": 22
}, {
  "id": 66,
  "name": "Electric Meat Grinder",
  "price": "$147.55M",
  "categoria": "Kitchen",
  "stock": 75
}, {
  "id": 67,
  "name": "Marinated Artichokes",
  "price": "$293.39M",
  "categoria": "Food - Vegetables",
  "stock": 43
}, {
  "id": 68,
  "name": "Silicone Stretch Lids",
  "price": "$2B",
  "categoria": "Kitchen",
  "stock": 29
}, {
  "id": 69,
  "name": "Almond Coconut Granola",
  "price": "$3.27B",
  "categoria": "Food - Breakfast Foods",
  "stock": 89
}, {
  "id": 70,
  "name": "Maple Cinnamon Almonds",
  "price": "$1.6B",
  "categoria": "Food - Nuts",
  "stock": 78
}, {
  "id": 71,
  "name": "Honey BBQ Ribs",
  "price": "$594.95M",
  "categoria": "Food - Meat",
  "stock": 47
}, {
  "id": 72,
  "name": "Maple Glazed Carrots",
  "price": "$1.75B",
  "categoria": "Food - Prepared Foods",
  "stock": 64
}, {
  "id": 73,
  "name": "Magnetic Phone Case",
  "price": "$559.9M",
  "categoria": "Accessories",
  "stock": 50
}, {
  "id": 74,
  "name": "Knitted Infinity Scarf",
  "price": "$1.07B",
  "categoria": "Clothing - Accessories",
  "stock": 26
}, {
  "id": 75,
  "name": "Ice Cream",
  "price": "$349.22M",
  "categoria": "Food - Frozen Foods",
  "stock": 34
}, {
  "id": 76,
  "name": "Fitness Jump Rope with LCD Counter",
  "price": "$8.55B",
  "categoria": "Fitness",
  "stock": 87
}, {
  "id": 77,
  "name": "Couscous Mix",
  "price": "$673.15M",
  "categoria": "Food - Grains",
  "stock": 61
}, {
  "id": 78,
  "name": "Under Desk Footrest",
  "price": "$7.72B",
  "categoria": "Office",
  "stock": 39
}, {
  "id": 79,
  "name": "Golf Putting Green",
  "price": "$7.7M",
  "categoria": "Sports",
  "stock": 96
}, {
  "id": 80,
  "name": "Classic Black Dress",
  "price": "$408.55M",
  "categoria": "Clothing - Dresses",
  "stock": 49
}, {
  "id": 81,
  "name": "Dried Mango Slices",
  "price": "$188.28M",
  "categoria": "Food - Snacks",
  "stock": 18
}, {
  "id": 82,
  "name": "Feta Cheese",
  "price": "$13.01M",
  "categoria": "Food - Dairy",
  "stock": 92
}, {
  "id": 83,
  "name": "Electric Skillet",
  "price": "$538.84M",
  "categoria": "Kitchen",
  "stock": 82
}, {
  "id": 84,
  "name": "Smartphone Projector Kit",
  "price": "$1.15B",
  "categoria": "Electronics",
  "stock": 42
}, {
  "id": 85,
  "name": "Grilled Veggie Burgers",
  "price": "$36.8M",
  "categoria": "Food - Meat Alternatives",
  "stock": 91
}, {
  "id": 86,
  "name": "Fitness Tracker Band",
  "price": "$13.02M",
  "categoria": "Fitness",
  "stock": 53
}, {
  "id": 87,
  "name": "Premium Flashlight",
  "price": "$3.72B",
  "categoria": "Outdoor",
  "stock": 64
}, {
  "id": 88,
  "name": "Vegetarian Stir Fry Sauce",
  "price": "n/a",
  "categoria": "Food - Condiments",
  "stock": 41
}, {
  "id": 89,
  "name": "Pretzel Bites",
  "price": "$5.99B",
  "categoria": "Food - Snacks",
  "stock": 92
}, {
  "id": 90,
  "name": "Children's Musical Instrument Set",
  "price": "$165.47M",
  "categoria": "Toys",
  "stock": 68
}, {
  "id": 91,
  "name": "Snap-On Tupperware Set",
  "price": "$282.94M",
  "categoria": "Kitchen",
  "stock": 53
}, {
  "id": 92,
  "name": "Halloween Decoration Set",
  "price": "$68.38M",
  "categoria": "Home",
  "stock": 93
}, {
  "id": 93,
  "name": "Honey Garlic Sauce",
  "price": "$38.81B",
  "categoria": "Food - Sauces",
  "stock": 14
}, {
  "id": 94,
  "name": "Chocolate Chip Muffins",
  "price": "$43.29B",
  "categoria": "Food - Bakery",
  "stock": 64
}, {
  "id": 95,
  "name": "Rice Pilaf Mix",
  "price": "$234.26M",
  "categoria": "Food - Grains",
  "stock": 35
}, {
  "id": 96,
  "name": "Brownie Bites",
  "price": "$59.69M",
  "categoria": "Food - Baked Goods",
  "stock": 51
}, {
  "id": 97,
  "name": "Foot Massager",
  "price": "$21.8M",
  "categoria": "Health",
  "stock": 65
}, {
  "id": 98,
  "name": "Soft Plush Throw Blanket",
  "price": "$6.59B",
  "categoria": "Home",
  "stock": 74
}, {
  "id": 99,
  "name": "Arcade Game Machine",
  "price": "$1.25M",
  "categoria": "Gaming",
  "stock": 71
}, {
  "id": 100,
  "name": "Fettuccine Alfredo Dinner Kit",
  "price": "$6.01B",
  "categoria": "Food - Prepared Meals",
  "stock": 69
}]
]

module.exports = products;