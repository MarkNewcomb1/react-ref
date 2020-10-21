import React, {useState, useRef, useEffect } from 'react'

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
