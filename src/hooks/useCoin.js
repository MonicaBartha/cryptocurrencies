import React, {Fragment, useState} from 'react';

const useCoin = (label, initialState, options) => {

    // custom hook state
    const [ state, setState ] = useState(initialState);
    
    const Select = () => (
        <Fragment>
            <label>{label}</label>
            <select
                onChange={ e => setState(e.target.value)}
                value={state}
            >
            <option value="">- Select -</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </select>
        </Fragment>
    )

    // return state, interface (Select) and function who modifies the state-setState
    return [ state, Select, setState ];
}

export default useCoin;
