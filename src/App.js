
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './style.css';

function App() {
 
  const [quotes, setQuotes] = useState([])
  const [currentQuote, setCurrentQuote] = useState("The only way to do great work is to love what you do.")
  const [currentAuthor, setCurrentAuthor] = useState("Steve Jobs")

  useEffect(()=>{
    // api();
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then((res)=>res.json())
    .then((res)=>{
      const data = res.quotes.map((i)=>({
        author: i.author,
        quote:i.quote
      }));
    setQuotes(data);
    })
  },[])

  // const api = async () =>{
  //   const response = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
  //   var data = await response.json()
  //   // console.log(data)
  //   setQuotes(data.quotes)
  //   console.log(quotes)
  // }
  // var currentQuote = '', currentAuthor = '';
  const getRandomQuote = () => Math.floor(Math.random()*quotes.length);

  const getQuote =()=>{
    let randomQuote = getRandomQuote()

    setCurrentQuote(quotes[randomQuote].quote)
    setCurrentAuthor(quotes[randomQuote].author)
  }

  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'];

    var color;
    const getColor = ()=>{
    color = Math.floor(Math.random()*colors.length)
    console.log(color)}
    // $(".app").animate(
    //   {
    //     backgroundColor: "green",
    //     color: colors[color] },
    
    //   1000);
    // }
    

   $(document).ready( function(){
    $("button").on("click",function(){
      $('.app').animate(
       {
         backgroundColor:"red",
         color: "red" },
     
       1000); } );
   });


  return (
    
    <div className="app" style={{opacity:"1"}}>
      <div className="content">
        <button onClick={()=>{getQuote(); getColor()}}>New Quote</button>
        <h3>{`" ${currentQuote} "`}</h3>
        <p>- {currentAuthor}</p>
      </div>
      <p>- By Manju</p>
    </div>
  );
}

export default App;





    // const response = await fetch("https://api.covid19india.org/data.json")
    // console.log(response)
    // var data = await response.json()
    // setQuotes(data)
    
    // console.log(data.quotes)