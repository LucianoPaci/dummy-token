import React,  {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import { useDispatch,useSelector } from 'react-redux'
import Token from './artifacts/contracts/Token.sol/Token.json'
import { getBalance, sendCoins } from "./actions"
import { AppState } from './reducers';

const tokenAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

function App() {


  const dispatch = useDispatch()
  const [userAccount, setUserAccount] = useState("")
  const [amount, setAmount] = useState(0)

  

  const allState = useSelector((state: AppState) => state.main)

  const handleGetBalance = (token: string, abi: any) => () => {
    dispatch(getBalance({token, abi}))
  }

  const handleSendCoins = (token: string, abi: any, to: string, amount: string|number) => () => {
    dispatch(sendCoins({token, abi, to, amount}))
  }
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleGetBalance(tokenAddress, Token.abi)}>
          Get Balance
        </button>


        <br />
        <input
          onChange={(e) => setUserAccount(e.target.value)}
          placeholder={"Account ID"}
        />
        <input
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder={"Amount"}
          type={"number"}
        />

        <button
          onClick={handleSendCoins(
            tokenAddress,
            Token.abi,
            userAccount,
            amount
          )}
        >
          Send Coins
        </button>

        <div>
          <pre>{JSON.stringify(allState, null, 2)}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
