## Cryptocurrency Quote Simulator

This app is a cryptocurrency quote simulator, was created in React with custom hooks, multiple states, CryptoCompare API, CSS with Styled Components.<br>
Custom hooks:

- useCoin
- useCryptocurrency
  Custom hooks have own state and return the function who modify the state.<br>
  **useCoin** return state, interface (Select) and function who modifies the state-setState:
  return [ state, Select, setState ];

**CryptoCompare API** from: https://min-api.cryptocompare.com/ <br>
The API call is made inside of **useEffect** with async, await method and using axios. <br>

**Spinner** from: https://tobiasahlin.com/spinkit/

### Deploy

https://cryptocurrency-quote-simulator.netlify.app/
