// backend/data/mockData.js
const products = [
    {
        name: "Chanel No. 5",
        shortDescription: "The iconic floral aldehyde fragrance.",
        description: "A timeless, legendary fragrance, Chanel No. 5 is an abstract floral bouquet composed around May Rose and Jasmine, brightened by citrus top notes. Aldehydes create a unique presence, while the smooth touch of Bourbon Vanilla leaves an incredibly sensual trail.",
        price: 108.00,
        images: [
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fscentira.in%2Fproducts%2Fchanel-no-5-eau-de-parfum&psig=AOvVaw0AwS9yykaZqk-NRPwG7cy3&ust=1748733652599000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjrqNKqzI0DFQAAAAAdAAAAABAE",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chanel.com%2Fin%2Ffragrance%2Fwomen%2Fc%2F7x1x1x30%2Fn5%2F&psig=AOvVaw0AwS9yykaZqk-NRPwG7cy3&ust=1748733652599000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjrqNKqzI0DFQAAAAAdAAAAABAL",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.co.in%2Fproduct%2F3OF71U0-chanel-no-5-eau-de-parfum-spray-perfume-for-women-3-4-oz-100-ml&psig=AOvVaw0AwS9yykaZqk-NRPwG7cy3&ust=1748733652599000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjrqNKqzI0DFQAAAAAdAAAAABAS"
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
            "https://eco-beauty.dior.com/dw/image/v2/BDQL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dwbddc9806/pdb/F0%20Sauvage%20EDT%20PDP%20100ml%20F051724009-GLOBAL.png?sw=1024&sh=1024&sm=fit&sfrm=png",
            "https://www.dior.com/on/demandware.static/-/Sites-master_dior/default/dw5905a426/Y0517240/Y0517240_C051700009_E01_ZHC.jpg",
            "https://m.media-amazon.com/images/I/51KXiOSBEeL.jpg"
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
            "https://creedfragrances.co.uk/cdn/shop/files/CREED_MILLERHARRIS_AVENTUS_100ML_LIFESTYLE_1_1.jpg?v=1714377576&width=1080",
            "https://www.creedfragrances.co.uk/cdn/shop/products/Aventus100ml_1_1_600x.jpg?v=1669721269",
            "https://media.creedfragrance.com/wysiwyg/AVENTUS_FORHIM_100ML_PACKSHOT.png"
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
            "https://www.tomford.com/dw/image/v2/BBBS_PRD/on/demandware.static/-/Sites-master-catalog/default/dw88a06f45/images/hi-res/T0-01-0001_TFBEAUTY_BLACKORCHID_EDP_100ML_A.jpg?sw=800&sh=800&sm=fit",
            "https://www.tomford.co.uk/media/export/cms/spp/t001/T001_PORTRAIT.jpg",
            "https://m.media-amazon.com/images/I/61UaN8yqf0L.jpg"
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
            "https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dwc2eb3a8c/Fragrance/WW-50002YSL/3365440787919_Black_Opium_EDP_90ml.jpg?sw=420&sh=420&sm=fit&q=70",
            "https://www.yslbeauty.ca/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw68a2058e/PDP-SKU/Fragrance/WW-50002YSL/BLACK_OPIUM_EDP_ALT1.jpg?sw=800&sh=800&sm=fit",
            "https://images.ulta.com/is/image/Ulta/2289273"
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
            "https://www.chanel.com/images/w_0.51,h_0.51,c_crop/q_auto,w_800,f_auto/w_auto,f_auto,q_auto:best/BOITEDECORHOMMEFRAGRANCE18BLEUDECHANELEAUDEPARFUMSPRAY100MLPACKSHOTSTANDARD-TRANSPARENT.jpg",
            "https://www.chanel.com/us/img/prd-fl/sys-master/content/P1/h94/h71/9785228558366-97852284600629785228427294BDC_EDP_SP_100ML_LC_SLD_RGB_OS.jpg",
            "https://m.media-amazon.com/images/I/51g1oK8G7HL.jpg"
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
            "https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-master-catalog/default/dw0c9a1f36/Products/fragrance/la_vie_est_belle/00460-LAC/LVEB_EDP_Bottle_100ML_US.jpg?sw=420&sh=420&sm=fit&q=70",
            "https://www.lancome.co.uk/on/demandware.static/-/Sites-lancome-master-catalog/default/dw599356b5/new-packshots/Fragrance/La-Vie-Est-Belle/3605532612690_La_Vie_Est_Belle_EDP_30ml_packshot.jpg",
            "https://images.ulta.com/is/image/Ulta/2249022"
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
            "https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-armani-master-catalog/default/dw99598049/Products/Fragrance/Acquadigio/A004/ADG_EDT_100ML_3360372058878_packshot.jpg?sw=420&sh=420&sm=fit&q=70",
            "https://www.giorgioarmanibeauty.co.uk/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-gac-master-catalog/default/dw0d6c1e16/products/A004_Armani_ADG_EDT_100ML_3360372058878/Armani_ADG_EDT_100ML_3360372058878_Silo.png?sw=600&sh=600&sm=fit&q=70",
            "https://m.media-amazon.com/images/I/61M5bQ9BwLL.jpg"
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
            "https://media.gucci.com/style/Transparent_Center_0_0_500x500/1502979004/488830_99999_0099_001_100_0000_Light-Gucci-Bloom-100ml-eau-de-parfum.png",
            "https://www.gucci.com/us/en/pr/beauty/fragrances/fragrances-for-women/gucci-bloom-eau-de-parfum-for-her/gucci-bloom-100ml-eau-de-parfum-p-488830999990099", // This is a page, try to find image
            "https://images.ulta.com/is/image/Ulta/2524242"
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
            "https://www.pacorabanne.com/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-paco-master-catalog/default/dwf91971f6/images/zoom/10000000_135001_FRT.png?sw=800&sh=800&sm=fit",
            "https://www.pacorabanne.com/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-paco-master-catalog/default/dw572cf076/images/10000000_135001_OPEN.png?sw=800&sh=800&sm=fit",
            "https://m.media-amazon.com/images/I/61yJgE0dDVL.jpg"
        ],
        sizes: ["50ml", "100ml", "200ml"],
        category: "Men"
    }
];

const reviews = [
    // ... (keep your existing reviews or add new ones if needed)
];

module.exports = { products, reviews };