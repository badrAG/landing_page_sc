function StyledBackdrop({show}) {
  return (
    <div
    className={`fixed inset-0 z-40 backdrop-blur-lg bg-white bg-opacity-20 duration-300 ${show ? 'opacity-100' :'opacity-0'}`}
    ></div>
  )
}

export default StyledBackdrop