import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAnIssue } from "../Utils/IssuesUtil";

function Detail() {
  const location = useLocation();
  const issueId = String(location.state.issueId);

  const [issue, setIssue] = useState({});

  useEffect(() => {
    getAnIssue(issueId).then((issue) => setIssue(issue));
  }, []);

  return <></>;
}

export default Detail;
