import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;

const Price = styled.p`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`;

const Quote = ({ result }) => {
    // if the object comes empty, executes nothing
    if(Object.keys(result).length === 0) return null;
    console.log(result);
    return ( 
    <ResultDiv>
        <Price>The price is: <span>{result.PRICE}</span></Price>
        <Info>Highest price of the day: <span>{result.HIGHDAY}</span></Info>
        <Info>Lowest price of the day: <span>{result.LOWDAY}</span></Info>
        <Info>Change percentage last 24h: <span>{result.CHANGEPCT24HOUR}</span></Info>
        <Info>Last update: <span>{result.LASTUPDATE}</span></Info>
    </ResultDiv>
     )
}

Quote.propTypes = {
    result: PropTypes.object.isRequired
}
export default Quote; 