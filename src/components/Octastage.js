import React from 'react';
import { Container } from '@inlet/react-pixi';

import Octagon from './Octagon';

import {
  gridSize,
  gutter,
  stageWidthUnits,
  coefficient,
  LED_GREEN,
  LED_RED,
  LED_WHITE,
} from '../constants';

export default function Octastage({ onBuild, series }) {
    const startY = gutter + coefficient
    const unitCenterX = Math.floor(stageWidthUnits / 2);

    function drawOctagrid() {
      const gridItems = [];

      for (let row = 0; row < stageWidthUnits; row++) {
          for (let col = 0; col < gridSize; col++) {
              const inSeries = series.some(item => item.x == row && item.y - 1 == col)
              gridItems.push(
                  <Octagon indexX={row} indexY={col + 1} x={(row * (coefficient)) - gutter} y={(col * (coefficient)) - gutter} onBuild={onBuild} inSeries={inSeries} led={(row === 0 || row === stageWidthUnits - 1 || ((col === 0 || col === gridSize - 1) && row !== Math.floor(stageWidthUnits / 2))) ? LED_WHITE : null} />
              )
          }
      }

      return gridItems;
  }

    // container needs explicit anchor (x,y) and height and width for sanity
    // the -1 height index of the top Oct is kinda weird...

    return <>
        <Octagon y={0} x={(unitCenterX * coefficient)} onBuild={onBuild} series={series} indexY={0} indexX={unitCenterX} led={LED_GREEN} />
        <Octagon y={0} x={((unitCenterX + 1) * coefficient)} onBuild={onBuild} series={series} indexY={0} indexX={unitCenterX + 1} led={LED_GREEN} />
        <Octagon y={0} x={((unitCenterX - 1) * coefficient)} onBuild={onBuild} series={series} indexY={0} indexX={unitCenterX - 1} led={LED_GREEN} />
        <Container x={gutter} y={startY}>
            {drawOctagrid()}
        </Container>
        <Octagon y={coefficient * (stageWidthUnits + 1)} x={(unitCenterX * coefficient)} onBuild={onBuild} series={series} indexY={gridSize + 1} indexX={unitCenterX} led={LED_RED} />
        <Octagon y={coefficient * (stageWidthUnits + 1)} x={((unitCenterX + 1) * coefficient)} onBuild={onBuild} series={series} indexY={gridSize + 1} indexX={unitCenterX + 1} led={LED_RED} />
        <Octagon y={coefficient * (stageWidthUnits + 1)} x={((unitCenterX - 1) * coefficient)} onBuild={onBuild} series={series} indexY={gridSize + 1} indexX={unitCenterX - 1} led={LED_RED} />
    </>
}