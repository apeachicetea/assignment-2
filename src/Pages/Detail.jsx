import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useSelector, useDispatch } from "react-redux";
import LoadingIndicator from "../Components/LoadingIndicator";
import { getAnIssueThunk } from "../Redux/IssueSlice";
import Header from "../Components/Header";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Detail() {
  const location = useLocation();
  const issueId = String(location.state.issueId);
  const dispatch = useDispatch();
  const issue = useSelector((state) => {
    return state.issue;
  });

  useEffect(() => {
    dispatch(getAnIssueThunk(issueId));
  }, []);

  return (
    <>
      <Header />
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
        <Wrapper>
          <LoadingIndicator />
        </Wrapper>
      )}
    </>
  );
}

export default Detail;
