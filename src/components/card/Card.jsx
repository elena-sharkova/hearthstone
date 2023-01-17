import { Flex } from '@mantine/core'

const Card = ({ card }) => {
  return (
    <Flex
      mih={50}
      miw={375}
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
      <h1>{card.name}</h1>
      <img src={card.img} alt={`Hearthstone ${card.name} cardback`} />
    </Flex>
  )
}

export default Card
