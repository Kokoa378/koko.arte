import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/ko.png";

import networkImg from "../assets/images/photo.jpg";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Rapido y seguro",
    imgUrl: featureImg01,
    desc: "",
  },

  {
    title: "Super Rapido",
    imgUrl: featureImg02,
    desc: "",
  },
  {
    title: "facil y preguntar",
    imgUrl: featureImg03,
    desc: " ",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Cuentos");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Artesania"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "CHROCHE") {
      const filteredProducts = products.filter(
        (item) => item.category === "Chroche"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Ilustraciones"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "CUENTOS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cuentos"
      );

      
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="mb-4 hero__title">
                <h1 className="mb-4 hero__title">
                     <span>  </span>¡Bienvenidos a nuestra casa!,
                  <span>  ¿En qué podemos servirles?</span>
                </h1>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                 
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                     
                    </span>{" "}
                  
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                     
                    </span>{" "}
                  
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={"https://github.com/rolandoto/kokoa/blob/master/Productos/Artesan%C3%ADas/IMG_5811-min-removebg-preview.png?raw=true"} alt="hero-img" className="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Lo que servimos</h5>
              <h2 className="feature__title">Solo siéntate en casa</h2>
              <h2 className="feature__title">
              nosotros nos <span>encargaremos</span>
                </TestimonialSlider>
              </h2>
             
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Productos Populaes</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  Todos
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                 
                  Artesania
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "CHROCHE" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("CHROCHE")}
                >
                  Telas y croche
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  Ilustraciones
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "CUENTOS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("CUENTOS")}
                >
                  Cuentos y Novelas
                </button>
              </div>
            </Col>

            {allProducts?.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-1001" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Quienes <span>Somos en Kokoa</span>
                </h2>
                <p className="tasty__treat-desc">
                Recuerdo aquellas campanitas hechas en lentejuelas de colores para adornar el árbol decembrino, recuerdo los angelitos blancos embellecidos con arabescos dorados, recuerdo las velas de cartón decoradas con parafina y mirellas plateadas, recuerdo la felicidad cuando hice mi primer dibujo en lápiz y cuando hice mi primera ilustración digital, recuerdo a mi madre en cada una de esas etapas y siento que éste gran espacio está dedicado a ella, porque aquí se contemplarán  nuestras obras y tal vez con ellas adornaremos el árbol de vuestras vidas, con sueños llenos de color, armonía y amor.
Kokoa.Arte es una tienda virtual diseñada para mostrar las piezas artísticas que realizamos con amor y resiliencia, pero también es el gran hogar que albergará nuestra energía vital, compuesta de bellos momentos y amor hacia el universo. 
Mi nombre es Jhonathan, aunque algunos me conocen con el seudónimo de Kokoa ¡Y quiero invitarles a mi hogar!

                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Nuevo arte
                    </p>
                    <p className="choose__us-desc">
                      Nuevo fututo
                    </p>
                  </ListGroupItem>
                  

                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Cuentos</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonio</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
