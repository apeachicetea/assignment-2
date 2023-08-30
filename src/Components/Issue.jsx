import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
  margin-bottom: 10px;
  border-bottom: solid 1px black;
  text-decoration: none;
  cursor: pointer;
`;

const LeftWrapper = styled.div``;

const LeftBottomBox = styled.div`
  display: flex;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Author = styled.span`
  margin-right: 5px;
`;

function Issue({ issue }) {
  const navigate = useNavigate();

  const dateString = issue.created_at;
  const dateObj = new Date(dateString);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <Wrapper
      onClick={() =>
        navigate(`/issues/${issue.number}`, {
          state: {
            issueId: issue.number,
          },
        })
      }
    >
      <LeftWrapper>
        <Title>
          <span>#{issue.number}</span>
          <span>{issue.title}</span>
        </Title>
        <LeftBottomBox>
          <Author>작성자: {issue.user.login}</Author>
          <div>작성일: {formattedDate}</div>
        </LeftBottomBox>
      </LeftWrapper>
      <RightWrapper>
        <div>
          <div>Comment: {issue.comments}</div>
        </div>
      </RightWrapper>
    </Wrapper>
  );
}

export default Issue;
