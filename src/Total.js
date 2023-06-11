const Total = (props) =>{
  const totalExercises = props.parts.map(part=>part.exercises).reduce((sum,current)=> sum + current, 0)
  return (
    <>
      <p>
        Number of exercises
        {' '}
         {totalExercises}
      </p>
    </>
  )
}

export default Total