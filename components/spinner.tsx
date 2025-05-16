"use client";

import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "100px auto",
};

interface Props {
  loading: boolean;
}

export const Spinner = ({ loading }: Props) => {
  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={override}
      loading={loading}
      size={150}
      aria-label="Loading..."
    />
  );
};
