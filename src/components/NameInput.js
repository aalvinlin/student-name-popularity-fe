import React from "react";
import { render } from "react-dom";

const NameInput = () => {

    render(
        <form name="name_input">
            <input name="user_name"></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NameInput;