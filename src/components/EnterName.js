import { useDispatch } from 'react-redux';
import { useState } from 'react';


export const EnterName = (props) => {
    let [username, setUserName] = useState('')
    const dispatch = useDispatch();

    let handleFieldChange = (event) => {
        setUserName(event.target.value)
    }

    const handleOnSubmit = () => {
        dispatch({ type: 'ENTER_NAME', username: username });
        props.history.push("/productlist");
    }

    return (
        <div>
            <h1>What is your name?</h1>
            <div>Enter Your Name
                <input
                    id="username"
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={handleFieldChange} />

                <button type="button" id='next'
                    onClick={handleOnSubmit}>Next</button>
            </div>

        </div>
    );
};

