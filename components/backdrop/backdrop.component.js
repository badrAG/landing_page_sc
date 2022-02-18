import { useEffect } from 'react'

import  StyledBackdrop  from './backdrop.styled'


const Backdrop = (props) => {
  const { show, onClick } = props

  useEffect(() => {
    let originalStyle = ''
    if (show) {
      originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
    }

    return () => {
      if (show) document.body.style.overflow = originalStyle
    }
  }, [show])

  return <StyledBackdrop show={show} onClick={onClick} />
}

export default Backdrop