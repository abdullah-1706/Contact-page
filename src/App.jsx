import { useState } from "react";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import "./App.css";
import Navbar from "../components/Navbar";
import Text from "../components/Text";
import Button from "../components/Button";

function App() {

  let handlesubmit = (e) => {
    e.preventDefault()
    setname(e.target[4].value)
    setemail(e.target[5].value)
    settext(e.target[6].value)
  }
  const [Name, setname] = useState("")
  const [email, setemail] = useState("")
  const [text, settext] = useState("")
  
  return (
    <>
      <div className="bg-gray-300 h-screen w-full">
        <Navbar />
        <Text />
        <div className="flex gap-3 h-[60vh] w-[90vw]  mx-auto">
          <div className="ContactFrom  w-1/3 h-[60vh]">
            <form onSubmit={handlesubmit}>
            <div className="flex gap-4">
              <Button
               text="VIA SUPPORT CHAT"
               icon={<MdMessage />} 
               onClick={()=>handlesubmit}
               />
              <Button
               text="VIA CALL" 
               icon={<IoMdCall />} 
               onClick={()=>handlesubmit}
               />
            </div>
            <button className="flex items-center justify-center gap-3 bg-gray-300 px-24 py-2 rounded-md outline outline-black/50 mt-4">
              <MdMessage />
              VIA EMAIL FORM
            </button>
            <input
              className="relative name h-[40px] bg-gray-300 w-4/5 ml-3 rounded-md mt-[1.3vw] outline-black outline"
              type="text"
            />
            <label
              htmlFor="input"
              className="absolute z-[2] font-semibold left-24 top-[20.8rem] bg-gray-300 px-3"
            >Name</label>
            
            <input
              className="relative name h-[40px] bg-gray-300 w-4/5 ml-3 rounded-md mt-[1.3vw] outline-black outline"
              type="text"
            />
            <label
              htmlFor="input"
              className="absolute z-[2] font-semibold left-24 top-[24.4rem] bg-gray-300 px-3"
            >Email</label>
            <textarea name="TEXT" className="relative outline rounded-md bg-gray-300 mt-[1.7vw] w-4/5 ml-3"></textarea>
            <label htmlFor="textarea" className="absolute z-[2] bg-gray-300 left-24 top-[28.3rem] px-3  font-semibold ">TEXT</label>

            <div className="submit ml-44 mt-[1.2vw]">
            <Button 
            text="SUBMIT BUTTON"
            />
            <div className="data">{Name + "  " + email + "  " + text + "  "}</div>
            </div>
            </form>
            
          </div>
          <div className="image h-[60vh] w-[40vw] ml-[10vw] overflow-hidden">
    <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/f3baadbbaca5c4dab15b4a811e8649d1f9f79473/project-2/public/images/contact.svg" alt="" className="object-cover object-top w-[40vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
