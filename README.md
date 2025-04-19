# svg-color-tools

A lightweight utility to dynamically change the `fill`, `stroke`, `stroke-width`, and `className` of SVG strings in JavaScript/TypeScript projects.

## Installation
```bash
npm install svg-color-tools
```

## Usage

### 1. Modify SVG string manually
```ts
import { changeSvgColor } from 'svg-color-tools';

const updatedSvg = changeSvgColor(originalSvgString, {
  fill: '#ff0000',
  stroke: '#000',
  strokeWidth: '2',
  className: 'my-custom-class'
});
```

### 2. Load and modify SVG file in React
```tsx
import { ChangeSvgColor } from 'svg-color-tools';

<ChangeSvgColor
  src="/icons/star.svg"
  fill="#00f"
  stroke="#333"
  strokeWidth="1.5"
  className="svg-icon"
  style={{ width: 40, height: 40 }}
/>
```

## Props for `ChangeSvgColor`
- `src` (string, required): URL path of the SVG file
- `fill` (string, optional): Color to apply to `fill` attributes
- `stroke` (string, optional): Color to apply to `stroke` attributes
- `strokeWidth` (string, optional): Stroke width to apply
- `className` (string, optional): Custom class to add to SVG
- `style` (React.CSSProperties, optional): Inline style for container div

## License
MIT