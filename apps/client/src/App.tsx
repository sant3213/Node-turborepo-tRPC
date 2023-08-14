import { useState } from 'react';
import './App.css'
import { Card } from './components/Card/card.tsx'
import Car from './objects/car.tsx';
import Filter from './components/Filter/filter.tsx';

function App() {
const carsList: Car[] = [{
  id: 1,
  brand: 'BMW Serie 8',
  line: 'M8 Competition Grand Coupe',
  metadata:'2019 | 178.000km | 260CV | automatic',
  combustionType: 'Diesel',
  price: 250000000,
  imgPath:'BMWM8'
},
{
  id: 2,
  brand: 'VOLVO',
  line: 'XC90 RECHARGE ULTIMATE T8',
  metadata:'2023 | 0km | 462HP | automatic',
  combustionType: 'Hybrid',
  price: 444990000,
  imgPath:'volvo'
},
{
  id: 2,
  brand: 'BMW',
  line: 'XM',
  metadata:'2023 | 0km | 653HP | automatic',
  combustionType: 'Hybrid',
  price: 999900000,
  imgPath:'BMWXM'
}];
const [cars, setCars] =useState(carsList);
  return (
    <>
      <div className="grid-container">
        <header className="grid-item grid-header">
          <h1>Header</h1>
        </header>

        <div className="grid-item grid-filters">
          <h1>Filters</h1>
          <Filter></Filter>
         {/**
          * By min and max price
          * kind of car
          * Brand
          * Line
          * Year since to
          * Location
          * km
          * New or used
          */}
        </div>

        <div className="grid-item card-container">
          <h1>Cards Cars</h1>
          <div className="cards-grid-container">
           
            {cars.map((car) => 
             <div className="grid-item">
              <Card key={car.id} {...car}/></div>
            )}
              
          </div>
        </div>
        <div className="grid-item grid-footer">
          <h1>Footer</h1>
        </div>
      </div>
    </>
  )
}

export default App
