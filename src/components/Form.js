import React from 'react';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Form = () => {

    const COINS = [
        {code: 'USD', name: 'US Dollar'},
        {code: 'MXN', name: 'Mexican Peso'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'British Pound'}
    ]
    // use of hook useCoin. Array destructuring 
    const [ state, Select ] = useCoin('Select Coin ', '', COINS);

    return (
        <form>
            <Select />
            <Button
                type="submit"
                value="Calculate" />
        </form>
    )
}

export default Form;
