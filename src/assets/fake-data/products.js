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
 * Telas y croche
 * Pinturas
 */



const products = [
  {
    id: "01",
    title: "Posillo para el amor",
    price: 30.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123136_618-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123156_073-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123137_953-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Ancheta en forma de posillo con unas hermosas letras diseñadas en porselanicrón",
  },

  {
    id: "02",
    title: "Botellas de navidad",
    price: 30.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123855_063-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123909_266-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_124517_527-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Botellas de vidrio recicladas, adornadas con un hermoso papá noel en porcelanicrón",
  },

  {
    id: "03",
    title: "Botellas de Navidad: muñeco de nieve",
    price: 50.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_125004_887-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_125002_365-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_125000_837-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Botellas de vidrio recicladas, adornadas con un hermoso muñeco de nieve en porcelanicrón",
  },

  {
    id: "04",
    title: "Pintura en estuco ",
    price: 130.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_115344_809-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_115627_200-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_121009_418-removebg-preview.png?raw=true",
    category: "Pinturas",
    disp:"3",
    desc: "Pintura realizada en plantilla de estuco",
  },

  {
    id: "05",
    title: "Figuritas en Acrílico",
    price: 3.500,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123540_343.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123604_836-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_123619_718-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"3",
    desc: "Llaveros de ángeles realizados en acrílico",
  },
  {
    id: "06",
    title: "Papá noel en tela y lana",
    price: 17.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0660-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0661-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0664-removebg-preview.png?raw=true",
    category: "Telas y croche",
    disp:"3",
    desc: "Hermosos papá Noels hechos en lana y tela",
  },

  {
    id: "07",
    title: "Pesebres Navideños: Tela y Porcelanicrón",
    price: 25.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122253_672-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122416_023-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122553_492-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"3",
    desc: "Hermosos pesebres hechos en tela y porcelanicrón",
  },

  {
    id: "08",
    title: "Pesebres Navideños: Tela y Porcelanicrón",
    price: 25.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0653-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0651-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/IMG_0650-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"3",
    desc: "Hermosos pesebres hechos en tela y porcelanicrón",
  },

  {
    id: "09",
    title: "Tejas Dicembrinas",
    price: 60.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122730_994-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122726_076-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122713_924-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Hermosas tejas de barro con diseños dicembrinos hechos en porcelanicrón",
  },

  {
    id: "10",
    title: "Tejas Dicembrinas",
    price: 50.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122854_093-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122855_638-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_122909_167-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"1",
    desc: "Hermosas teja de barro que exhibe un lindo pecebre hecho en porcelanicrón",
  },

  {
    id: "11",
    title: "Muñeca para baño",
    price: 35.0,
    image01: "https://github.com/rolandoto/kokoa/blob/master/Productos/Telas,%20lanas%20y%20croch%C3%A9/FDZF3105-removebg-preview.png?raw=true",
    image02: "https://github.com/rolandoto/kokoa/blob/master/Productos/Telas,%20lanas%20y%20croch%C3%A9/FDZF3105-removebg-preview.png?raw=true",
    image03: "https://github.com/rolandoto/kokoa/blob/master/Productos/Telas,%20lanas%20y%20croch%C3%A9/FDZF3105-removebg-preview.png?raw=true",
    category: "Telas y croche",
    disp:"1",
    desc: "Muñeca para baño realizada con tela de toalla, porcelanicrón, algodón y madera.",
    },
  
  
  {
    id: "12",
    title: "Cuadros en cáscara he huevo",
    price: 80.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_120714_335-removebg-preview.png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_120147_933-removebg-preview.png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/DJI_20221001_120200_714-removebg-preview.png?raw=true",
    category: "Artesania",
    disp:"3",
    desc: "Tres hermosos cuadros realizados con cáscaras de huevo, porcelanicrón y anilinas naturales",
  },
  
   {
    id: "13",
    title: "Muñeca para baño: Tradición",
    price: 80.000,
    image01: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/Mi%20proyecto%20(7).png?raw=true",
    image02: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/Mi%20proyecto%20(8).png?raw=true",
    image03: "https://github.com/Kokoa378/imaganes-kokoat/blob/main/Mi%20proyecto%20(9).png?raw=true",
    category: "Telas y Croche",
    disp:"1",
    desc: "Hermosa muñeca para baño hecha en tela, con un maravilloso diseño que expone la tradición antioqueña",
  },
];

export default products;
