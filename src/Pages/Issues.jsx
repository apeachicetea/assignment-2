import { Fragment, useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Issue from "../Components/Issue";
import LoadingIndicator from "../Components/LoadingIndicator";
import { getIssuesThunk } from "../Redux/IssuesSlice";
import Header from "../Components/Header";
import { loading, unLoading } from "../Redux/LoadingSlice";
import { addPage } from "../Redux/PageSlice";

const Container = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdLink = styled.a`
  text-align: center;
  margin: 20px 0px 20px 0px;
`;

const AdImg = styled.img``;

const Target = styled.div`
  width: 100vw;
  height: 10px;
  bottom: 0px;
  background-color: red;
`;

function Issues() {
  const [isLoading, setIsLoading] = useState(true);
  const target = useRef(null);
  const dispatch = useDispatch();
  const issues = useSelector((state) => {
    return state.issues;
  });
  const loadingData = useSelector((state) => state.loading.isLoading);
  const perPage = useSelector((state) => state.perPage.perPage);

  const adImageUrl =
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100";

  useEffect(() => {
    const callback = (e) => {
      if (e[0].isIntersecting && !loadingData) {
        //추가 목록 로딩
        dispatch(addPage());
        dispatch(loading());
        dispatch(getIssuesThunk(perPage));
        dispatch(unLoading());
        setIsLoading(true);
      }
    };

    let observer;
    if (target.current && !loadingData) {
      const targetDiv = target.current;
      observer = new IntersectionObserver(callback, {
        threshold: 1,
      });
      observer.observe(targetDiv);
    }
    return () => observer && observer.disconnect();
  });

  useEffect(() => {
    dispatch(getIssuesThunk(perPage)).then(() => setIsLoading(false));
  }, [perPage]);

  return (
    <Fragment>
      <Header />
      {isLoading ? (
        <Wrapper>
          <LoadingIndicator />
        </Wrapper>
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
