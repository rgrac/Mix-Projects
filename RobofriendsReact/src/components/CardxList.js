import React from 'react';
import Cardx from './Cardx';


const CardxList = ({robots}) => {
    return (
        <div>
            {
                robots.map((item,i) => {
                    return <Cardx robot={item} key={i}/>
                })
            }
        </div>
    )
}
export default CardxList