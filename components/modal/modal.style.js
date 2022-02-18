import React from 'react'

function ModalStyle(props) {
  const { children, show } = props;

  return (
    <section
    className={`fixed flex items-center justify-center transition-all duration-300 ${show ?'inset-0 z-40' : 'left-0 right-0 -top-96 -z-50'}`}
    >
 {children}
    </section>
  )
}

export default ModalStyle