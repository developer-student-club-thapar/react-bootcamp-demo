/** @format */
import React, {useEffect, useState} from "react";
import {animated, useSpring, interpolate} from "react-spring";

import NavSubPart from "./NavSubPart";

function Nav(props) {
    const [Top, setisTop] = useState(true);
    const [scroll, setScroll] = useState(0);
    document.addEventListener("scroll", () => {
        const isTop = window.scrollY < 50;
        if (isTop !== Top) {
            setisTop(isTop);
        }
        setScroll(window.scrollY);
    });

    const {o} = useSpring({
        from: {o: 0},
        o: scroll / 100 < 1 ? scroll / 100 : 1
    });

    return (
        <React.Fragment>
            {/* {Top ? ( */}
            <animated.div
                style={{
                    position: "sticky",
                    top: "0",
                    //boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.0)",
                    //background:"transparent",
                    zIndex: 100,
                    background: o.interpolate(o => `rgba(255, 255, 255, ${o}`),
                    boxShadow: o.interpolate(
                        o =>
                            `0 ${o * 2}px ${o * 12}px 0 rgba(0,0,0,${o * 0.18})`
                    )
                }}
            >
                <NavSubPart active={props.active} />
            </animated.div>
            {/* ) : (
        <animated.div
          style={{
            position: "sticky",
            top: "0",
            background: "white",
            zIndex: 100,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}
        >
          <NavSubPart active={props.active} />
        </animated.div>
      )} */}
            {/* <animated.dev

        style={{
            position:'sticky',
            top:0,
            boxShadow:"0 0px 0px 0 rgba(0, 0, 0, 0.0)",
            backgroundColor:'white',

        }}
      >
          <NavSubPart/>
      </animated.dev> */}
        </React.Fragment>
    );
}
export default Nav;
