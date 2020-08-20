import React from "react";

const AddClass = () => {

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