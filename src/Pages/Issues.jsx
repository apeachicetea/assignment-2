import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getIssues } from "../Utils/IssuesUtil";
import Issue from "../Components/Issue";

const Container = styled.ul`
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
        return <Issue key={issue.id} issue={issue} />;
      })}
    </Container>
  );
}

export default Issues;
