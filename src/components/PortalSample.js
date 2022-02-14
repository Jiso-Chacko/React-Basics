import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalSample() {
  return ReactDOM.createPortal (
    <h1>PortalSample</h1>,
    document.getElementById('portal-root')
  )
}

export default PortalSample