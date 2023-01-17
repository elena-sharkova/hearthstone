import Card from '../card/Card'

const CardList = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.cardBackId} />
      ))}
    </>
  )
}

export default CardList
