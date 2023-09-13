import { useState, useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WForm from "../components/WForm"
import { useWContext } from "../hooks/useWContext"


const Home = () => {
  const { workouts, dispatch } = useWContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('/api/workouts')
      const data = await res.json()

      if (res.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: data })
      }
    }
    fetchWorkouts()
  }, [])
  return (
    <div className='home-container'>
      {workouts && workouts.map((workout) => (
        <WorkoutDetails key={workout._id} workout={workout}/>
      ))}
      <WForm />
    </div>
  )
}

export default Home
