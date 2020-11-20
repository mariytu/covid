import React from 'react'
import PropTypes from 'prop-types'
import { AdornmentLabel, BaseInput, Error, InputAdornmentBase, Label, Required, Root } from './Input.styles.jsx'
import Skeleton from '../Placeholders/Skeleton'

/**
 * The Input's component.
 */
const Input = props => {
  const {
    adornment,
    autoFocus,
    disabled,
    error,
    label,
    loading,
    margin,
    padding,
    placeholder,
    required,
    type,
    value,
    width,
    onChange
  } = props
  const handleBlur = () => {
    if (value) {
      return
    }

    onChange({ type: 'blur' })
  }

  const startAdornment = adornment && (
    <InputAdornmentBase position="start">
      {typeof adornment === 'string' ? (
        <AdornmentLabel adornmentLabel={adornment}>{adornment}</AdornmentLabel>
      ) : (
        adornment
      )}
    </InputAdornmentBase>
  )

  return (
    <Root margin={margin} padding={padding} width={width}>
      {label && (
        <Label>
          {`${label} `}
          {required && <Required />}
        </Label>
      )}
      {loading && <Skeleton variant="rect" height={38} />}
      {!loading && (
        <BaseInput
          autoFocus={autoFocus}
          disabled={disabled}
          error={Boolean(error)}
          placeholder={placeholder}
          type={type}
          value={value}
          onBlur={handleBlur}
          onChange={onChange}
          startAdornment={startAdornment}
        />
      )}
      {error && <Error>{error}</Error>}
    </Root>
  )
}

Input.defaultProps = {
  autoFocus: false,
  disabled: false,
  error: '',
  label: '',
  loading: false,
  margin: 0,
  padding: 0,
  placeholder: '',
  required: false,
  type: 'text',
  width: 'initial',
  onChange: () => undefined
}
Input.propTypes = {
  adornment: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'number', 'text']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func
}

export default Input
