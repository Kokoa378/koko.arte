import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import {MenuItems, products} from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import {useParams} from "react-router-dom"

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {

  const {id} = useParams()

  const [isMainData, setMainData] = useState(
    products.filter((element) => element.category == id)
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);
  const [detail,setDetail] = useState(null)



  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const setData = (itemId) => {
    setMainData(products.filter((element) => element.category == itemId));
    setDetail(itemId)
  };


  

  return (
    <Helmet title="Ecommerce">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Productos Populaes</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                {MenuItems.map(index  => (
                   <button
                   className={`d-flex align-items-center gap-2 ${
                    index.category==detail? "foodBtnActive" : ""
                   } `}
                   onClick={() => setData(index.category)}>
                    {index.name}
                 </button>
                ))}

               
              </div>
            </Col>

            {isMainData?.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
