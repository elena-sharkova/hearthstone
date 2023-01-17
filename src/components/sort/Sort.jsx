import { Select } from '@mantine/core'

function Sort({ onChangeHandler }) {
  return (
    <Select
      label="Sort by"
      placeholder="Pick one"
      data={[{ value: 'A-Z', label: 'A-Z' }]}
      size="xl"
      style={{ width: '10%' }}
      onChange={onChangeHandler}
    />
  )
}

export default Sort
