import React from 'react'
import Card from './Card'
import { content1 } from '../../data'
import { content2 } from '../../data'

const Cards = ({value}) => {
    return (
        <>
            <div className="Cards" style={{
                display: 'flex',
                flexDirection: 'Row',
                flexWrap: 'wrap',
                justifyContent:'center',
                alignItem:'center',
                textAlign:'center',

            }}>
                {value === "a" ?
                    content1.map(item => (
                        <Card item={item} key={item.id} />
                    ))
                    :
                    content2.map(item => (
                        <Card item={item} key={item.id} />
                    ))
                }
            </div>
        </>
    )
}

export default Cards