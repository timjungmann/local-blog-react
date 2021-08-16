import React from 'react';
import Clock from 'react-live-clock';

export default function Home() {
  return (
    <h1>It's <Clock format={"HH:mm:ss"} ticking={true}/> right now, what are you up to?</h1>
  )
}
