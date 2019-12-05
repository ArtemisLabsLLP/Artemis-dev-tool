import React, { useEffect } from "react";
import ReactJson from "react-json-view";
// import CustomGraphiQL from "./GraphiQL.jsx";

const ApolloGraphQLCache = props => {
  useEffect(() => {
    props.getCache()
  }, [props.queries])

  return (
    <div id="cache-container">
      <h2>CACHE:</h2>
      <ReactJson theme="summerfruit:inverted"
        src={props.cache}
        name={null}
        iconStyle="triangle"
        indentWidth={1}
        collapsed={3}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={false}
      />
    </div>
  );
};

export default ApolloGraphQLCache;