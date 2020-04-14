import React, { useEffect } from 'react'

function Cars() {
    useEffect(() => {
        fetch("/cars").then(response => response.json()).then(data => {console.log(data);})
    }, [])
    return (
        <div>
            <h1>Hi</h1>
        </div>
    )
}

export default Cars
