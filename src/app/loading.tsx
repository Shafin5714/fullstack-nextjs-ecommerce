import React from "react";

import Image from "next/image";
import loader from "@/assets/loader.gif";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        width: "100vh",
      }}
    >
      <Image src={loader} height={150} width={150} alt="loading" />
    </div>
  );
};

export default Loading;
