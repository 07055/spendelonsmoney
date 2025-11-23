// import {  create } from 'zustand'
import * as IMAGES from "../images"
import { useState } from 'react';




const Items = [
  { id: 1, item: "Apartments", price: 1500, image: IMAGES.apartments },
  { id: 2, item: "Bull", price: 1200, image: IMAGES.bull },
  { id: 3, item: "Cows", price: 900, image: IMAGES.cows },
  { id: 4, item: "Diamond Ring", price: 5000, image: IMAGES.diamondRing },
  { id: 5, item: "Donation", price: 50, image: IMAGES.donation },
  { id: 6, item: "F1 Car", price: 2500000, image: IMAGES.f1car },
  { id: 7, item: "Family Home", price: 150000, image: IMAGES.familyHome },
  { id: 8, item: "Ferrari", price: 300000, image: IMAGES.ferrari },
  { id: 9, item: "Ford F150", price: 30000, image: IMAGES.fordF150 },
  { id: 10, item: "Gold Bar", price: 65000, image: IMAGES.goldBar },
  { id: 11, item: "Helicopter", price: 1200000, image: IMAGES.helicopter },
  { id: 12, item: "High-End Restaurant", price: 1500, image: IMAGES.highEndRestaurant },
  { id: 13, item: "Horses", price: 20000, image: IMAGES.horses },
  { id: 14, item: "Hulu", price: 10, image: IMAGES.hulu },
  { id: 15, item: "iPhone 17", price: 1500, image: IMAGES.iphone17 },
  { id: 16, item: "land", price: 1500, image: IMAGES.land },
  { id: 17, item: "Luxuru-wine", price: 1500, image: IMAGES.luxuryWine },
  { id: 18, item: "macbook", price: 1500, image: IMAGES.macbook },
  { id: 19, item: "mansion", price: 1500, image: IMAGES.mansion },
  { id: 20, item: "monster-truck", price: 1500, image: IMAGES.monsterTruck },
  { id: 21, item: "movie", price: 1500, image: IMAGES.movie },
  { id: 22, item: "netflix", price: 1500, image: IMAGES.netflix },
  { id: 23, item: "private-jet", price: 1500, image: IMAGES.privateJet },
  { id: 24, item: "resort-center", price: 1500, image: IMAGES.resortCenter },
  { id: 25, item: "rolex", price: 1500, image: IMAGES.rolex},
  { id: 26, item: "samsung", price: 1500, image: IMAGES.samsung },
  { id: 27, item: "ship", price: 1500, image: IMAGES.ship },
  { id: 28, item: "spottify", price: 1500, image: IMAGES.spotify },
  { id: 29, item: "Malls", price: 1500, image: IMAGES.supermarket},
  { id: 30, item: "Tesla", price: 1500, image: IMAGES.tesla },
  { id: 31, item: "vacation", price: 1500, image: IMAGES.vacation},
  { id: 32, item: "yatch", price: 1500, image: IMAGES.yacht },
  { id: 33, item: "youtube", price: 1500, image: IMAGES.youtube },
];



interface ItemsList{
    id:number
    item:string
    price:number
    image:string
}


const ItemsList=()=>{
    const[count,setCount]=useState(455_991_870_000)
    

    function buyItems(price:number){
        
        setCount(count-price)
        
    }
    function sellItems(price:number){
        
        setCount(count+price)
        
    }
    return(
        <div >
        {Items.map((Product)=>(
            <div key={Product.id}>
                <img src={Product.image} alt={Product.item} />
                <h3>{Product.item}</h3>
                <p>Price:${Product.price}</p>

               <div>
                 <button onClick={() => sellItems(Product.price)}>Sell</button>
                <button onClick={() => buyItems(Product.price)}>Buy</button>
               </div>
                
            </div>
        ))}
        </div>
    )
    
}

export default ItemsList


