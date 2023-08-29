import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  console.log(location.state.issueId);

  useEffect(() => {}, []);

  return <></>;
}

export default Detail;
