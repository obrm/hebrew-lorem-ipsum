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
            onChange={
              (e) => setCount(e.target.value)
              // setCount(() => {
              //   if (e.target.value >= data.length) return data.length
              //   if (e.target.value < 1) return 1
              //   return e.target.value
              // })
            }
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
