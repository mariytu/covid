import React from 'react'
import styled from 'styled-components'
import { InputBase, InputAdornment } from '@material-ui/core'
import { hexToRGBA } from '../../modules/utils/color'

export const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  font-family: ${props => props.theme.typography.fontFamily};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
`

export const Label = styled.label`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights[600]};
  letter-spacing: 1.1px;
  line-height: 14px;
  margin: 0 0 0.3rem;
  text-transform: uppercase;
`

export const Required = styled(({ ...props }) => <span {...props}>*</span>)`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-size: 1rem;
`

export const BaseInput = styled(InputBase)`
  background-clip: padding-box;
  background-color: ${props => props.theme.palette.blackGrayBrand.white};
  border: 1px solid ${props => props.theme.palette.blackGrayBrand.gray1};
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${props => props.theme.palette.blackGrayBrand.black1};
  display: block;
  font-size: 1rem;
  height: calc(1.5em + 0.75rem + 2px);
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  & input {
    height: 100%;
    padding: 0;
    width: 100%;

    &::placeholder {
      color: ${props => props.theme.palette.blackGrayBrand.black3};
      font-family: ${props => props.theme.typography.fontFamily};
      font-size: 1rem;
      line-height: 1.5;
      opacity: 0.42;
      transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
  }

  &.Mui-focused {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &.Mui-disabled {
    background-color: rgba(46, 91, 255, 0.05);
    border: 1px solid ${props => props.theme.palette.blackGrayBrand.gray1};
    color: ${props => props.theme.palette.blackGrayBrand.black3};
    cursor: not-allowed;
  }

  &.Mui-disabled input {
    cursor: not-allowed;
  }

  &.Mui-error {
    border: 1px solid ${props => props.theme.palette.error.main};
  }

  &.Mui-error.Mui-focused {
    box-shadow: 0 0 0 0.2rem ${props => hexToRGBA(props.theme.palette.error.main, 0.5)};
    d63649
  }
`

export const Error = styled.section`
  color: ${props => props.theme.palette.error.main};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 16px;
  margin: 3px 0 0;
  min-height: 20px;
`

export const InputAdornmentBase = styled(InputAdornment)``

export const AdornmentLabel = styled.label`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-size: 1rem;
  margin-top: 35px;
`
