import React from "react";
import { render } from "react-dom";

const ClassInput = () => {

    render(
        <form name="class_input">
            <input name="user_class"></input>
            <button type="submit">Add students</button>
        </form>
    );
}

export default ClassInput;