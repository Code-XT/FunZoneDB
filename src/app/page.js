"use client";
import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 justify-items-center p-20">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          {" "}
          {/* <Spline scene="https://prod.spline.design/Y09oT1IYEuvZJFA0/scene.splinecode" /> */}
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold bg-black items-center justify-center relative">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center relative">
              A One stop Hub for all Your
            </div>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                " Anime", // initially rendered starting point
                1000,
                " Movies",
                1000,
                " TV Shows",
                1000,
                " Gaming",
                500,
              ]}
              speed={50}
              style={{
                fontWeight: "bold",
                color: "#f00",
                textAlign: "center",
                marginTop: "20px",
                marginLeft: "10px",
                marginRight: "10px",
                display: "inline-block",
                whiteSpace: "pre",
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "white",
                fontSize: "3em",
              }}
              repeat={Infinity}
              cursor={false}
            />
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center relative">
              Needs
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center relative p-3">
              Discover Something New!
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
}
