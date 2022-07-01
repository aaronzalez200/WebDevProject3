import React from 'react';
import Info from './components/info';
import data from './components/data';
import Navbar from './components/navbar';

export default function App() {
  const [dota2Data, setDota2Data] = React.useState({})
  React.useEffect(function() {
    fetch("https://api.opendota.com/api/players/129050083")
        .then(res => res.json())
        .then(data => setDota2Data(data))
}, [])

  const heroes = data.map((item, index) => {
    return (
      <Info
        length={data.length}
        index={index}
        key={item.id}
        item={item}
      />
    )
  }, [])

  return (
    <div>
      <Navbar image={dota2Data.profile.avatarfull}/> 
      <section className="heroes-info">
        {heroes}
      </section>
    </div>
  )
}