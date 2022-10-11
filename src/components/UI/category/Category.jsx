import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Artesania",
    imgUrl: "",
  },
  {
    display: "Telas y croche",
    imgUrl:"" ,
  },

  {
    display: "Ilustraciones",
    imgUrl: "",
  },

  {
    display: "Cuentos y novelas",
    imgUrl: "",
  },
];




const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <Link to="/foods" className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
              </div>
              <h6>{item.display}</h6>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
