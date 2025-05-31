// backend/data/mockData.js
const products = [
    {
        name: "Chanel No. 5",
        shortDescription: "The iconic floral aldehyde fragrance.",
        description: "A timeless, legendary fragrance, Chanel No. 5 is an abstract floral bouquet composed around May Rose and Jasmine, brightened by citrus top notes. Aldehydes create a unique presence, while the smooth touch of Bourbon Vanilla leaves an incredibly sensual trail.",
        price: 108.00,
        images: [
                        "/images/CHANNEL_MODEL.jpg",

               "/images/chanel3.jpg", 
            "/images/channelmain.jpg",
            "/images/CHANNEL_MODEL.jpg",
                  // CORRECTED
                   // CORRECTED (verify actual filename case)
        ],
        sizes: ["50ml", "100ml", "200ml"],
        category: "Women"
    },
    {
        name: "Dior Sauvage",
        shortDescription: "A radically fresh composition.",
        description: "Raw and noble, Dior Sauvage is inspired by wide-open spaces. An ozone blue sky sprawled above a rocky landscape, white-hot beneath the desert sun. Calabrian bergamot, as juicy and spirited as ever, invites new spicy notes to add fullness and sensuality.",
        price: 95.00,
        images: [
              "/images/diorsavuagemain.jpg", 
            "/images/savauge3.jpg",
            "/images/savaugedior2.jpg",
        ],
        sizes: ["60ml", "100ml", "200ml"],
        category: "Men"
    },
    {

        name: "Creed Aventus",
        shortDescription: "A sophisticated blend for success.",
        description: "The exceptional Aventus was inspired by the dramatic life of a historic emperor, celebrating strength, power and success. Introduced in 2010, this scent has grown to become the best-selling fragrance in the history of the brand.",
        price: 435.00,
        images: [
            "/images/31.jpg", 
            "/images/32.jpg",
            "/images/33.jpg",
        ],
        sizes: ["50ml", "100ml"],
        category: "Men"
    },
    {

        name: "Tom Ford Black Orchid",
        shortDescription: "Luxurious and sensual dark accords.",
        description: "Tom Ford Black Orchid is a rich blend of spice and darkness to revolve around you, to be closer, and closer to you. Unleash its perfect power - both rare and extraordinary.",
        price: 150.00,
         images: [
            "/images/41.jpg", 
            "/images/42.jpg",
            "/images/43.jpg",
        ],
      
        sizes: ["50ml", "100ml"],
        category: "Unisex"
    },
    {

        name: "YSL Black Opium",
        shortDescription: "Captivating floral gourmand scent.",
        description: "Feminine, sensual, and thrilling. Black Opium Eau de Parfum is a modern, young, and vibrant interpretation of addiction. The fragrance is a contrast between light and dark, featuring notes of black coffee, white flowers, and vanilla.",
        price: 120.00,
         images: [
            "/images/51.jpg", 
            "/images/52.jpg",
            "/images/53.jpg",
        ],
        sizes: ["30ml", "50ml", "90ml"],
        category: "Women"
    },
    // --- Adding 5 more products ---
    {

        name: "Bleu de Chanel",
        shortDescription: "Aromatic-woody, powerfully captivating.",
        description: "An ode to masculine freedom expressed in an aromatic-woody fragrance with a captivating trail. A timeless scent housed in a bottle of deep and mysterious blue. BLEU DE CHANEL is the fragrance of a man who refuses to be bound by rules.",
        price: 115.00,
         images: [
            "/images/611.jpg", 
            "/images/62.jpg",
            "/images/63.jpg",
        ],
        sizes: ["50ml", "100ml", "150ml"],
        category: "Men"
    },
    {

        name: "Lancôme La Vie Est Belle",
        shortDescription: "An ode to happiness; sweet iris.",
        description: "La Vie Est Belle, a French expression meaning 'life is beautiful,' is about choosing your own path to happiness and inspiring others. Joyful femininity is expressed through this energizing women's perfume.",
        price: 102.00,
         images: [
            "/images/71.jpg", 
            "/images/72.jpg",
            "/images/73.jpg",
        ],
        sizes: ["30ml", "50ml", "100ml"],
        category: "Women"
    },
    {

        name: "Giorgio Armani Acqua di Giò",
        shortDescription: "Fresh aquatic, symbol of masculinity.",
        description: "Acqua di Giò Eau de Toilette is the iconic men's fragrance inspired by the Mediterranean. This aquatic, hyacinth fragrance opens with a splash of fresh, Calabrian bergamot, neroli, and green tangerine.",
        price: 90.00,
        images: [
            "/images/81.jpg", 
            "/images/82.jpg",
            "/images/83.jpg",
        ],
        sizes: ["50ml", "100ml", "200ml"],
        category: "Men"
    },
    {

        name: "Gucci Bloom",
        shortDescription: "Rich white floral, transporting.",
        description: "Gucci Bloom Eau de Parfum is a rich white floral scent that transports to a verdant garden. Notes of natural Tuberose and Jasmine create an unexpectedly rich white floral scent on the skin.",
        price: 110.00,
         images: [
            "/images/91.jpg", 
            "/images/92.jpg",
            "/images/93.jpg",
        ],
        sizes: ["30ml", "50ml", "100ml"],
        category: "Women"
    },
    {

        name: "Paco Rabanne 1 Million",
        shortDescription: "Spicy leather, audaciously masculine.",
        description: "1 Million Eau de Toilette is an audaciously masculine fragrance for the man who dares to be too much. This iconic scent features notes of spicy leather, blood mandarin, and peppermint.",
        price: 85.00,
         images: [
            "/images/12.jpg", 
            "/images/11.jpg",
            "/images/13.jpg",
        ],
        sizes: ["50ml", "100ml", "200ml"],
        category: "Men"
    }
];

const reviews = [
    // ... (keep your existing reviews or add new ones if needed)
];

module.exports = { products, reviews };