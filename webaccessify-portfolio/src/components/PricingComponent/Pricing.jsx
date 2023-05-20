import React, { useState } from 'react'
import './Pricing.css'
import { Radio } from 'antd';
import Cards from './Cards';
const Pricing = () => {
    const [value, setValue] = useState("");
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <section className="PriceContainer">
                <div className="PriceContent">
                    <div className="headings">
                        <h1>WebAccessify's Pricing Plan<br />
                            AI-Powered Accessibility Widget</h1>
                    </div>

                    <div className="Buttons">
                        <Radio.Group defaultValue="a" buttonStyle="solid" size="large">
                            <Radio.Button
                                style={{
                                    backgroundColor: isActive ? " rgb(20, 20, 61)" : "white",
                                    color: isActive ? "white" : "black",
                                    border: 'none',
                                    textAlign: 'center',
                                    fontSize: 'clamp(1rem,1.5vw,2rem)',
                                }}

                                value="a" onClick={() => setValue("a") && setIsActive(!isActive)}>Monthly Plan</Radio.Button>
                                {console.log(isActive)}
                            <Radio.Button
                                style={{
                                    backgroundColor: isActive ? "white" : "rgb(20, 20, 61)",
                                    color: isActive ? "black" : "white",
                                    border: 'none',
                                    textAlign: 'center',
                                    fontSize: 'clamp(1rem,1.5vw,2rem)',
                                }}
                                value="b" onClick={() => setValue("b")&& setIsActive(!isActive)}>Yearly Plan</Radio.Button>
                        </Radio.Group>
                        {console.log(value)}
                    </div>
                    <Cards value={value} />

                </div>
            </section>
        </>
    )
}

export default Pricing
