import React from 'react'

const Input = (props) => {
    const onInputChange = (e) => {
        props.handleInputChange(e);
    }

    return (
        <input className='border border-gray-400 py-2 px-5 rounded-lg' id={props.id} value={props.value} type={props.type} placeholder={props.placeholder} onChange={onInputChange} />
    )
}

export default Input