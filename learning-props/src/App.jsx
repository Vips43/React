import React from 'react'
import Card from './components/card/Card'
import img from './assets/img.jpg'
import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpeg'
import img4 from './assets/img4.jpeg'


function App() {
  return (
    <div className='div'>
      <Card 
      image={img}
      title="procduct-1"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis aliquid ullam aperiam amet."
      price="100"
      bgcolor="#B9375D"
      btnColor='#D25D5D'
      />
      <Card 
      image={img1}
      title="procduct-1"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis aliquid ullam aperiam amet."
      price="100"
      bgcolor="#D25D5D"
      btnColor='#B9375D'
      />
      <Card 
      image={img2}
      title="procduct-1"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis aliquid ullam aperiam amet."
      price="100"
      bgcolor="#D96F32"
      btnColor='#D3AF37'
      />
      <Card 
      image={img3}
      title="procduct-1"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis aliquid ullam aperiam amet."
      price="100"
      bgcolor="#EB5B00"
      btnColor='#FED16A'
      />
      <Card 
      image={img4}
      title="procduct-1"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis aliquid ullam aperiam amet."
      price="100"
      bgcolor="#FFDE63"
      btnColor='#FFF4A4'
      />
      
    </div>
  )
}

export default App
