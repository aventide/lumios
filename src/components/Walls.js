import React from 'react';
import { Graphics, Container } from '@inlet/react-pixi';

import {
  root2,
  scaleFactor,
  gutter,
  octWidth,
  stageWidthUnits,
  coefficient,
  OCTAGON_DEFAULT_COLOR,
  stageWidth,
  stageHeight,
} from '../constants';

export default function Walls() {

  const end = {
    x: stageWidth,
    y: stageHeight
  }

  const wallThickness = (1 + root2) * scaleFactor;
  const midpointX = end.x / 2;
  const goalWidth = ((3 * octWidth) + (2 * gutter));
  const shoulderWidth = (((stageWidthUnits - 3) / 2) * coefficient) + gutter;

  const drawWalls = React.useCallback(g => {
    g.clear();
    g.beginFill(OCTAGON_DEFAULT_COLOR);

    // top left
    g.drawRect(0, coefficient, shoulderWidth, wallThickness)

    // top goal left side
    g.drawRect(midpointX - (goalWidth / 2), 0, wallThickness, (octWidth + wallThickness))

    // top goal end
    g.drawRect(midpointX - (goalWidth / 2), 0, goalWidth, wallThickness);

    // top goal right side
    g.drawRect(midpointX + (octWidth / 2) + (2 * gutter), 0, wallThickness, (octWidth + wallThickness))

    // top right
    g.drawRect(midpointX + coefficient, coefficient, shoulderWidth, wallThickness)

    // left wall
    g.drawRect(0, coefficient, wallThickness, (end.y - (2 * coefficient)))

    // right wall
    g.drawRect(end.x - (octWidth - gutter), coefficient, wallThickness, (end.y - (2 * coefficient)))

    // bottom left
    g.drawRect(0, (end.y - coefficient - wallThickness), shoulderWidth, wallThickness)

    // bottom goal left side
    g.drawRect(midpointX - (goalWidth / 2), (end.y - coefficient - wallThickness), wallThickness, (octWidth + wallThickness))

    // bottom goal end
    g.drawRect(midpointX - (goalWidth / 2), (end.y - wallThickness), goalWidth, wallThickness);

    // top goal right side
    g.drawRect(midpointX + (octWidth / 2) + (2 * gutter), (end.y - coefficient - wallThickness), wallThickness, (octWidth + wallThickness))

    // bottom right
    g.drawRect(midpointX + coefficient, (end.y - coefficient - wallThickness), shoulderWidth, wallThickness)

    g.endFill();

  })

  return <Graphics
    draw={drawWalls}
  />
}