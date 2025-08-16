import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisplay = true,
  currencyDisplay = true,
  disabled = false,
  className = ""
}) {
  const amountInputId = useId();

  return (
    <div className={`flex items-end ${className}`}>
      {amountDisplay && (
        <div className="w-2/5">
          <label htmlFor={amountInputId} className="block pt-2 mb-2 text-black bg-transparent font-bold text-left ">{label}</label>
          <input
            id={amountInputId}
            type="number"
            min="0"
            className="rounded-lg w-full px-1 py-2 bg-white"
            placeholder="Amount"
            value={amount}
            onChange={e => onAmountChange && onAmountChange(Number(e.target.value))}
            
          />
        </div>
      )}
      {currencyDisplay && (
        <div className="w-3/5 flex flex-col items-end pl-2">
          <label className="block pt-2 mb-2 text-black bg-transparent font-bold text-right">
            Currency Type
          </label>
          <select
            className="rounded-lg px-1 py-2 w-full align-middle justify-items-center text-center bg-white/50" 
            value={selectCurrency}
            onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}
            
          >
            {currencyOptions.map(currency => (
              <option key={currency} value={currency}>{currency.toUpperCase()}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default InputBox;
