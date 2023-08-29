import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

function LoadingIndicator() {
  return (
    <SyncLoader color="#412dd4" size={20} cssOverride={{ margin: "30px 0" }} />
  );
}

export default LoadingIndicator;
