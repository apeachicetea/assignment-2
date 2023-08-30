import { useSelector } from "react-redux";

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
    <div>
      {issues.length ? `${organizationName} / ${repositoryName}` : null}
    </div>
  );
}

export default Header;
