import React from 'react';

const Cardx = ({robot}) => {
    const {id,name,username,email} = robot
    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} />
            <h2> {name} </h2>
            <h4> {username} </h4>
            <p> {email} </p>
        </div>
    )
}
export default Cardx