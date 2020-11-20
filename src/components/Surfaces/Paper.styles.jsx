import React from 'react'
import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import { hexToRGBA } from '../../modules/utils/color'

export const Root = styled(
  ({ boxShadow, color, display, justifyContent, margin, padding, textAlign, width, ...props }) => <Paper {...props} />
)`
  background: ${({ color, theme }) => {
    switch (color) {
      case 'blue':
        return hexToRGBA(theme.palette.primary.main, 0.07)
      case 'gray':
        return hexToRGBA(theme.palette.blackGrayBrand.gray1, 0.15)
      default:
        return theme.palette.blackGrayBrand.white
    }
  }};
  border: ${({ border, color, theme }) => {
    if (!border) {
      return 'none'
    }
    switch (color) {
      case 'blue':
        return `solid 1px ${hexToRGBA(theme.palette.primary.main, 0.5)}`
      case 'gray':
      default:
        return `solid 1px ${hexToRGBA(theme.palette.blackGrayBrand.gray1, 0.5)}`
    }
  }};
  border-radius: 4px;
  box-shadow: ${({ boxShadow, color, theme }) => {
    if (!boxShadow) {
      return 'none'
    }
    switch (color) {
      case 'blue':
        return `0 1px 5px 0 ${hexToRGBA(theme.palette.primary.main, 0.07)}`
      case 'gray':
        return `0 1px 5px 0 ${hexToRGBA(theme.palette.blackGrayBrand.gray1, 0.5)}`
      default:
        return '0 2px 7px 0 rgba(0, 100, 255, 0.15)'
    }
  }};
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign ?? 'initial'};
  width: ${props => props.width};
`
