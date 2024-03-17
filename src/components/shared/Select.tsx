import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import { forwardRef } from 'react'
import Flex from './Flex'
import Text from './Text'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  placeholder?: string
}

const BaseSelect = styled.select`
  height: 52px;
  background-color: ${colors.gray};
  border: none;
  border-radius: 15px;
  padding: 0 16px;
  cursor: pointer;

  &:required::invalid {
    color: ${colors.blue};
  }
`

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, placeholder, value, ...props },
  ref,
) {
  return (
    <Flex direction="column">
      {label ? (
        <Text
          typography="t7"
          color="black"
          display="inline-block"
          style={{ marginBottom: 6 }}
        >
          {label}
        </Text>
      ) : null}
      <Text></Text>
      <BaseSelect required={true} ref={ref} value={value} {...props}>
        <option disabled={true} hidden={true} value="">
          {placeholder}
        </option>
      </BaseSelect>
    </Flex>
  )
})

export default Select
