import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useCoin from '../hooks/useCoin';
import useCryptocurrency from '../hooks/useCryptocurrency';
import axios from 'axios';
import PropTypes from 'prop-types';

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

const Form = ({setAmountCoin, setAmountCrypto}) => {

    // state of cryptocurrencies list
    const [ cryptoList, setCryptoList ] = useState([]);

    const [ error, setError ] = useState(false);

    const COINS = [
        {code: 'USD', name: 'US Dollar'},
        {code: 'MXN', name: 'Mexican Peso'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'British Pound'}
    ]
    // use of hook useCoin. Array destructuring 
    const [ coin, SelectCoin ] = useCoin('Select Coin ', '', COINS);

    // use of hook useCryptocurrency 
    const [ cryptocurrency, SelectCrypto ] = useCryptocurrency('Select Cryptocurrency', '', cryptoList)

    // API call

    useEffect( () => {
        const callAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);
            setCryptoList(result.data.Data);
        }
        callAPI();
    }, [])

    // when the user press Calculate
    const cryptoQuote = e => {
        e.preventDefault();

        // validate if both options have selection (coin and crypto)
        if(coin === '' || cryptocurrency === '') {
            setError(true);
            return;
        }
        // send data to main component
        setError(false);
        setAmountCoin(coin);
        setAmountCrypto(cryptocurrency);
    }

    return (
        <form
            onSubmit={cryptoQuote}    
    >
            { error ? <Error message="All fields are required." /> : null }
            <SelectCoin />

            <SelectCrypto />

            <Button
                type="submit"
                value="Calculate" />
        </form>
    )
}
Form.propTypes = {
    setAmountCoin: PropTypes.func.isRequired,
    setAmountCrypto: PropTypes.func.isRequired
}
export default Form;
