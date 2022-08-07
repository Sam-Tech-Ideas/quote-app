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

        <div className="p-3 bg-indigo-500  rounded-xl  min-height-[100px] max-w-[450px] min-h-[150px] m-20 shadow-lg shadow-slate-500">

          <p className='p-3'>{quotes.text}</p>

            <p className="p-2">{quotes.author}</p>

               <button className=  ' hover:bg-blue-700  hover:text-blue-300 bg-blue-500 rounded-xl ml-2 py-1 px-3'>Share</button>
         </div>
     </div>
  )
}

export default Card