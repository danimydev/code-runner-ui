import { useEffect, useState } from "react";

import { useTheme } from "@/providers/theme-provider";

import bannerDarkUrl from "@/assets/banner-dark.png";
import bannerLightUrl from "@/assets/banner-light.png";

export const BannerImage = () => {
  const [bannerUrl, setBannerUrl] = useState(bannerDarkUrl);
  const themeProviderState = useTheme();

  useEffect(() => {
    if (themeProviderState.theme === "dark") {
      setBannerUrl(bannerDarkUrl);
    }
    if (themeProviderState.theme === "light") {
      setBannerUrl(bannerLightUrl);
    }
  }, [bannerUrl, themeProviderState]);

  return (
    <img
      src={bannerUrl}
      alt=""
      className="max-w-6xl"
      draggable="false"
    />
  );
};
