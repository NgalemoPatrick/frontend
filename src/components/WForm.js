import { useState } from "react"
import { useWContext } from "../hooks/useWContext"

const WForm = () => {
  const { dispatch } = useWContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps }

    const response = await fetch('/api/workouts', {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = await response.json()

    if (!response.ok) {
      setError(data.error)
    }
    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      dispatch({ type: 'CREATE_WORKOUT', payload: data })
    }
  }

  return (
    <form className="c-form" onSubmit={handleSubmit}>
      <h3>Add exercice</h3>
      <label>Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Load (lb)</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>Repetitions:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add exercice</button>
    </form>
  )
}

export default WForm
