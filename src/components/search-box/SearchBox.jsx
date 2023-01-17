import { Center, TextInput } from '@mantine/core'

const SearchBox = ({ className, searchType, onChangeHandler }) => {
  return (
    <Center>
      <TextInput
        type="search"
        className={className}
        placeholder={searchType}
        onChange={onChangeHandler}
        style={{ marginTop: '2%', marginBottom: '2%' }}
        size="xl"
      />
    </Center>
  )
}

export default SearchBox
