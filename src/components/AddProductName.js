import { useSelector } from 'react-redux';
import { useState } from 'react';

export const AddProductName = (props) => {
    const username = useSelector(state => state.username);
    const [product, setProduct] = useState(props.location.state.product)

    let handleFieldChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    let addProduct = (e) => {
        props.history.push("/addproductprice", { product: product });
    }


    return (
        <div>
            <h1>Enter Product Number</h1>
            <div>
                User:  &nbsp; <span id="usernameText">{username}</span>
            </div>
            <div>
                Product Number:  &nbsp; {product.productnumber}
            </div>
            <div>
                Product Name:  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={product.name}
                    onChange={handleFieldChange} />
            </div>
            <div>
                <button id="next" type="button" onClick={addProduct}>Next</button>
            </div>

        </div>
    );
};

