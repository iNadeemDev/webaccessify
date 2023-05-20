import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'antd';
const Card = ({ item }) => {
    return (
        <>
            <div className="card"
                style={{
                    margin: '3rem',
                    padding:'2rem',
                    height: 'auto',
                    // width: '20vw',
                    backgroundColor: '#f8fcfb7f',
                    border:'2px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '2rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    fontSize: 'clamp(0.5rem,1.2vw,2rem)'
                }}
            >
                <h2 style={{
                    marginTop: '0rem',
                    color:'rgb(35, 35, 79)',
                    fontSize: 'clamp(1.5rem,2.3vw,3rem)',
                }}>{item.size}</h2>
                <div className="PriceButtons">
                    <div className="Price"
                        style={{
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: '2rem',
                            padding: '1rem',
                            border:'2px solid black',
                            textAlign: 'center',
                            height: 'clamp(3rem,4vw,6rem)',
                            width: 'clamp(1rem,17vw,22rem)',
                            fontSize: 'clamp(1rem,2vw,2.2rem)',
                            margin: '3rem'
                        }}
                    >
                        {item.price}
                    </div>
                    <Link to='/sign-up'>
                    <Button
                        style={{
                            padding:'0px',
                            backgroundColor: 'white',
                            border:'2px solid black',
                            borderRadius: '2rem',
                            height: 'clamp(3rem,4vw,6rem)', 
                            width: 'clamp(10rem,17vw,22rem)',
                            fontSize: 'clamp(1rem,2vw,2.2rem)'
                        }}
                    >
                        Start Free Trial
                    </Button>
                    </Link> 
                </div>

            </div>
        </>
    )
}

export default Card