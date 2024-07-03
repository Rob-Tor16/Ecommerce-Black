const products = [
    { 
        id:1,
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/150/152/products/4f04999d-1d57-4666-9e7a-6a450a5dca641-d219776e456d40025f16825346283177-320-0.webp",
        nombre:"Polera Annie Red #SATANA",
        stock:10,
        categoria:"Sweaters",
        precio: 8300,
    },
    {   
        id:2,
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/150/152/products/bc900b71-a615-42eb-bcb8-30c77eb622931-eb22147b4c3a9f899316825339285395-320-0.webp",
        nombre:"Remera Unisex Tradicional #SATANA",
        stock:20,
        categoria:"Remeras",
        precio:7500,
    },
        
    {   
        id:3,
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/150/152/products/img_54751-b1afad67240b1e868c16761536941618-320-0.webp",
        nombre:"Hoddie Oversize Unisex World",
        stock:10,
        categoria:"Buzos",
        precio:12900,
    },
    {
        id:4,
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/473/033/products/img-20230331-wa00311-a381ea7b13ef10ebdd16802905346937-320-0.webp",
        nombre:"Pantalón Cargo Sky Escoces",
        stock:10,
        categoria:"Pantalones",
        precio:14800
    },
    {
        id:5,
        imagen:"https://d22fxaf9t8d39k.cloudfront.net/f11e27f360a75552e6ff5061ce76618697c2b702f6a109ab6df727c4624e39d1170000.jpeg",
        nombre:"Top spiderweb",
        stock:10,
        categoria:"Tops",
        precio:3600
    },
    {
        id:6,
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/150/152/products/photo-output41-de81ac845c796f86ac16681059347632-320-0.jpg",
        nombre:"Top 90S Bullets Gris",
        stock:10,
        categoria:"Tops",
        precio:3700
    },
    {
        id:7,
        imagen:"https://http2.mlstatic.com/D_NQ_NP_831177-MLA54239553429_032023-O.webp",
        nombre:"Pollera Victoriana Rayada Pink",
        stock:10,
        categoria:"Polleras",
        precio:5200
    },
    {
        id:8,
        imagen:"https://d22fxaf9t8d39k.cloudfront.net/16879746422776bb8fe25a8f24bf1629840557880fa76dc2a85035c8d5a9dd10170000.jpeg",
        nombre:"Shiny skull Top",
        stock:10,
        categoria:"Tops",
        precio:2500
    },
    {
        id:9,
        imagen:"https://http2.mlstatic.com/D_NQ_NP_745450-MLA54037172647_022023-O.webp",
        nombre:"Swater corto Snake Dark",
        stock:10,
        categoria:"Sweaters",
        precio:4200
    },
    {
        id:10,
        imagen:"https://d22fxaf9t8d39k.cloudfront.net/0546a6dd59c9656a3ea82564c84b780e5cd03828489c12c4a15551c2664bb883170000.jpeg",
        nombre:"Tank Top Til Death",
        stock:10,
        categoria:"Tops",
        precio:4200
    },
    {
        id:11,
        imagen:"https://d22fxaf9t8d39k.cloudfront.net/e26c1d7e88e4be39463a992cb591cc6390c382e8b84fc40ecc39607bf42f8322170000.jpeg",
        nombre:"Relicario libro cruz",
        stock:10,
        categoria:"Accesorios",
        precio:3700  
    },
    {
        id:12,
        imagen:"https://d22fxaf9t8d39k.cloudfront.net/7531465e2092364156cd8debc18a24c44312ff13d48e498b5cc099ad4209e487170000.jpg",
        nombre:"Stripped Sweater",
        stock:10,
        categoria:"Sweaters",
        precio:9000
    },
    {
        id:13,
        imagen:"https://m.media-amazon.com/images/I/613QzlwUB-S._AC_UY1000_.jpg",
        nombre:"Falda negra Plisada",
        stock:10,
        categoria:"Polleras",
        precio:9000
    },
    {
        id:14,
        imagen:"https://d22fxaf9t8d39k.cloudfront.net/0b3d2d39f9e6d76dfa7cf8588fad6c8374adf094f72cc81b4717160d0811ee22170000.jpeg",
        nombre:"Top Juicy",
        stock:10,
        categoria:"Tops",
        precio:3600
    },
    {
        id:15,
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/473/033/products/img-20230321-wa00371-4399909e1f12da7d3d16794221054424-320-0.webp",
        nombre:"Buzo STN",
        stock:10,
        categoria:"Buzos",
        precio:16000
    },
    {
        id:16,
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/150/152/products/3fcef6cb-e15e-4273-8bd4-c02e173155f61-b4c45175119e2c176416782028868980-640-0.webp",
        nombre:"Remra unisex manga larga Joey #SATANA",
        stock:10,
        categoria:"Remeras",
        precio:3600
    },
    {
        id:17,
        imagen:"https://d22fxaf9t8d39k.cloudfront.net/d103faa67fda59df17acc545f502b5d8867cd6ffef0b4d1cdc6a1564d032fc9b170000.jpeg",
        nombre:"Collar Cruz",
        stock:10,
        categoria:"Accesorios",
        precio:1200
    },
    {
        id:18,
        imagen:"https://www-s.mlo.me/upen/v/2021/202107/20210714/202107141046188798561.jpg",
        nombre:"Falda gótica Roja Patrón a cuadros",
        stock:10,
        categoria:"Polleras",
        precio:9200
    },
    {
        id:19,
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/473/033/products/img-20220721-wa0038-09d0606caf9d35e7f816584275600195-320-0.webp",
        nombre:"Jogger Kirby",
        stock:10,
        categoria:"Pantalones",
        precio:8400
    },
    {   
        id:20,      
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/473/033/products/img-20221116-wa00121-55ec25dc682224585716686145160098-480-0.webp",
        nombre:"Remeron School #SATANA",
        stock:10,
        categoria:"Remeras",
        precio:6600
    },
    {
        id:21,
        imagen:"https://i.pinimg.com/originals/af/7e/e1/af7ee117e58ad117c936881766262aa8.jpg",
        nombre:"Gothic Punk Rock Leather Choker",
        stock:10,
        categoria:"Accesorios",
        precio:1440
    },
    {
        id:22,
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/473/033/products/img-20221020-wa0043-016f86f15d2e43e26716662940733752-480-0.webp",
        nombre:"Remeron World",
        stock:10,
        categoria:"Remeras",
        precio:6000
    }  
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
     })
}