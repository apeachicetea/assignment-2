import { styled } from "styled-components";

const Wrapper = styled.a`
  display: flex;
  padding-bottom: 10px;
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

function Issue({ issue }) {
  return (
    <Wrapper href={`/issues/${issue.number}`}>
      <LeftWrapper>
        <span>#{issue.number}</span>
        <span>{issue.title}</span>
        <LeftBottomBox>
          <div>작성자: {issue.user.login}</div>
          <div>작성일: {issue.created_at}</div>
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
