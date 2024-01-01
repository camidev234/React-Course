import React from "react";
import ReactDOM from "react-dom/client";
import { TeacherForm } from "./components/TeacherForm";

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
    <TeacherForm/>
  </React.StrictMode>
);
