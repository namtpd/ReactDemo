import { useSelector, useDispatch } from 'react-redux';

export const ProductList = (props) => {
    const username = useSelector(state => state.username);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    let addProduct = (e) => {

        props.history.push("/addproductnumber");
    }
    const removeHandler = (e) => {
        dispatch({ type: 'REMOVE_PRODUCT', productnumber: e.target.value });

        e.preventDefault();
    }


    return (
        <div>
            <h1>Product List</h1>
            <div>
                User:  &nbsp; <span id="usernameText">{username}</span>
            </div>
            <table border="1px">
                <tbody>
                    <tr>
                        <td>Product Number</td>
                        <td>
                            Name
                        </td>
                        <td>
                            Price
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    {
                        products.map(x => (
                            <tr>
                                <td>
                                    {x.productnumber}
                                </td>
                                <td>
                                {x.name}

                                </td>
                                <td>
                                    {x.price}
                                </td>
                                <td>
                                    <button id="remove" value={x.productnumber} onClick={removeHandler} >Remove</button>
                                </td>
                            </tr>
                        ))
                    }

                    <tr>
                        <td colSpan={4}>
                            <button id="login" type="button" onClick={addProduct}>Add New Product</button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
};

