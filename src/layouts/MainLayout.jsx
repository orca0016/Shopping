import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import { useAnimate, stagger } from "framer-motion";
import { Menu } from "../components/Header/Menu";
import { MenuToggle } from "../components/Header/MenuToggle";
import MainContext from "../context";
import { darkTheme } from "./themes";
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);
  return scope;
}
const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <>
      <MainContext.Provider
        value={{ drawerOpen: isOpen, setDrawerOpen: setIsOpen }}
      >
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
        </CacheProvider>
        <div ref={scope}>
          <Menu />
          {/* <MenuToggle toggle={() => setIsOpen(!isOpen)} /> */}
        </div>
      </MainContext.Provider>
    </>
  );
};

export default MainLayout;
