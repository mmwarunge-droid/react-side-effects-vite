import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(false)
  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts
    const fetchJoke = () => {
  // Step 3: Define a function that fetches a programming joke from an API
  // - Start by setting `loading` to true
  setLoading(true)
  // - Fetch a joke from "https://v2.jokeapi.dev/joke/Programming?type=single"
  fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
  // - Update the `joke` state with the fetched joke
  .then(res => res.json())
  .then(data => {
        
  // - Set `loading` to false once the joke is loaded
 setJoke(data.joke)
 setLoading(false)
  })
  // - Handle any errors in the `.catch` block
 .catch(error => {
  console.error('Error fetching joke:', error)
  setJoke('Failed to load joke.')
  setLoading(false)
  })
  }
  // Fetch joke when component mounts
  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} />
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}
export default App
