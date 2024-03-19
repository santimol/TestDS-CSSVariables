import React from 'react'
import { Button } from 'base'
import './rpButton.css'

export const RpButton = ({ ...props }) => {
  return (
        <Button entorno='rp' {...props}>Test GS</Button>
  )
}
