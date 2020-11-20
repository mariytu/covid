import styled from 'styled-components'
import { ButtonBase, CircularProgress } from '@material-ui/core'
import { hexToRGBA } from '../../modules/utils/color'

export const Loading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const LoadingIcon = styled(CircularProgress)`
  color: ${props => props.theme.palette.blackGrayBrand.white};
`

const BaseButton = styled(ButtonBase)`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 2rem;
  cursor: pointer;
  display: inline-flex;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${({ size }) => {
    if (size === 'large') {
      return '18px'
    } else if (size === 'small') {
      return '12px'
    } else {
      return '14px'
    }
  }};
  font-weight: ${props => props.theme.fontWeights[500]};
  height: ${({ size }) => {
    if (size === 'large') {
      return '50px'
    } else if (size === 'small') {
      return '30px'
    } else {
      return '40px'
    }
  }};
  justify-content: center;
  line-height: 1.75;
  margin: ${props => props.margin};
  padding: ${({ size }) => {
    if (size === 'large') {
      return '.91rem 4rem'
    } else if (size === 'small') {
      return '.28rem 2.13rem'
    } else {
      return '.56rem 2.81rem'
    }
  }};
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    color 0.15s ease-in-out;
  user-select: none;
  width: ${props => props.width};

  &.Mui-disabled {
    background-color: ${props => hexToRGBA(props.theme.palette.blackGrayBrand.black1, 0.2)};
    border: none;
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem ${({ color, theme }) => hexToRGBA(theme.palette[color].main, 0.4)};
    outline: 0;
  }

  &:active {
    transform: scale(0.98);
  }

  &.MuiTouchRipple-root {
    display: none;
  }
`

export const ContainedButton = styled(BaseButton)`
  background-color: ${({ color, theme }) => theme.palette[color].main};
  border-color: ${({ color, theme }) => theme.palette[color].main};
  color: ${props => props.theme.palette.blackGrayBrand.white};

  &:hover {
    background-color: ${({ color, theme }) => theme.palette[color].dark};
    border-color: ${({ color, theme }) => theme.palette[color].dark};
    color: ${props => props.theme.palette.blackGrayBrand.white};
  }
`

export const OutlinedButton = styled(BaseButton)`
  background-color: ${({ color, theme }) => hexToRGBA(theme.palette[color].main, 0.05)};
  border-color: ${({ color, theme }) => theme.palette[color].main};
  color: ${({ color, theme }) => theme.palette[color].main};

  &.Mui-disabled {
    color: ${props => props.theme.palette.blackGrayBrand.white};
  }

  &:hover {
    background-color: ${({ color, theme }) => theme.palette[color].main};
    border-color: ${({ color, theme }) => theme.palette[color].main};
    color: ${props => props.theme.palette.blackGrayBrand.white};
  }
`

export const TextButton = styled(BaseButton)`
  background-color: transparent;
  border: none;
  color: ${({ color, theme }) => theme.palette[color].main};

  &.Mui-disabled {
    color: ${props => props.theme.palette.blackGrayBrand.white};
  }

  &:hover {
    background-color: ${({ color, theme }) => hexToRGBA(theme.palette[color].main, 0.15)};
  }
`
