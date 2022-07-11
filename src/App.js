import React, { useState } from "react"
import "./App.css"
import data from "./components/data"

/*
inspira from this website =====>  https://randomwordgenerator.com/paragraph.php
*/
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    // if you do want unnessary referse
    e.preventDefault()

    // check what is the count value
    let num = parseInt(count)
    if (num <= 0) {
      num = 1
    }
    // yadi hamro data bhada badi xa bhane
    if (count > 15) {
      num = 15
    }
    setText(data.slice(0, num))
  }
  return (
    <>
      <main>
        <section>
          <div className='heading'>
            <h1>Random Paragraph Generator</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='number'>Paragraph : </label>
            <input type='number' name='number' id='number' value={count} onChange={(e) => setCount(e.target.value)} />
            <button type='submit'>Generator Random Paragraph</button>
          </form>
          <article>
            {text.map((item, index) => {
              return <p key={index}>{item}</p>
            })}
          </article>
        </section>
      </main>
    </>
  )
}

export default App
