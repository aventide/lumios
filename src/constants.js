export const root2 = Math.SQRT2;

// mobile; assumes gutter and scalefactor are the same
// export const stageWidth = window.innerWidth;
export const stageWidth = 440;

// really, grid width
// walls take up the edge of the grid
// EVEN NUMBERS NOT ALLOWED
export const gridSize = 9;

// this will get derived from stage dimensions
// assuming gutter = scalefactor:
// https://www.symbolab.com/solver/equation-calculator/solve%20for%20s%2C%20440%20%3D%5Cleft(n%2B1%5Cright)s%20%2B%20n%5Cleft(%5Cleft(2%20%2B%20%5Csqrt%7B2%7D%5Cright)%5Ccdot%20s%5Cright)?or=input
export const scaleFactor = stageWidth / ((3 * gridSize) + (root2 * gridSize) - 1);

// gutter is set independently from scalefactor:
// https://www.symbolab.com/solver/equation-calculator/solve%20for%20s%2C%20440%20%3D%5Cleft(n%2B1%5Cright)g%20%2B%20n%5Cleft(%5Cleft(2%20%2B%20%5Csqrt%7B2%7D%5Cright)%5Ccdot%20s%5Cright)?or=input
// export const scaleFactor = (((2 - root2) * (440 - (gutterWidth * (gridSize + 1)))) / (2 * gridSize))

export const gutter = scaleFactor;
export const octWidth = ((2 + root2) * scaleFactor)
export const stageWidthUnits = gridSize;
export const stageHeightUnits = gridSize + 2;
export const coefficient = octWidth + gutter;
export const stageHeight = stageWidth + (2 * coefficient)

export const LED_GREEN = "0x63FFB4";
export const LED_RED = "0xFF7763";
export const LED_WHITE = "0xffffff";
export const LED_YELLOW = "0xFFDD32";

export const OCTAGON_DEFAULT_COLOR = "0x5f5f5f";
export const OCTAGON_TERMINAL_COLOR = "0xff0000";
export const HOVER_COLOR = "0xBDFFDF"

export const LIGHTGREY = "0xA2A2A2";
export const WHITE = "0xffffff"