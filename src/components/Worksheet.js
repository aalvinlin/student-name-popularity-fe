import React from "react";

const Worksheet = ({name, class, alternateName, alternateNameRelationship}) => {

    const ages_data = {
        min: 0,
        Q1: 0,
        median: 0,
        Q3: 0,
        max: 0,
    }

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
                    If all the people named {alternateName ? alternateName : name} who were born between 1920 and 2018 were still alive right now...
                </p>

                <ul>
                    <li>The youngest {name} would be {ages_data['min']} years old.</li>
                    <li>The oldest {name}  would be {ages_data['max']} years old.</li>
                    <li>The median age would be {ages_data['median']}.</li>
                    <li>The age for the first quartile would be {ages_data['Q1']}.</li>
                    <li>The age for the third quartile would be {ages_data['Q3']}.</li>
                </ul>

                <ul>
                    <li>What percent of all people named {name} are between {ages_data['median']} and {ages_data['max']} years old?</li>
                    <li>The youngest 25 percent of people with the name have ages between __________ and __________ .</li>
                    <li>What percent of all people with the name {name} are between {ages_data['min']} and {ages_data['Q3']} years old? </li>
                </ul>

            </section>

            <section className="histogram">
                
            </section>

            <section className="questions">

                <ul>
                    <li>Is your name becoming more popular or less popular?</li>
                    <li>What do you think causes names to be more popular?</li>
                    <li>What did you find surprising or interesting about the number of people with your name?</li>
                </ul>

            </section>

        </>
    );
}

export default Worksheet;