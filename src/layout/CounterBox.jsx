import React, { useEffect } from "react";

const CountersBox = ({ counters, toggleCounter, onCountersUpdate }) => {
  useEffect(() => {
    const intervals = counters.map((counter) => {
      if (counter.isRunning) {
        return setInterval(() => {
          onCountersUpdate((prevCounters) =>
            prevCounters.map((e) =>
              e.id === counter.id ? { ...e, value: e.value + 1 } : e
            )
          );
        }, 1000);
      }
      return null;
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [counters, onCountersUpdate]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 w-full h-full">
      {counters.map((counter) => (
        <div
          key={counter.id}
          className="text-black flex flex-col items-center justify-center font-normal " >
          <button
            onClick={() => toggleCounter(counter.id)}
            className="px-2 py-2 rounded-md bg-white mb-4 text-xl"
          >
            {counter.isRunning ? "Stop Counter" : "Start Counter"}
          </button>
          <p className="text-lg font-normal mb-4 rounded-lg shadow-md bg-white w-full h-20 flex justify-center items-center">
            {counter.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountersBox;
