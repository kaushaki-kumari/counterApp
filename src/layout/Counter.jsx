import React, { useState } from "react";
import CountersBox from "./CounterBox";

function Counter() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters((prevCounters) => [
      ...prevCounters,
      { id: prevCounters.length, value: 0, isRunning: false },
    ]);
  };

  const toggleCounter = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id
          ? { ...counter, isRunning: !counter.isRunning }
          : counter
      )
    );
  };

  const total = counters.reduce((sum, counter) => sum + counter.value, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020024] via-[#4b4b9a] to-[#ffffff] text-white">
      <div className="flex justify-between items-center">
        <button
          onClick={addCounter}
          className="px-4 py-2 bg-[#212529] rounded-[.5rem] text-[1.25rem] hover:bg-[#121417] font-sans m-4 border-[3.5px] border-[#363b40]">
          Add Counter
        </button>
        <h2 className="px-4 py-2 bg-[#212529] rounded-[.3rem] text-[1.25rem] hover:bg-[#121417] font-sans m-4">
          {total}
        </h2>
      </div>
      <CountersBox
        counters={counters}
        toggleCounter={toggleCounter}
        onCountersUpdate={setCounters}
      />
    </div>
  );
}

export default Counter;
