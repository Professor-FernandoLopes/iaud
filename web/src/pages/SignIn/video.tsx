
import React from "react"
import ReactPlayer from "react-player"




const App:React.FC = ()=> {
  
  
  
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=pz7JOmo1Fn0"
        width="140%"
        height="100%"
        controls={false} 
        playing={true}
      />
    </div> 
  )
}

export default App