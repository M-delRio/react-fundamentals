// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // bonus #1: useRef
  const inputEl = React.useRef(null)

  // bonus #2: errState, bool if invalid uppercase used
  // const [isErrorState, setIsErrorState] = React.useState(false)

  // bonus #3: controlled input component, parse uppercase to lowercase
  const [userName, setUsername] = React.useState("")

  // React.useEffect(() => {
  //   console.log(`effect check: ${isErrorState}`);
  // })

  const handleSubmit = (eventArg) => {
    eventArg.preventDefault()
    // const name = eventArg.target.elements.nameInput.value
    // onSubmitUsername(name)
    onSubmitUsername(inputEl.current.value)
  }

  const handleChange = (eventArg) => {
    // pointer input element
    // const inputChars = inputEl.current.value
    // dynamic fetch value from event arg
    // const inputChars = eventArg.target.value
    // alternative deconstruct
    // const {value} = eventArg.target

    // bonus #2: validate only lower case
    // if (inputChars.toLowerCase() !== inputChars) {
    //   setIsErrorState(true)
    // } else {
    //   setIsErrorState(false)
    // }

    // bonus #3: coerce input to lowercase
    setUsername(userName.toLowerCase())
  }


  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor='nameInput'>Username:</label>
        <input value={userName} id='nameInput' type="text" ref={inputEl} onChange={handleChange}/>
      </div>
      {/* <button type="submit" disabled={isErrorState}>Submit</button>
      {isErrorState &&
        <div>Username must be lower case</div>
      } */}
      <button value={userName} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
