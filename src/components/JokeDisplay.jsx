// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* Step 2: If `loading` is true, display "Loading..." */}
      {/* Step 3: Otherwise, display the joke */}
      <p>
        {loading ? 'Loading...' : joke}
      </p>
    </div>
  )
}

export default JokeDisplay
