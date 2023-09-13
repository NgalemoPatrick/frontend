import { useWContext } from "../hooks/useWContext"

const WorkoutDetails = ({ workout }) => {

  const { dispatch } = useWContext()

  const handleClick = async () => {
    const res = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })

    const data = await res.json()

    if (res.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: data })
    }
  }
  return (
    <section className="wd-container">
      <h4>{workout.title}</h4>
      <p>Load (lb): <strong />{workout.reps} </p>
      <p><strong />Reps: </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick} >Delete</span>
      <span>update</span>
    </section>
  )
}

export default WorkoutDetails
