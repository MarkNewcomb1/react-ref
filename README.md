## React Refs

React refs are strongly associated with the DOM. This has been true in the past, but not anymore since React introduced React Hooks. Ref means just reference, so it can be a reference to anything (DOM node, JavaScript value, ...). 

The useRef Hook returns us a mutable object which stays intact over the lifetime of a React component. 

**Rule of thumb: Whenever you need to track state in your React component which shouldn't trigger a re-render of your component, you can use React's useRef Hooks to create an instance variable for it.**