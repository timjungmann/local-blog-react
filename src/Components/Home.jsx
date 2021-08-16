import React from 'react';
import Clock from 'react-live-clock';

export default function Home() {
  return (
    <h1>It's <Clock format={"HH:mm:ss"} ticking={true}/><span className="desktop-only"> right now</span>, <br className="mobile-only"/>what are you up to?</h1>
  )
}
