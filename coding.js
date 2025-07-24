import React, { useState } from "react";
import "./style.css";

const CURRENCIES = ["USD", "EUR", "INR"];
const RATES = {
  USD: { EUR: 0.86, INR: 80 },
  EUR: { USD: 1.16, INR: 93 },
  INR: { USD: 0.0125, EUR: 0.0107 },
};

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(RATES["USD"]["INR"] * 1);
  const [editing, setEditing] = useState("from");

  const handleFromAmount = (e) => {
    const val = e.target.value;
    setFromAmount(val);
    setToAmount((val * RATES[fromCurrency][toCurrency]).toFixed(2));
    setEditing("from");
  };

  const handleToAmount = (e) => {
    const val = e.target.value;
    setToAmount(val);
    setFromAmount((val / RATES[fromCurrency][toCurrency]).toFixed(2));
    setEditing("to");
  };

  const handleFromCurrency = (e) => {
    const newFrom = e.target.value;
    setFromCurrency(newFrom);
    const rate = RATES[newFrom][toCurrency];
    if (editing === "from") {
      setToAmount((fromAmount * rate).toFixed(2));
    } else {
      setFromAmount((toAmount / rate).toFixed(2));
    }
  };

  const handleToCurrency = (e) => {
    const newTo = e.target.value;
    setToCurrency(newTo);
    const rate = RATES[fromCurrency][newTo];
    if (editing === "from") {
      setToAmount((fromAmount * rate).toFixed(2));
    } else {
      setFromAmount((toAmount / rate).toFixed(2));
    }
  };

  return (
    <div>
      <h2>Simple Currency Converter</h2>
      <div className="amount-from">
        <input type="number" value={fromAmount} onChange={handleFromAmount} />
        <select value={fromCurrency} onChange={handleFromCurrency}>
          {CURRENCIES.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="amount-to">
        <input type="number" value={toAmount} onChange={handleToAmount} />
        <select value={toCurrency} onChange={handleToCurrency}>
          {CURRENCIES.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: 16 }}>
        1 {fromCurrency} = {RATES[fromCurrency][toCurrency]} {toCurrency}
      </div>
    </div>
  );
}
