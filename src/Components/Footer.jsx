import { useState, useEffect } from "react";

export default function Footer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    alert("count render");
  }, [count]);

  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
        className="p-2 bg-blue-500 text-white rounded-md"
       >
        Click Me: {count}
      </button>
    </>
  );
}
