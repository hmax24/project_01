import { useState } from "react";
import Button from "../ui/Button/Button";
import style from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState<number>(0);
  // хук useState принимает начальное значение состояния
  // возвращает кортеж, где на первом месте
  // находится переменная состояния state
  // а на втором - функция сеттер

  function handlePlusOne() {
    setCount(count + 1);
  }

  function handleMinusTwo() {
    setCount(count - 2);
    // setCount((prev) => prev - 2);
  }

  function handleClear() {
    setCount(0);
  }

  function handleRandom() {
    return setCount(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  }

  return (
    <section className={style.container}>
      <h2 className={style.heading}>Counter</h2>
      Count: {count}
      <button type="button" onClick={handlePlusOne}>
        +1
      </button>
      <Button onClick={handleMinusTwo} child="-2" />
      <Button onClick={handleClear} child="Clear" />
      <Button onClick={handleRandom} child="Random" />
    </section>
  );
}

export default Counter;
