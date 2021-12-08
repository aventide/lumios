import React from 'react';
import { Container, Stage } from '@inlet/react-pixi';

import Walls from './components/Walls';
import Lightbeam from './components/Lightbeam';
import Octastage from './components/Octastage';

import Header from './components/Header';

import {
  stageWidth,
  stageWidthUnits,
  stageHeightUnits,
  stageHeight,
} from './constants';

export default function App() {
  const [series, setSeries] = React.useState([
    {
      x: Math.floor(stageWidthUnits / 2),
      y: Math.floor(stageHeightUnits / 2)
    }
  ])

  function onBuild({ x, y }) {
    setSeries([
      ...series,
      { x, y }
    ])
  }

  return <>
    <Stage width={stageWidth} height={stageHeight} alpha={0} options={{ backgroundAlpha: 0, antialias: false }} >
      <Container x={0} y={0}>
        <Walls />
        <Lightbeam series={series} />
        <Octastage onBuild={onBuild} series={series} />
      </Container>
    </Stage>
  </>
};