import Header from './Header'
import Student from './Student'
import Footer from './Footer'
import Button from './Button'
import './App.css'

function App() {

  const handleSave = () => alert("Saved!");
  const handleCancel = () => alert("Cancelled!");

  return (
    <>
     <Header />
      <Student name="Jane Rose Romero" course="BSIT-1A" />
      <Student name="Ryza Francisco" course="BSCS-2B" />
      <Student name="Jyra Lhe" course="BSCS-2B" />
      <Button label="Save" onClick={handleSave} />
      <Button label="Cancel" onClick={handleCancel} />
      <Footer />
    </>
  )
}

export default App
