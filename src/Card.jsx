import React,{useState, useEffect} from 'react'

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
    <div className='App flex justify-center mx-auto m-5 text-white'>
      <div className="bg-green-500 m-5 rounded-xl w-full md-min-height ">
      <p className='p-3'>{quotes.text}</p>
     <p className="p-2">{quotes.author}</p>
     <button className='btn bg-blue-500 flex justify-end'>Share</button>
      </div>
    
    </div>
  )
}

export default Card