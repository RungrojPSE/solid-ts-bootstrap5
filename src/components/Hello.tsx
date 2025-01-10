import type { Component } from 'solid-js';
import data from "@assets/data.json"

const Hello: Component = () => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Hello;
