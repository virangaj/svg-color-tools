export function updateSvg(
  svgString: string,
  options: {
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
    className?: string;
  } = {}
): string {
  const { fill, stroke, strokeWidth, className } = options;

  if (!svgString || typeof svgString !== "string") {
    throw new Error("Invalid SVG input");
  }

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(svgString, "image/svg+xml");
  const svg = xmlDoc.documentElement;

  const traverse = (node: Element) => {
    if (node.setAttribute) {
      if (fill) node.setAttribute("fill", fill);
      if (stroke) node.setAttribute("stroke", stroke);
      if (strokeWidth) node.setAttribute("stroke-width", strokeWidth);
    }
    Array.from(node.children).forEach(traverse);
  };

  traverse(svg);

  // Add inline style to <svg> tag to ensure styles take effect
  const existingStyle = svg.getAttribute("style") || "";
  const stylePieces = [];
  if (fill) stylePieces.push(`fill: ${fill};`);
  if (stroke) stylePieces.push(`stroke: ${stroke};`);
  if (strokeWidth) stylePieces.push(`stroke-width: ${strokeWidth};`);
  svg.setAttribute("style", existingStyle + stylePieces.join(" "));

  // Apply className if provided
  if (className) {
    svg.setAttribute("class", className);
  }

  const serializer = new XMLSerializer();
  return serializer.serializeToString(svg);
}
