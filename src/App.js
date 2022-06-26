import React from 'react';
import Info from './components/info';
import data from './components/data';
import Navbar from './components/navbar';


export default function App() {
  const heroes = data.map((item, index) => {
    return (
      <Info
        length={data.length}
        index={index}
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className="heroes-info">
        {heroes}
      </section>
    </div>
  )
}

