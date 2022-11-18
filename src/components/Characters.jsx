
const Characters = ({characters}) => {
  return (
    <div className="text-center p-5">
        <h3>{characters.name}</h3>
        <img className="img-fluid rounded-pill" src={characters.image} alt={characters.name} />
        <p>{characters.origin.name}</p>
    </div>
  )
}

export default Characters