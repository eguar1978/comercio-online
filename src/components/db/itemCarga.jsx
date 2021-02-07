require("firebase/firestore");

const firebase = require("firebase");

const db = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "coderhouse-c848e.firebaseapp.com",
  projectId: "coderhouse-c848e",
  storageBucket: "coderhouse-c848e.appspot.com",
  messagingSenderId: "326882340927",
  appId: "1:326882340927:web:7b5bfef9f64b2cbacf088a",
  measurementId: "G-32SLZJ2RP0"
}).firestore();

const data = [
        {
          "nombre": "Reloj Curren SP1",
          "categoria": "dama",
          "stock": 10,
          "descripcion":
              "Relojes CURREN reloj de marca de lujo para hombres reloj de pulsera de cuarzo militar para hombres reloj de pulsera de acero completo para buceo 30m reloj Casual relogio masculino",
          "precio": 37,
          "imagen": "./../images/1.jpg",
          "thumbnail": "./../images/thumbnail/1.jpg"
      },{
          "nombre": "Reloj Curren SP2",
          "categoria": "caballero",
          "stock": 13,
          "descripcion":
            "Relojes de cuarzo CURREN para hombres, relojes de pulsera militares de lujo de primera marca, reloj deportivo de acero completo para hombres, reloj impermeable",
          "precio": 50,
          "imagen": "./../images/2.jpg",
          "thumbnail": "./../images/thumbnail/2.jpg"
      },{
          "nombre": "Reloj Curren SP3",
          "categoria": "caballero",
          "stock": 16,
          "descripcion":
            "Relojes CURREN reloj de marca de lujo para hombres reloj de pulsera de cuarzo militar para hombres reloj de pulsera de acero completo para buceo 30m reloj Casual relogio masculino",
          "precio": 38,
          "imagen": "./../images/3.jpg",
          "thumbnail": "./../images/thumbnail/3.jpg"
      },{
          "nombre": "Reloj Curren SP4",
          "categoria": "caballero",
          "stock": 11,
          "descripcion":
            "Relojes CURREN reloj de marca de lujo para hombres reloj de pulsera de cuarzo militar para hombres reloj de pulsera de acero completo para buceo 30m reloj Casual relogio masculino",
          "precio": 38,
          "imagen": "./../images/4.jpg",
          "thumbnail": "./../images/thumbnail/4.jpg"
      },{
          "nombre": "Reloj Curren SP5",
          "categoria": "caballero",
          "stock": 10,
          "descripcion":
            "Relojes CURREN reloj de marca de lujo para hombres reloj de pulsera de cuarzo militar para hombres reloj de pulsera de acero completo para buceo 30m reloj Casual relogio masculino",
          "precio": 47,
          "imagen": "./../images/5.jpg",
          "thumbnail": "./../images/thumbnail/5.jpg"
      },{
          "nombre": "Reloj Curren SP6",
          "categoria": "caballero",
          "stock": 7,
          "descripcion":
            "Relojes de cuarzo CURREN para hombres, relojes de pulsera militares de lujo de primera marca, reloj deportivo de acero completo para hombres, reloj impermeable",
          "precio": 57,
          "imagen": "./../images/6.jpg",
          "thumbnail": "./../images/thumbnail/6.jpg"
      },{
          "nombre": "Reloj Curren SP7",
          "categoria": "caballero",
          "stock": 12,
          "descripcion":
            "Relojes de cuarzo CURREN para hombres, relojes de pulsera militares de lujo de primera marca, reloj deportivo de acero completo para hombres, reloj impermeable",
          "precio": 62,
          "imagen": "./../images/7.jpg",
          "thumbnail": "./../images/thumbnail/7.jpg"
      },{
          "nombre": "Reloj Curren SP8",
          "categoria": "dama",
          "stock": 14,
          "descripcion":
            "Relojes CURREN para mujer reloj de pulsera de cuarzo con diamantes de imitación de lujo con cuero elegante reloj de moda para mujer",
          "precio": 42,
          "imagen": "./../images/8.jpg",
          "thumbnail": "./../images/thumbnail/8.jpg"
      },{
          "nombre": "Reloj Curren SP9",
          "categoria": "dama",
          "stock": 15,
          "descripcion":
            "Relojes CURREN para mujer reloj de pulsera de cuarzo con diamantes de imitación de lujo con cuero elegante reloj de moda para mujer",
          "precio": 42,
          "imagen": "./../images/9.jpg",
          "thumbnail": "./../images/thumbnail/9.jpg"
      },{
          "nombre": "Reloj Curren SP10",
          "categoria": "caballero",
          "stock": 16,
          "descripcion":
            "Relojes CURREN reloj de marca de lujo para hombres reloj de pulsera de cuarzo militar para hombres reloj de pulsera de acero completo para buceo 30m reloj Casual relogio masculino",
          "precio": 33,
          "imagen": "./../images/10.jpg",
          "thumbnail": "./../images/thumbnail/10.jpg"
      },{
          "nombre": "Reloj Curren SP11",
          "categoria": "caballero",
          "stock": 11,
          "descripcion":
            "Reloj Curren para hombre 2019, reloj de pulsera de cuarzo de lujo para hombre, reloj de acero inoxidable, relojes creativos de Hombre de plata 2019",
          "precio": 37,
          "imagen": "./../images/11.jpg",
          "thumbnail": "./../images/thumbnail/11.jpg"
      },{
          "nombre": "Reloj Curren SP12",
          "categoria": "caballero",
          "stock": 10,
          "descripcion":
            "Reloj CURREN para hombre, cronógrafo de la mejor marca, relojes para hombre con cuero militar, reloj de pulsera impermeable, reloj analógico de cuarzo para hombre",
          "precio": 48,
          "imagen": "./../images/12.jpg",
          "thumbnail": "./../images/thumbnail/12.jpg"
      },{
          "nombre": "Reloj Curren SP13",
          "categoria": "dama",
          "stock": 18,
          "descripcion":
            "Relojes CURREN para mujer reloj de pulsera de cuarzo con diamantes de imitación de lujo con cuero elegante reloj de moda para mujer",
          "precio": 44,
          "imagen": "./../images/13.jpg",
          "thumbnail": "./../images/thumbnail/13.jpg"
      },{
          "nombre": "Reloj Curren SP14",
          "categoria": "caballero",
          "stock": 5,
          "descripcion":
            "Relojes CURREN reloj de marca de lujo para hombres reloj de pulsera de cuarzo militar para hombres reloj de pulsera de acero completo para buceo 30m reloj Casual relogio masculino",
          "precio": 28,
          "imagen": "./../images/14.jpg",
          "thumbnail": "./../images/thumbnail/14.jpg"
      },{
          "nombre": "Reloj Curren SP15",
          "categoria": "dama",
          "stock": 9,
          "descripcion":
              "Relojes CURREN reloj de marca de lujo para hombres reloj de pulsera de cuarzo militar para hombres reloj de pulsera de acero completo para buceo 30m reloj Casual relogio masculino",
          "precio": 31,
          "imagen": "./../images/15.jpg",
          "thumbnail": "./../images/thumbnail/15.jpg"
      },{
          "nombre": "Reloj Curren SP16",
          "categoria": "caballero",
          "stock": 12,
          "descripcion":
            "Relojes de cuarzo CURREN para hombres, relojes de pulsera militares de lujo de primera marca, reloj deportivo de acero completo para hombres, reloj impermeable",
          "precio": 39,
          "imagen": "./../images/16.jpg",
          "thumbnail": "./../images/thumbnail/16.jpg"
      },{
          "nombre": "Reloj Curren SP17",
          "categoria": "caballero",
          "stock": 14,
          "descripcion":
            "Relojes de cuarzo CURREN para hombres, relojes de pulsera militares de lujo de primera marca, reloj deportivo de acero completo para hombres, reloj impermeable",
          "precio": 39,
          "imagen": "./../images/17.jpg",
          "thumbnail": "./../images/thumbnail/17.jpg"
      },{
          "nombre": "Reloj Curren SP18",
          "categoria": "caballero",
          "stock": 7,
          "descripcion":
            "Reloj CURREN para hombre, cronógrafo de la mejor marca, relojes para hombre con cuero militar, reloj de pulsera impermeable, reloj analógico de cuarzo para hombre",
          "precio": 42,
          "imagen": "./../images/18.jpg",
          "thumbnail": "./../images/thumbnail/18.jpg"
      },{
          "nombre": "Reloj Curren SP19",
          "categoria": "dama",
          "stock": 11,
          "descripcion":
            "Relojes CURREN simples para mujer, relojes de pulsera de cuarzo ultrafinos de marca superior de lujo, relojes de plata para mujer, reloj femenino",
          "precio": 38,
          "imagen": "./../images/19.jpg",
          "thumbnail": "./../images/thumbnail/19.jpg"
      },{
          "nombre": "Reloj Curren SP20",
          "categoria": "dama",
          "stock": 18,
          "descripcion":
            "Relojes CURREN simples para mujer, relojes de pulsera de cuarzo ultrafinos de marca superior de lujo, relojes de plata para mujer, reloj femenino",
          "precio": 35,
          "imagen": "./../images/20.jpg",
          "thumbnail": "./../images/thumbnail/20.jpg"
      },
    ];

data.forEach(product => {
    db.collection("products").add({
        nombre: product.nombre, 
        categoria: product.categoria,
        stock: product.stock,
        descripcion: product.descripcion,
        precio: product.precio,
        imagen: product.imagen,
        thumbnail: product.thumbnail
    }).then(docRef => {
        console.log("Producto registrado con ID: ", docRef.id);
    }).catch(error => {
        console.error("Error al agregar un documento: ", error);
    })
})