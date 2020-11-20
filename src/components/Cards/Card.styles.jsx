import React from 'react'
import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import { hexToRGBA } from '../../modules/utils/color'

export const Root = styled(({ margin, padding, width, ...props }) => <Paper {...props} />)`
  background: ${props => props.theme.palette.blackGrayBrand.white};
  border: solid 1px ${props => hexToRGBA(props.theme.palette.blackGrayBrand.gray1, 0.5)};
  border-radius: 4px;
  box-shadow: none;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};

  ${props => props.theme.breakpoints.only('xs')} {
    width: 100%;
  }

  ${props => props.theme.breakpoints.only('sm')} {
    width: calc(50% - 26px);
  }
`
