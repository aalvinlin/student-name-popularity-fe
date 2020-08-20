import React from "react";

import EditWorksheetHeader from "./EditWorksheetHeader";
import EditIntro from "./EditIntro";
import EditFiveNumberSummary from "./EditFiveNumberSummary";
import EditHistogram from "./EditHistogram";
import EditQuestions from "./EditQuestions";

const ModalEditWorksheet = ({page}) => {

    if (page === 1)
        {
            return (
                <>
                    <EditWorksheetHeader />
                    <EditIntro />
                    <EditFiveNumberSummary />
                </>
            )
        }
    else if (page === 1)
        {
            return (
                <>
                    <EditHistogram />
                    <EditQuestions />
                </>
            )
        }
}

export default ModalEditWorksheet;