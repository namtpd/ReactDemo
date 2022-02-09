import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export const AddProductPrice = (props) => {
    const username = useSelector(state => state.username);

    const [product, setProduct] = useState(props.location.state.product)

    const dispatch = useDispatch();

    let handleFieldChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    let addProduct = (e) => {
        dispatch({ type: 'ADD_PRODUCT', product: product });
        props.history.push("/productlist", {product: product});
    }


    return (
        <div>
            <h1>Enter Product Number</h1>
            <div>
                Username:  &nbsp; {username}
            </div>
            <div>
                Product Number:  &nbsp; {product.productnumber}
            </div>
            <div>
                Product Name:  &nbsp; {product.name}
            </div>
            <div>
                Product Price:  <input
                    type="text"
                    placeholder="price"
                    name="price"
                    value={product.price}
                    onChange={handleFieldChange} />
            </div>
            <div>
                <button id="login" type="button" onClick={addProduct}>Next</button>
            </div>

        </div>
    );
};

