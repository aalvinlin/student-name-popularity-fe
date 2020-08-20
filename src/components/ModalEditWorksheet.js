import React from "react";

const ModalEditWorksheet = ({page}) => {

    if (page === 1)
        {
            return (

                <EditWorksheetHeader />
                <EditIntro />
                <EditFiveNumberSummary />
            )
        }
    else if (page === 1)
        {
            return (
                <EditHistogram />
                <EditQuestions />
            )
        }
}

export default ModalEditWorksheet;