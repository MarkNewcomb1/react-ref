import React, { useState, useRef, useEffect } from 'react'

const ComponentWithRefRead = () => {
    const [text, setText] = useState('Some text...');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const ref = useRef();

    useEffect(() => {
        const { width } = ref.current.getBoundingClientRect();
        document.title = `Width:${width} Text: ${text}`;
    }, [text]);

    return (
        <div>
            <input type="text" value={text} onChange={(e) => handleOnChange(e)} />
            <div>
                <span ref={ref}>{text}</span>
            </div>
        </div>
    );
}

export default ComponentWithRefRead



// A better approach to the previous example is 
// using a so called callback ref instead. 
// With a callback ref, you don't have to use 
// useEffect and useRef hooks anymore, 
// because the callback ref gives you 
// access to the DOM node on every render:

// function ComponentWithRefRead() {
//   const [text, setText] = React.useState('Some text ...');

//   function handleOnChange(event) {
//     setText(event.target.value);
//   }

//   const ref = (node) => {
//     if (!node) return;

//     const { width } = node.getBoundingClientRect();

//     document.title = `Width:${width}`;
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleOnChange} />
//       <div>
//         <span ref={ref}>{text}</span>
//       </div>
//     </div>
//   );
// }
// A callback ref is nothing else than a function 
// which can be used for the HTML element's ref 
// attribute in JSX. This function has access to the DOM node 
// and is triggered whenever it is used on a HTML element's 
// ref attribute. Essentially it's doing the same as our side-effect 
// from before, but this time the callback ref itself notifies 
// us that it has been attached to the HTML element.

// Before when you used the useRef + useEffect combination, 
// you were able to run the your side-effect with the help 
// of the useEffect's hook dependency array for certain times. 
// You can achieve the same with the callback ref by enhancing 
// it with React's useCallback Hook to make it only run 
// for the first render of the component:

// function ComponentWithRefRead() {
//   const [text, setText] = React.useState('Some text ...');

//   function handleOnChange(event) {
//     setText(event.target.value);
//   }

//   const ref = React.useCallback((node) => {
//     if (!node) return;

//     const { width } = node.getBoundingClientRect();

//     document.title = `Width:${width}`;
//   }, []);

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleOnChange} />
//       <div>
//         <span ref={ref}>{text}</span>
//       </div>
//     </div>
//   );
// }
// You could also be more specific here with the dependency array 
// of the useCallback hook. For example, execute the callback 
// function of the callback ref only if state (here text) has 
// changed and, of course, for the first render of the component:

// function ComponentWithRefRead() {
//   const [text, setText] = React.useState('Some text ...');

//   function handleOnChange(event) {
//     setText(event.target.value);
//   }

//   const ref = React.useCallback((node) => {
//     if (!node) return;

//     const { width } = node.getBoundingClientRect();

//     document.title = `Width:${width}`;
//   }, [text]);

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleOnChange} />
//       <div>
//         <span ref={ref}>{text}</span>
//       </div>
//     </div>
//   );
// }
// However, then we would end up again with the same behavior 
// like we had before without using React's useCallback 
// Hook and just having the plain callback ref in place -- 
// which gets called for every render.


