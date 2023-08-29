import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAnIssue } from "../Utils/IssuesUtil";
import LoadingIndicator from "../Components/LoadingIndicator";

function Detail() {
  const location = useLocation();
  const issueId = String(location.state.issueId);

  const [issue, setIssue] = useState({});

  useEffect(() => {
    getAnIssue(issueId).then((issue) => setIssue(issue));
  }, []);

  return (
    <>
      {Object.keys(issue).length ? (
        <>
          <div>
            <img src={issue.user.avatar_url} alt="avatar_img" />
          </div>
          <div>
            <span>#{issue.number}</span>
            <span>{issue.title}</span>
            <div>
              <div>작성자: {issue.user.login}</div>
              <div>작성일: {issue.created_at}</div>
            </div>
          </div>
          <div>
            <div>
              <div>Comment: {issue.comments}</div>
            </div>
          </div>
          <ReactMarkdown children={issue.body} remarkPlugins={[remarkGfm]} />
        </>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
}

export default Detail;
