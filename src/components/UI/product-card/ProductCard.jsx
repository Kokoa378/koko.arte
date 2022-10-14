import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    alert("Agregado")
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  const link ="https://api.whatsapp.com/send/?phone=573005642130&text=Bienvenido%20a%20nuestra%20casa%20kokoa.%20Arte%20%C2%BFEn%20qu%C3%A9%20podemos%20ayudarle?"


  return (
    <div className="product__item">
      <div className="product__img">
      <Link to={`/foods/${id}`}>
        <img src={image01} alt="product-img" className="w-50" />
        </Link>
      </div>
     
        
      <div className="product__content">
        <h5>
          {title}
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Agregar al carrito
          </button>
          
        </div>
        
        <a href={`${link}`} target="_blank" className="sapp"     >
        <button className="addTOCart__btne" >
              whatsapp
              </button>
        </a>
         
      </div>
    </div>
  );
};

export default ProductCard;
