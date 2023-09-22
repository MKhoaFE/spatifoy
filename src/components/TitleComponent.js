import React from 'react'

function TitleComponent({ text, color, size, weight, lineHeight })
{
  return (
    <h1 style={{
      color: color ?? '#212121',
      fontSize: size ?? 16,
      fontWeight: weight ?? 'bold',
     
    }}>{text}</h1>
  )
}

export default TitleComponent