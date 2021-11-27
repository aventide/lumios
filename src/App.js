import React from 'react';
import { Container, Sprite, Stage } from '@inlet/react-pixi';

import Walls from './components/Walls';
import Lightbeam from './components/Lightbeam';
import Octastage from './components/Octastage';

import {
  stageWidth,
  stageWidthUnits,
  stageHeightUnits,
  stageHeight,
  octWidth,
  gutter,
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

  const spacer = (octWidth + gutter) * 2;

  return <Stage width={stageWidth} height={stageHeight + spacer + spacer} alpha={0} options={{ backgroundAlpha: 0, antialias: false }} >
    {/* <Sprite image={BlackOrchid} x={0} y={0} height={stageHeight + spacer + spacer} width={stageWidth} /> */}
    <Container x={0} y={0}>

    </Container>
    <Container x={0} y={spacer}>
      <Walls />
      <Lightbeam series={series} />
      <Octastage onBuild={onBuild} series={series} />
    </Container>
    <Container x={0} y={spacer + stageHeight}>

    </Container>
  </Stage>
};