import React from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const override = css`
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
`;

const loader = () => {
  return (
    <div className="">
      <BarLoader
        css={override}
        size={1000}
        color={"#006ca3"}
        height={7}
        width={'100%'}
      />
    </div>
  );
};

export default loader;
