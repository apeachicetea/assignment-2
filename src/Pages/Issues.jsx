import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getIssues } from "../Utils/IssuesUtil";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Issues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues().then((issues) => setIssues(issues));
  }, []);

  return (
    <Container>
      {issues.slice(0, 10).map((issue) => {
        return (
          <ul key={issue.id}>
            <div>
              <span>{issue.number}</span>
              <span>{issue.title}</span>
            </div>
            <div>
              <div>{issue.user.login}</div>
              <div>{issue.created_at}</div>
            </div>
            <div>
              <div>{issue.comments}</div>
            </div>
          </ul>
        );
      })}
    </Container>
  );
}

export default Issues;
