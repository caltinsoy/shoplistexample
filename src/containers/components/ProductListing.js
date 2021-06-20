import React, { useEffect } from "react"; // useCallback, useMemo
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import {GET_PRODUCTS} from '../../redux/saga/index';

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products); // useSelector allows to use globalized state !
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`${GET_PRODUCTS}`)
      .catch((err) => {
        console.log("Error: ", err);
      });
    dispatch(setProducts(response.data)); //allows to call actions!
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
