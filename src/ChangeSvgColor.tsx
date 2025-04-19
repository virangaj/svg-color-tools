import React, { FC, useEffect, useState } from "react";
import { updateSvg } from "./updateSvg";

interface ChangeSvgColorProps {
  src: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ChangeSvgColor: FC<ChangeSvgColorProps> = ({
  src,
  fill,
  stroke,
  strokeWidth,
  className,
  style,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((svg) => {
        const updated = updateSvg(svg, {
          fill,
          stroke,
          strokeWidth,
          className,
        });
        setSvgContent(updated);
      })
      .catch(console.error);
  }, [src, fill, stroke, strokeWidth, className]);

  if (!svgContent) return null;

  return <div style={style} dangerouslySetInnerHTML={{ __html: svgContent }} />;
};
