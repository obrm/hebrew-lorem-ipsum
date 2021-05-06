import React, { useState } from 'react'
import data from './data'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const amount = count <= 0 ? 1 : count > data.length ? data.length : +count
    setText(data.slice(0, amount))
  }

  return (
    <>
      <section className='section-center'>
        <h3>מחולל לורם איפסום בעברית!</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>כמות פסקאות:</label>
          <input
            type='number'
            id='amount'
            value={count}
            onChange={(e) => {
              const val =
                e.target.value >= data.length
                  ? data.length
                  : e.target.value < 1
                  ? 1
                  : e.target.value
              setCount(val)
            }}
          />
          <button type='submit' className='btn'>
            חולל!
          </button>
        </form>
        <small>ניתן לחולל מקסימום {data.length} פסקאות</small>
        <article className='lorem-text'>
          {text.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>
      </section>
      <footer id='main-footer'>
        <p>
          הטקסט הובא באדיבות האתר{' '}
          <a
            href='http://www.lorem-ipsum.co.il/'
            target='_blank'
            rel='noopener noreferrer'
          >
            לורם איפסום
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
