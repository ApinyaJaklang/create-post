import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Input({ addPost }: any) {
    const [input, setInput] = useState<string>('');

    function onChange(event: React.FormEvent<HTMLInputElement>) {
        setInput(event.currentTarget.value);
    }

    function onKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Enter' && input) {
            addPost(input);
            setInput('');
        }
    }

    return (
        <div className="Input">
            <div className="Input__header">Create Post</div>
            <input 
                className="Input__field" 
                value={input}
                type="text"
                placeholder="What are you thinking..."
                onChange={onChange}
                onKeyDown={onKeyDown} />
        </div>
    ) 
}

Input.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default Input;