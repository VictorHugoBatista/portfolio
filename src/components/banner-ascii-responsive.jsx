import { useState } from "react";

import { colossal, cyberlarge, stickLetters, mini, useAsciiText } from "react-ascii-text";

const fontsByResolution = [
  {
    resolution: 1200,
    font: colossal,
  },
  {
    resolution: 992,
    font: cyberlarge,
  },
  {
    resolution: 768,
    font: stickLetters,
  },
  {
    resolution: 0,
    font: mini,
  },
];

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const getFontByResolution = (fontsByResolution, windowDimensions) => {
  for (const key in fontsByResolution) {
    const fontByResolution = fontsByResolution[key];
    console.log(windowDimensions.width, fontByResolution);
    if (windowDimensions.width < fontByResolution.resolution) {
      continue;
    }
    return fontByResolution.font;
  }
}

function BannerAsciiResponsive(props) {
  const [text] = useState(props.texts);
  const windowDimensions = getWindowDimensions();
  const font = getFontByResolution(fontsByResolution, windowDimensions);
  const asciiTextRef = useAsciiText({
    animationCharacters: "▒░█",
    animationCharacterSpacing: 1,
    animationDelay: 2000,
    animationDirection: "horizontal",
    animationInterval: 100,
    animationLoop: true,
    animationSpeed: 3,
    font: font,
    text,
  });

    return <pre ref={asciiTextRef} />;
};

export default BannerAsciiResponsive;
