import { Fragment, useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { getIssues } from "../Utils/IssuesUtil";
import Issue from "../Components/Issue";
import LoadingIndicator from "../Components/LoadingIndicator";

const Container = styled.ul`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdLink = styled.a``;

const AdImg = styled.img``;

const Target = styled.div`
  width: 100vw;
  height: 10px;
  background-color: red;
`;

function Issues() {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(8);
  const target = useRef(null);
  const navigate = useNavigate();

  const adImageUrl =
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100";

  const callback = (e) => {
    if (e[0].isIntersecting) {
      //추가 목록 로딩
      setPerPage((prev) => prev + 8);
      getIssues(perPage);
    }
  };

  useEffect(() => {
    if (target.current) {
      const targetDiv = target.current;
      const observer = new IntersectionObserver(callback, {
        threshold: 1,
      });
      observer.observe(targetDiv);
      return () => {
        if (target) {
          observer.unobserve(targetDiv);
        }
      };
    }
  });

  useEffect(() => {
    getIssues(perPage)
      .then((issues) => setIssues(issues))
      .then(() => setIsLoading(false));
  }, [perPage]);

  return (
    <Fragment>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Container>
          {issues.map((issue, idx) => {
            return idx !== 0 && idx % 4 === 0 ? (
              <AdLink
                key={issue.id}
                href="https://www.wanted.co.kr/"
                target="blank"
              >
                <AdImg src={adImageUrl} alt="Advertisement" />
              </AdLink>
            ) : (
              <Issue key={issue.id} issue={issue} />
            );
          })}
        </Container>
      )}
      {isLoading ? null : <Target ref={target}></Target>}
    </Fragment>
  );
}

export default Issues;
