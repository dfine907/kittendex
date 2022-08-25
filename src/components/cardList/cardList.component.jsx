import Card from "../card/card.component"

const CardList = (props) => {
  const { kittens } = props

  return (
    <div className="card-list">
      {kittens.map((kitten) => {
        return <Card kitten={kitten} key={kitten.id} />
      })}
    </div>
  )
}

export default CardList
