import React, { useEffect, useRef } from "react";

const CountersBox = ({ counters, toggleCounter, onCountersUpdate }) => {
  const intervalsRef = useRef(new Map());

  useEffect(() => {
    counters.forEach((counter) => {
      const existingInterval = intervalsRef.current.get(counter.id);

      if (counter.isRunning && !existingInterval) {
        const intervalId = setInterval(() => {
          onCountersUpdate((prevCounters) =>
            prevCounters.map((e) =>
              e.id === counter.id ? { ...e, value: e.value + 1 } : e
            )
          );
        }, 1000);
        intervalsRef.current.set(counter.id, intervalId);
      }

      if (!counter.isRunning && existingInterval) {
        clearInterval(existingInterval);
        intervalsRef.current.delete(counter.id);
      }
    });

    return () => {
      intervalsRef.current.forEach((intervalId) => clearInterval(intervalId));
      intervalsRef.current.clear();
    };
  }, [onCountersUpdate, ...counters.map((c) => c.isRunning)]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 w-full h-full">
      {counters.map((counter) => (
        <div
          key={counter.id}
          className="text-black flex flex-col items-center justify-center font-normal"
        >
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
