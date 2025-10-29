"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LottieAnimation() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-100">
        <DotLottieReact
            src="https://lottie.host/59b5388d-8550-4c73-a114-d2ad99b6715c/6shhQu4ZUF.lottie"
            loop
            autoplay
        />
      </div>
    </div>
  );
}

