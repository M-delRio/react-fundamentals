// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div style={{backgroundColor: 'lightblue'}} className='box box--small'>small lightblue box</div>
const mediumBox = <div style={{backgroundColor: 'pink'}} className='box box--medium'>medium pink box</div>
const largeBox = <div style={{backgroundColor: 'orange'}} className='box box--large'>large orange box</div>

// function App() {
//   return (
//     <div style={{fontStyle: 'italic'}}>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// extra 1: custom Box component, accept attributes as props

// function Box({classNameArg, backgroundColorArg, textArg, ...domProps}) { 
//   return (
//     <div 
//       className={`box ${classNameArg}`} 
//       style={{backgroundColor: backgroundColorArg}}
//       {...domProps}
//     >
//       {textArg}
//     </div>
//   )
// }

// function App() {
//   return (
//     <div style={{fontStyle: 'italic'}}>
//       <Box classNameArg='box--small' backgroundColorArg='lightBlue' textArg='small lightblue box'></Box>
//       <Box classNameArg='box--medium' backgroundColorArg='pink' textArg='small lightblue box'></Box>
//       <Box classNameArg='box--large' backgroundColorArg='orange' textArg='small lightblue box'></Box>
//     </div>
//   )
// }

// extra 2: function accepts user friendly size arg

function Box({boxSize, backgroundColorArg, textArg, ...domProps}) { 
  let sizeClass

  switch (boxSize) {
    case 'small': 
      sizeClass = 'box--small'
      break;
    case 'medium':
      sizeClass = 'box--medium'
      break;
    case 'large':
      sizeClass = 'box--large'
      break
    default:
      sizeClass = ''
  }

  return (
    <div 
      className={`box ${sizeClass}`} 
      style={{backgroundColor: backgroundColorArg}}
      {...domProps}
    >
      {textArg}
    </div>
  )
}

function App() {
  return (
    <div style={{fontStyle: 'italic'}}>
      <Box boxSize='small' backgroundColorArg='lightBlue' textArg='small lightblue box'></Box>
      <Box boxSize='medium' backgroundColorArg='pink' textArg='small lightblue box'></Box>
      <Box boxSize='large' backgroundColorArg='orange' textArg='small lightblue box'></Box>
    </div>
  )
}

export default App
