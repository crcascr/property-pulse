"use client";

import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "100px auto",
};

export default function LoadingPage({ loading }: { loading: boolean }) {
  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={override}
      loading={loading}
      size={150}
      aria-label="Loading..."
    />
  );
}
