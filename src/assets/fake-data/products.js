// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

/**
 * Cuentos
 * Artesania
 * Ilustraciones
 * Chroche
 * Pinturas
 */


 const MenuItems = [
  
  {
    id: 1,
    itemId: "buger01",
    name: "Todos",
    category: "Cuentos",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
  },
  {
    id: 2,
    itemId: "pizza01",
    name: "Artesania",
    category: "Artesania",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizzaslice.png?alt=media&token=c91c0c7e-ffa9-41be-ba84-c3b45c79d483",
  },
  {
    id: 3,
    itemId: "hotdog01",
    name: "Ilustraciones",
    category: "Ilustraciones",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
  },
  {
    id: 4,
    itemId: "taco01",
    name: "Chroche",
    category: "Chroche",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
  },
  {
    id: 5,
    itemId: "snack01",
    name: "Pinturas",
    category: "Pinturas",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack1.png?alt=media&token=d670617e-4bfc-4693-aa8c-211db9f9d706",
  },
];



const products = [
  {
    id: "01",
    title: "Posillo para el amor",
    price: 30000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123136_618-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123156_073-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123137_953-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Ancheta en forma de posillo con unas hermosas letras dise??adas en porselanicr??n",
  },

  {
    id: "02",
    title: "Botellas de navidad",
    price: 30000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123855_063-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123909_266-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_124517_527-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Botellas de vidrio recicladas, adornadas con un hermoso pap?? noel en porcelanicr??n",
  },

  {
    id: "03",
    title: "Botellas de Navidad: mu??eco de nieve",
    price: 50000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_125004_887-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_125002_365-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_125000_837-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Botellas de vidrio recicladas, adornadas con un hermoso mu??eco de nieve en porcelanicr??n",
  },

  {
    id: "04",
    title: "Pintura en estuco ",
    price: 130000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_115344_809-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_115627_200-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_121009_418-removebg-preview.png?raw=true",
    category: "Ilustraciones",
    disp:"3",
    desc: "Pintura realizada en plantilla de estuco",
  },

  {
    id: "05",
    title: "Figuritas en Acr??lico",
    price: 3500,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123540_343.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123604_836-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123619_718-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"3",
    desc: "Llaveros de ??ngeles realizados en acr??lico",
  },
  {
    id: "06",
    title: "Pap?? noel en tela y lana",
    price: 17000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0660-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0661-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0664-removebg-preview.png?raw=true",
    category: "Chroche",
    disp:"3",
    desc: "Hermosos pap?? Noels hechos en lana y tela",
  },

  {
    id: "07",
    title: "Pesebres Navide??os: Tela y Porcelanicr??n",
    price: 25000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122253_672-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122416_023-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122553_492-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"3",
    desc: "Hermosos pesebres hechos en tela y porcelanicr??n",
  },

  {
    id: "08",
    title: "Pesebres Navide??os: Tela y Porcelanicr??n",
    price: 25000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0653-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0651-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0650-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"3",
    desc: "Hermosos pesebres hechos en tela y porcelanicr??n",
  },

  {
    id: "09",
    title: "Tejas Dicembrinas",
    price: 60000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122730_994-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122726_076-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122713_924-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Hermosas tejas de barro con dise??os dicembrinos hechos en porcelanicr??n",
  },

  {
    id: "10",
    title: "Tejas Dicembrinas",
    price: 50000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122854_093-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122855_638-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122909_167-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Hermosas teja de barro que exhibe un lindo pecebre hecho en porcelanicr??n",
  },

  {
    id: "11",
    title: "Mu??eca para ba??o",
    price: 30000,
    image01: "https://github.com/rolandoto/kokoa/blob/master/Productos/Telas,%20lanas%20y%20croch%C3%A9/FDZF3105-removebg-preview.png?raw=true",
    image02: "https://github.com/rolandoto/kokoa/blob/master/Productos/Telas,%20lanas%20y%20croch%C3%A9/FDZF3105-removebg-preview.png?raw=true",
    image03: "https://github.com/rolandoto/kokoa/blob/master/Productos/Telas,%20lanas%20y%20croch%C3%A9/FDZF3105-removebg-preview.png?raw=true",
    category: "Chroche",
    disp:"1",
    desc: "Mu??eca para ba??o realizada con tela de toalla, porcelanicr??n, algod??n y madera.",
    },
  
  
  {
    id: "12",
    title: "Cuadros en c??scara he huevo",
    price: 80000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_120714_335-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_120147_933-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_120200_714-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"3",
    desc: "Tres hermosos cuadros realizados con c??scaras de huevo, porcelanicr??n y anilinas naturales",
  },
  
   {
    id: "13",
    title: "Mu??eca para ba??o: Tradici??n",
    price: 35000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/Mi%20proyecto%20(7).png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/Mi%20proyecto%20(8).png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/Mi%20proyecto%20(9).png?raw=true",
    category: "Chroche",
    disp:"1",
    desc: "Hermosa mu??eca para ba??o hecha en tela, con un maravilloso dise??o que expone la tradici??n antioque??a",
  },
  {
    id: "14",
    title: "Florero en c??scara de huevo",
    price: 30000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/Florero%203.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/Florero%202.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/Florero%201.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Hermoso florero realizado en c??scara de huevo",
  },
   {
    id: "15",
    title: "Ilustraci??n digital",
    price: 40000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/Mi%20proyecto.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/3.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/2.png?raw=true",
    category: "Ilustraciones",
    disp:"1",
    desc: "Hermosas ilustraciones digitales, enmarcadas en madera",
  },
];

export {products,MenuItems}
