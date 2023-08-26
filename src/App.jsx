import { useRef } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const url = (name, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;
  const ref = useRef();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#253237",
      }}
    >
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />
        <ParallaxLayer
          sticky={{ start: 0, end: 4 }}
          style={{ justifyContent: "flex-start" }}
        >
          <h1>Scroll down</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={url("earth")} style={{ width: "60%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => ref.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("server")} style={{ width: "20%" }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => ref.current.scrollTo(0)}
        >
          <img src={url("clients-main")} style={{ width: "40%" }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => ref.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("bash")} style={{ width: "40%" }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
