import React from "react";
import ReactDOM from "react-dom/client";
import Principal from "./components/Principal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Post
      title='This is the title'
      description={description}
      address={{
        street: 'cra 7b',
        city: 'Soacha'
      }}
    /> */}
    {/* <TaskCard isSolved={false} /> */}
    {/* <Post/> */}
    <Principal/>
  </React.StrictMode>
);
