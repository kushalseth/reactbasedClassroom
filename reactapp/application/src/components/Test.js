import React, { useState, Component } from 'react';

export default function Test() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    console.log("Print Me");


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    );
}