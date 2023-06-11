const Content = (props) => {
  const exercisesList = props.parts.map((part)=> (
    <p>
      {part.name} {' '} {part.exercises}
    </p>
   ))
  return (
    <> 
     {exercisesList}
    </>
  )
}

export default Content