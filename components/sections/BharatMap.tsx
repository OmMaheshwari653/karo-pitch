"use client";

import dynamic from "next/dynamic";

const BharatMapInner = dynamic(() => import("./BharatMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <div className="w-8 h-8 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
    </div>
  ),
});

export default function BharatMap() {
  return <BharatMapInner />;
}
