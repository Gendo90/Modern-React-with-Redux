import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 6:00 PM"
                    commentText="Nice blog post!"
                    imgSrc={faker.image.image()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Yesterday at 4:25 PM"
                    commentText="Cool story, bro!"
                    imgSrc={faker.image.image()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 9:00 AM"
                    commentText="This is really helpful."
                    imgSrc={faker.image.image()} />
            </ApprovalCard>
        </div>)
};


ReactDOM.render(<App />, document.querySelector("#root"))
