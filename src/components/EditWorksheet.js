import React from "react";

const EditWorksheet = () => {

    return (
        <>
            <h2>Edit Worksheet</h2>

            <div className="editWorksheet">

                <div className="pageDisplay">
                    <h3>Page 1</h3>
                    <div className="pageContents">

                    </div>

                    <button className="edit">Edit</button>

                </div>

                <div className="pageDisplay">
                    <h3>Page 2</h3>
                    <div className="pageContents">

                    </div>

                    <button className="edit">Edit</button>

                </div>

                <button className="addNames">Add Student Names</button>
                    
            </div>

        </>
    );
}

export default EditWorksheet;