import React from 'react';
import { Container, Graphics, Text } from '@inlet/react-pixi';
import { TextStyle } from '@pixi/text';
import { octWidth, stageWidth, OCTAGON_DEFAULT_COLOR, gutter, coefficient } from '../constants';

export default function Button(){

    const midpointX = stageWidth / 2;
    const drawButton = React.useCallback(g => {
        g.clear();
        g.beginFill(OCTAGON_DEFAULT_COLOR);
    
        g.drawRect(0, 0, octWidth * 6, octWidth)

    }, []);

    return <Container anchor={0.5} y={2 * octWidth} x={midpointX - ((octWidth * 6) / 2)} y={octWidth}><Graphics
    draw={drawButton}
    // x={x + (octWidth / 8)}
    // y={y + (octWidth / 8)}
    // interactive={true}
    // mouseover={() => setIsHovered(true)}
    // mouseout={() => setIsHovered(false)}
    // pointerdown={onPointerDown}
/>
    <Text anchor={0.5} x={(octWidth * 6) / 2} y = {18} text="MENU" fill="#ffffff" style={
      new TextStyle({
        align: 'center',
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 22,
        fontWeight: 400,
        fill: '#ffffff', // gradient
        letterSpacing: 2,
      })
    } />
</Container>
}