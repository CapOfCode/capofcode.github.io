import React from 'react'

const ScrollIndicator = () => {
    return (
        <div>
            <svg className='continue-rotate-animation' height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                <path
                    id="ellipse-id-r2-"
                    style={{ fill: "none" }}
                    d="M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0"
                ></path>
                <text
                    style={{
                        fontSize: "11px",
                        letterSpacing: "6.5px",
                        fill: "rgb(244, 244, 244)",
                    }}
                >
                    <textPath xlinkHref="#ellipse-id-r2-" startOffset="0">
                        <tspan>SCROLL DOWN SCROLL DOWN</tspan>
                    </textPath>
                </text>
            </svg>

        </div>
    )
}

export default ScrollIndicator