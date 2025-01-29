"use client"
import React, { useState } from 'react';
import ReactCurvedText from 'react-curved-text';

const ScrollIndicator = () => {
    const [width, setWidth] = useState(150);
    const [height, setHeight] = useState(150);
    const [cx, setCx] = useState(width / 2);
    const [cy, setCy] = useState(height / 2);
    const [rx, setRx] = useState(width / 3);
    const [ry, setRy] = useState(height / 3);
    const [startOffset, setStartOffset] = useState(0);
    const [reversed, setReversed] = useState(false);
    const [text, setText] = useState('S C R O L L  S C R O L L  S C R O L L');
    const [fontSize, setFontSize] = useState(14);
    const [textPathFill, setTextPathFill] = useState("#fff");
    const [dy, setDy] = useState(0);
    const [fill, setFill] = useState();

    const textProps = fontSize ? { style: { fontSize: fontSize } } : null;
    const textPathProps = textPathFill ? { fill: textPathFill } : null;
    const tspanProps = dy ? { dy: dy } : null;
    const ellipseProps = fill ? { style: `fill: ${fill}` } : null;

    return (
        <div className='realtive'>

            <ReactCurvedText
                width={width}
                height={height}
                cx={cx}
                cy={cy}
                rx={rx}
                ry={ry}
                startOffset={startOffset}
                reversed={reversed}
                text={text}
                textProps={textProps}
                textPathProps={textPathProps}
                tspanProps={tspanProps}
                ellipseProps={ellipseProps}
                svgProps={{ className: 'rotating-curved-text' }} />

                <div className='indicator h-12 w-12  absolute bottom-0 right-0 -translate-x-[105%]  -translate-y-[105%] rounded-full overflow-hidden'>
                    <div className="scroll-progress-placeholder absolute inset-0 h-full w-full bg-white rounded-full opacity-30 backdrop-blur-sm"></div>
                    <div className="scroll-progress absolute inset-0 h-1/2 w-full bg-green-500"></div>
                </div>
        </div>
    );
};

export default ScrollIndicator;
