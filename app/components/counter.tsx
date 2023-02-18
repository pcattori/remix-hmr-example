import * as React from "react";

export default function Counter({ label }: { label: string }) {
  let [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {label} Counter: {count}
    </button>
  );
}
