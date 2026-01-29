import React from "react";
import { userContext } from "./context";
 
function App() {
  return (
<userContext.Provider value={'Tom Jerry'}>
<Content/>
</userContext.Provider> 
  )
}
export default App;