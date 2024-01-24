"use client";
import Spline from "@splinetool/react-spline";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative p-5 overflow-hidden">
      {" "}
      <Spline scene="https://prod.spline.design/Y09oT1IYEuvZJFA0/scene.splinecode" />
    </main>
  );
}
