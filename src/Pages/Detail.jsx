import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useSelector, useDispatch } from "react-redux";
import LoadingIndicator from "../Components/LoadingIndicator";
import { getAnIssueThunk } from "../Redux/IssueSlice";
import Header from "../Components/Header";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;
`;

const UpWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px black;
  padding: 0px 10px 10px 10px;
  margin-left: 10px;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Author = styled.span`
  margin-right: 5px;
`;

const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
`;

function Detail() {
  const location = useLocation();
  const issueId = String(location.state.issueId);
  const dispatch = useDispatch();
  const issue = useSelector((state) => {
    return state.issue;
  });

  const dateString = issue.created_at;
  const dateObj = new Date(dateString);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  useEffect(() => {
    dispatch(getAnIssueThunk(issueId));
  }, []);

  return (
    <>
      <Header />
      {Object.keys(issue).length ? (
        <Container>
          <UpWrapper>
            <div>
              <AvatarImg src={issue.user.avatar_url} alt="avatar_img" />
            </div>
            <TitleWrapper>
              <div>
                <Title>
                  <span>#{issue.number}</span>
                  <span>{issue.title}</span>
                </Title>
                <div>
                  <Author>작성자: {issue.user.login}</Author>
                  <span>작성일: {formattedDate}</span>
                </div>
              </div>
              <div>
                <div>Comment: {issue.comments}</div>
              </div>
            </TitleWrapper>
          </UpWrapper>
          <ReactMarkdown children={issue.body} remarkPlugins={[remarkGfm]} />
        </Container>
      ) : (
        <Wrapper>
          <LoadingIndicator />
        </Wrapper>
      )}
    </>
  );
}

export default Detail;
