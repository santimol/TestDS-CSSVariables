import React from 'react'
import { Button } from 'base'
import './gsButton.css'

export const GsButton = ({ ...props }) => {
  return (
        <Button entorno='gs' {...props}>Test GS</Button>
  )
}
