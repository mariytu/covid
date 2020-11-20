import React from 'react'
import PropTypes from 'prop-types'
import {
  BaseInput,
  BaseSelect,
  DropDown,
  DropDownIcon,
  Error,
  Label,
  Option,
  OptionContent,
  Placeholder,
  Required,
  Root,
  Wrapper
} from './Select.styles.jsx'

/**
 * The Select' component.
 */
const Select = props => {
  const {
    disabled,
    error,
    label,
    margin,
    maxWidth,
    options,
    padding,
    placeholder,
    required,
    value,
    width,
    onChange
  } = props
  const handleBlur = event => {
    if (event.target.value || event.target.value === 0) {
      return
    }

    onChange({ type: 'blur' })
  }
  const handleClick = event => event.stopPropagation()
  const showPlaceholder = placeholder !== '' && !value && value !== 0

  return (
    <Root margin={margin} padding={padding} width={width}>
      {label && (
        <Label>
          {`${label} `}
          {required && <Required />}
        </Label>
      )}
      <Wrapper>
        <BaseSelect
          disabled={disabled}
          error={Boolean(error)}
          IconComponent={() => (
            <DropDown>
              <DropDownIcon error={error === '' ? 0 : 1} />
            </DropDown>
          )}
          input={<BaseInput />}
          maxWidth={maxWidth}
          MenuProps={{
            anchorOrigin: { horizontal: 'left', vertical: 42 },
            anchorReference: 'anchorEl',
            getContentAnchorEl: null
          }}
          value={value}
          onBlur={handleBlur}
          onChange={onChange}
          onClick={handleClick}
        >
          {options.map(option => (
            <Option disableGutters key={option.value} value={option.value}>
              <OptionContent title={option.name}>{option.name}</OptionContent>
            </Option>
          ))}
        </BaseSelect>
        {showPlaceholder && <Placeholder>{placeholder}</Placeholder>}
      </Wrapper>
      {error && <Error>{error}</Error>}
    </Root>
  )
}

Select.defaultProps = {
  disabled: false,
  error: '',
  label: '',
  margin: 0,
  maxWidth: 'initial',
  padding: 0,
  placeholder: 'Seleccione...',
  required: false,
  type: 'text',
  onChange: () => undefined
}
Select.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ).isRequired,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
}

export default Select
