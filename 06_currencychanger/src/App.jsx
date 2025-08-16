import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import Input from './components/InputBox';
import { PixelCard } from './components/card/card.jsx';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo && to in currencyInfo) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  return (
    <>
    <PixelCard variant='pink'>
      HELLO

    </PixelCard>

    
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      }}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
  <div className='w-full mb-1'>
    <Input
      label={"From"}
      amount={amount}
      onAmountChange={setAmount}
      currencyOptions={options}
      onCurrencyChange={setFrom}
      selectCurrency={from}
    />
  </div>
  
  <div className="flex justify-center items-center mt-12">
    <button
      type="button"
      className="border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
      onClick={swap}
    >
      Swap
    </button>
  </div>
  
  <div className='w-full mb-4 mt-1'>
    <Input
      label={"To"}
      amount={convertedAmount}
      onAmountChange={setConvertedAmount}
      currencyOptions={options}
      onCurrencyChange={setTo}
      selectCurrency={to}
      amountDisplay={true}
      disabled
    />
  </div>
  <button
    type="submit"
    className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
  >
    Convert {from.toUpperCase()} to {to.toUpperCase()}
  </button>
</form>

        </div>
      </div>
    </div></>
    
  );
}

export default App;
