import React from "react";

function Search({className, width, height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 451 451"
    >
      <path d="M447 428L337.6 318.4A192.5 192.5 0 00192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0019 0 13.5 13.5 0 000-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0127 192.3z"></path>
    </svg>
  );
}

export default Search;