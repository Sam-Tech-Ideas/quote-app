import React,{useState, useEffect} from 'react'
import './style.css'

const Card = () => {
  const [quotes, setQuotes] = useState("");

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    })
  };

  useEffect(() => {
        getQuote()
  }, [])

  return (
    <div className='min-height-[100vh] flex justify-center mx-auto m-5 text-white '>

        <div className="p-3 bg-indigo-500  rounded-xl  min-height-[100px] max-w-[450px] min-h-[150px] m-20 mt-[250px] shadow-lg shadow-slate-500">

          <p className='p-3'>{quotes.text}</p>

            <p className="p-2" >Author: {quotes.author}</p>

               <button onClick={getQuote} className=' hover:bg-blue-700  hover:text-blue-300 bg-blue-500 rounded-xl ml-2 py-1 px-3'>Get quote
                </button>
               <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} 
               target="_blank" rel="noopener noreferrer">
                <button className="bg-teal-500 py-1 px-3 rounded-lg m-2 hover:bg-green-700">
                Tweet
              </button>
               </a>
              
         </div>
     </div>
  )
}

export default Card