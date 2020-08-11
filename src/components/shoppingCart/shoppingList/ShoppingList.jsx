import React from 'react';
import {useSelector} from 'react-redux';
import ProductCard from '../../layout/productCard/ProductCard';
import { Container ,Row } from 'react-bootstrap';
import './style.scss';

export default function ShoppingList() {

    const productsData = useSelector((state) => state.getProductData);
    return (
        <div className = "shoppingListItemContainer">
            <Row>
            {productsData.map((info , index) => <ProductCard info={info} index={index} />)}
            </Row>
        </div>
    )
}
