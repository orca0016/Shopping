import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import { useEffect, useState } from "react";
import { darkTheme } from "./themes";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const MainLayout = ({ children }) => {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MainLayout;
