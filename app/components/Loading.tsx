"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-80">
        <DotLottieReact
            src="/loading.lottie"
            loop
            autoplay
        />
      </div>
    </div>
  );
}

