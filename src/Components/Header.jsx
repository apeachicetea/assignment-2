import { useSelector } from "react-redux";
import { styled } from "styled-components";

const HeaderDiv = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Text = styled.h1`
  font-weight: bold;
`;

function Header() {
  const issues = useSelector((state) => {
    return state.issues;
  });

  let organizationName,
    repositoryName = "";

  if (issues.length) {
    let repository_url = issues[0].repository_url;
    repository_url = repository_url.split("/");
    organizationName = repository_url[4];
    repositoryName = repository_url[5];
  }

  return (
    <HeaderDiv>
      {issues.length ? (
        <Text>{`${organizationName} / ${repositoryName}`}</Text>
      ) : null}
    </HeaderDiv>
  );
}

export default Header;
