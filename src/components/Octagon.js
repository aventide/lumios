import React from 'react';
import { Graphics } from '@inlet/react-pixi';

import LED from './LED';
import Prism from './Prism';

import {
  root2,
  scaleFactor,
  octWidth,
  OCTAGON_DEFAULT_COLOR,
} from '../constants';

export default function Octagon({ x, y, indexX, indexY, onBuild, inSeries, led }) {

    const [isHovered, setIsHovered] = React.useState(false)

    function onPointerDown() {
        onBuild({ x: indexX, y: indexY })
        // navigator.vibrate([10])
    }

    const drawOctagon = React.useCallback(g => {
        g.clear()
        g.beginFill(OCTAGON_DEFAULT_COLOR)
        g.moveTo(1 * scaleFactor, 0 * scaleFactor)
        g.lineTo((1 + root2) * scaleFactor, 0 * scaleFactor)
        g.lineTo((1 + root2 + 1) * scaleFactor, 1 * scaleFactor)
        g.lineTo((1 + root2 + 1) * scaleFactor, (1 + root2) * scaleFactor)
        g.lineTo((1 + root2) * scaleFactor, (1 + root2 + 1) * scaleFactor)
        g.lineTo(1 * scaleFactor, (1 + root2 + 1) * scaleFactor)
        g.lineTo((1 + root2) * scaleFactor, (1 + root2 + 1) * scaleFactor)
        g.lineTo(1 * scaleFactor, (1 + root2 + 1) * scaleFactor)
        g.lineTo(0 * scaleFactor, (1 + root2) * scaleFactor)
        g.lineTo(0 * scaleFactor, 1 * scaleFactor)
        g.lineTo(1 * scaleFactor, 0 * scaleFactor)
        g.endFill()
    }, [])

    return <>
        <Graphics
            draw={drawOctagon}
            interactive={true}
            mouseover={() => setIsHovered(true)}
            mouseout={() => setIsHovered(false)}
            pointerdown={() => {
                onPointerDown()
            }}
            x={x}
            y={y}
        />
        {
            led ?
                <LED color={led} x={x + (octWidth / 4)} y={y + (octWidth / 4)} inSeries={inSeries} onPointerDown={onPointerDown} isParentHovered={isHovered} />
                : <Prism x={x + (octWidth / 4)} y={y + (octWidth / 4)} inSeries={inSeries} led={led} onPointerDown={onPointerDown} isParentHovered={isHovered} />
        }
    </>
}