import React from "react";

const ModalNameUnavailable = ({uniqueNames}) => {

    return (
        <>
            <h2>Students with Unique Names</h2>
            <h3>The Social Security Administration does not have any name data for the students below.</h3>

            <p>
                For each student, first verify that the gender is correct. Then choose an alternate name to use and specify the relationship of that name to the student.
            </p>

            <form name="unique_names">
                
                {
                    uniqueNames.map(name => {
                        <>
                            <div className="gender">

                            </div>
                            <input name="new_name" className="new_name"></input>
                            <input name="relationship" className="relationship"></input>

                        </>
                    })
                }

                <button type="submit">Update students</button>
            </form>

        </>
    );
}

export default ModalNameUnavailable;