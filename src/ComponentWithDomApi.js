import React, { useRef, useEffect } from 'react'

export const ComponentWithDomApi = ({ label, value, isFocus }) => {
    const ref = useRef(); // (1)
    useEffect(()=> {
        if (isFocus) {
            ref.current.focus(); // (3)
        }
    }, [isFocus])
    return (
        <label>
            {/* (2) */}
            {label}: <input type="text" value={value} ref={ref} />
        </label>
    );
}

export default ComponentWithDomApi;


// we are using React's useRef Hook to create a ref object (1). 
// In this case, we don't assign any initial value to it, because that 
// will be done in the next step (2) where we provide the ref object 
// to the HTML element as ref HTML attribute. 
// React automatically assigns the DOM node of this HTML 
// element to the ref object for us. 
// Finally (3) we can use the DOM node, which is 
// now assigned to the ref's current property, 
// to interact with its API.