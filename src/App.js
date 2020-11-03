import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import image from './cryptomonedas.png';
import Form from './components/Form';
import Quote from './components/Quote';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  letter-spacing: 0.05em;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  // state for amount inputs 
  const [ amountCoin, setAmountCoin ] = useState('');
  const [ amountCrypto, setAmountCrypto ] = useState(''); 
  const [ result, setResult ] = useState({});
  const [ load, setLoad ] = useState(false);

  useEffect( () => {
    const quoteCrypto = async () => {
      // avoid the first execution 
      if( amountCoin === '' ) return;
      
      // API call to obtain the quote
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${amountCrypto}&tsyms=${amountCoin}`;

      const result = await axios.get(url);

      // show the spinner while loading result
      setLoad(true);

      // hide the spinner when show the result
      setTimeout( () => {

        // hide spinner
        setLoad(false);
        // show quote
        setResult(result.data.DISPLAY[amountCrypto][amountCoin]);

      }, 2000);
    }
    quoteCrypto();

  }, [amountCoin, amountCrypto ]);

  // Show spinner or result. Conditional loading of components
  // if load is true show the Spinner, if false show Quote
  const component =  (load)  ? <Spinner /> : <Quote result={result} />

  return (
    <Container>
      <div>
          <Image
          src={image}
          alt="cryptocurrencies"
          />
      </div>
      <div>
        <Heading>
          Instant Cryptocurrency Quote
        </Heading>
        <Form
          setAmountCoin={setAmountCoin}
          setAmountCrypto={setAmountCrypto}
        />
        {component}
      </div>
    </Container>
  );
}

export default App;
