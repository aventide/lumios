import React from 'react';
import { Graphics } from '@inlet/react-pixi';

import {
    root2,
    scaleFactor,
    octWidth,
    LED_YELLOW,
    HOVER_COLOR,
    LED_HOUSING_COLOR,
} from '../constants';

export default function LED({ x, y, color, inSeries, isParentHovered, onPointerDown }) {


    const [isHovered, setIsHovered] = React.useState(false);

    function getLightFill() {

        if(isHovered || isParentHovered) {
            return HOVER_COLOR;
        }

        if (inSeries) {
            return LED_YELLOW;
        }

        return color;
    }

    const drawHousing = React.useCallback(g => {

        const halfScaleFactor = scaleFactor / 2;

        // housing
        g.clear()
        g.beginFill(LED_HOUSING_COLOR)
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

    }, []);

    const drawLight = React.useCallback(g => {

        const quarterScaleFactor = scaleFactor / 4;
        // light
        g.clear()
        g.beginFill(getLightFill())
        g.moveTo(1 * quarterScaleFactor, 0 * quarterScaleFactor)
        g.lineTo((1 + root2) * quarterScaleFactor, 0 * quarterScaleFactor)
        g.lineTo((1 + root2 + 1) * quarterScaleFactor, 1 * quarterScaleFactor)
        g.lineTo((1 + root2 + 1) * quarterScaleFactor, (1 + root2) * quarterScaleFactor)
        g.lineTo((1 + root2) * quarterScaleFactor, (1 + root2 + 1) * quarterScaleFactor)
        g.lineTo(1 * quarterScaleFactor, (1 + root2 + 1) * quarterScaleFactor)
        g.lineTo((1 + root2) * quarterScaleFactor, (1 + root2 + 1) * quarterScaleFactor)
        g.lineTo(1 * quarterScaleFactor, (1 + root2 + 1) * quarterScaleFactor)
        g.lineTo(0 * quarterScaleFactor, (1 + root2) * quarterScaleFactor)
        g.lineTo(0 * quarterScaleFactor, 1 * quarterScaleFactor)
        g.lineTo(1 * quarterScaleFactor, 0 * quarterScaleFactor)
        g.endFill()
    }, [color, inSeries, isHovered, isParentHovered])

    return (<>
        <Graphics
            draw={drawHousing}
            x={x}
            y={y}
            interactive={true}
            mouseover={() => setIsHovered(true)}
            mouseout={() => setIsHovered(false)}
            pointerdown={onPointerDown}
        />
        <Graphics
            draw={drawLight}
            x={x + (octWidth / 8)}
            y={y + (octWidth / 8)}
            interactive={true}
            mouseover={() => setIsHovered(true)}
            mouseout={() => setIsHovered(false)}
            pointerdown={onPointerDown}
        />
    </>
    )

}