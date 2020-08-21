import React from "react";

const Worksheet = ({name, class, alternateName, alternateNameRelationship}) => {

    return (
        <>
            <section className="worksheet_header">
                <h2 className="studentName">{name}</h2>
                <h2 className="studentClass">{class}</h2>
            </section>

            <section className="intro">
                <p>
                    Have you ever wondered how many other people share your name? The Social Security Administration, which is a part of the US government, keeps track of this information (http://www.ssa.gov/oact/babynames/background.html).
                </p>

                { alternateName ?
                    <p className="alternateNameIntro">
                    As it turns out, <em>your name is so unique that there is no data available!</em>. Instead, we'll use {alternateName}, {alternateNameRelationship}, for this exercise.</p>
                : <></> }

            </section>

            <section className="fiveNumberSummary">
                
                <p>
                    If all the people named {alternateName ? alternateName : name} who were born between 1920 and 2018 are still alive right now...
                </p>
                
            </section>

            <section className="histogram">
                
            </section>

            <section className="questions">
                
            </section>

        </>
    );
}

export default Worksheet;