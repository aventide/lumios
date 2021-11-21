import React from 'react';
import { Graphics } from '@inlet/react-pixi';

import {
    root2,
    scaleFactor,
    LED_YELLOW,
    HOVER_COLOR,
    WHITE
} from '../constants';

export default function Prism({ x, y, inSeries, isParentHovered, onPointerDown }) {

    const [isHovered, setIsHovered] = React.useState(false);

    function getPrismFill() {

        if (isHovered || isParentHovered) {
            return HOVER_COLOR;
        }

        if (inSeries) {
            return LED_YELLOW;
        }

        return WHITE;
    }

    const halfScaleFactor = scaleFactor / 2;

    const drawPrism = React.useCallback(g => {
        g.clear()
        g.beginFill(getPrismFill())
        g.moveTo(1 * halfScaleFactor, 0 * halfScaleFactor)
        g.lineTo((1 + root2) * halfScaleFactor, 0 * halfScaleFactor)
        g.lineTo((1 + root2 + 1) * halfScaleFactor, 1 * halfScaleFactor)
        g.lineTo((1 + root2 + 1) * halfScaleFactor, (1 + root2) * halfScaleFactor)
        g.lineTo((1 + root2) * halfScaleFactor, (1 + root2 + 1) * halfScaleFactor)
        g.lineTo(1 * halfScaleFactor, (1 + root2 + 1) * halfScaleFactor)
        g.lineTo((1 + root2) * halfScaleFactor, (1 + root2 + 1) * halfScaleFactor)
        g.lineTo(1 * halfScaleFactor, (1 + root2 + 1) * halfScaleFactor)
        g.lineTo(0 * halfScaleFactor, (1 + root2) * halfScaleFactor)
        g.lineTo(0 * halfScaleFactor, 1 * halfScaleFactor)
        g.lineTo(1 * halfScaleFactor, 0 * halfScaleFactor)
        g.endFill()
    }, [inSeries, isHovered, isParentHovered]);

    return (
        <Graphics
            draw={drawPrism}
            interactive={true}
            x={x}
            y={y}
            mouseover={() => setIsHovered(true)}
            mouseout={() => setIsHovered(false)}
            pointerdown={onPointerDown}
        />
    )
}