import { useSelector } from 'react-redux';
import { useState } from 'react';

export const AddProductNumber = (props) => {
    const username = useSelector(state => state.username);
    const cleanproduct = { productnumber: "", name: "", price: "" };
    const [product, setProduct] = useState(cleanproduct);

    let handleFieldChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    let addProduct = (e) => {
        props.history.push("/addproductname", { product: product });
    }


    return (
        <div>
            <h1>Enter Product Number</h1>
            <div>
                Username:  &nbsp; {username}
            </div>
            <div>
                Product Number:  <input
                    type="text"
                    placeholder="productnumber"
                    name="productnumber"
                    value={product.productnumber}
                    onChange={handleFieldChange} />
            </div>
            <div><button id="next" type="button" onClick={addProduct}>Next</button></div>
        </div>
    );
};

