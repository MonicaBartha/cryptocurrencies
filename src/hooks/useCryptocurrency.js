import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 2rem;
    letter-spacing: 0.05em;
    display: block;
`;

const SelectInput = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCryptocurrency = (label, initialState, options) => {

    // custom hook state
    const [ state, setState ] = useState(initialState);
    
    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectInput
                onChange={ e => setState(e.target.value)}
                value={state}
            >
            <option value="">- Select -</option>
                {options.map(option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            </SelectInput>
        </Fragment>
    )

    // return state, interface (Select) and function who modifies the state-setState
    return [ state, SelectCrypto, setState ];
}

export default useCryptocurrency;

