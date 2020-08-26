import React from "react";

const Home = () => {

    return (
        <>
            <h1>Student Name Popularity Worksheet Generator</h1>
            
            <div class="intro">
            
                <p>Welcome! This tool will generate worksheets that use historical name data from the US Social Security Administration.</p>
                
                <p>
                    The generated worksheets allow students to work on personalized problems, ones that that incorporate data involving their own names. I have used these worksheets with my own middle school students, and when they see that they each have their own papers with personalized problems, they become ecstatic. Participation is vastly higher on the day of that lesson, and even students who do not typically choose to participate become motivated to give it a try. Students are also very eager to compare their own data with those of their friends and neighbors, so consider adding a collaborative portion to the activity.
                 </p>
                 
                 <p>
                    The problems involve making a box-and-whisker plot and a histogram, so this activity would be a perfect end-of-unit review activity.
                 </p>
                    
                    For your convenience, this application will generate an entire class set of worksheets at once (after you've typed or pasted in a list of all the students).
                </p>
            
            </div>            
        </>
    );
}

export default Home;