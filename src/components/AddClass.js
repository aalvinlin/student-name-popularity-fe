import React, { useState } from "react";
import Worksheet from "./Worksheet";

const AddClass = () => {

    let readyToGenerateWorksheet = false;

    let names = useState([]);

    if (readyToGenerateWorksheet)
        {
            return (
                { names.map(name => <Worksheet name={name} />) }
            )
        }

    return (
        
        <>
            <h1>Add Class</h1>

            <form name="class_input">
                <label>Class:
                    <input name="user_class" placeholder="Ex: Period 2 or Block G"></input>
                </label>

                <h2>Names</h2>

                    <div className="gender">

                    </div>

                    <textarea name="student_names">

                    </textarea>

                <button type="submit">Add students</button>
            </form>
        </>
    );
}

export default AddClass;