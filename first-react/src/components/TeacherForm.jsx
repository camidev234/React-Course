import { useState } from "react";
import '../styles/TeacherForm.css'
export const TeacherForm = () => {
  const [teacherModel, setTeacherModel] = useState({
    name: "",
    surName: "",
    subjects: [],
  });

  const [subjectModel, setSubjectModel] = useState("");
  const [teachers, setTeachers] = useState([]);

  const handleName = (e) => setTeacherModel({ ...teacherModel, name: e.target.value });
  const handleSurName = (e) => setTeacherModel({ ...teacherModel, surName: e.target.value });
  const handleSubject = (e) => setSubjectModel(e.target.value);

  const addSubject = () => {
    setTeacherModel({
      ...teacherModel,
      subjects: [...teacherModel.subjects, subjectModel],
    });

    setSubjectModel("");
  };

  const addTeacher = () => {
    setTeachers((prevTeachers) => [...prevTeachers, teacherModel]);

    setTeacherModel({
      name: "",
      surName: "",
      subjects: [],
    });
  };

  return (
    <div className="container">
      <div className="formContainer">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Teacher name" onChange={handleName} value={teacherModel.name} /><br />
          <input type="text" placeholder="Teacher Surname" onChange={handleSurName} value={teacherModel.surName} /><br />
          <input type="text" placeholder="subject" onChange={handleSubject} value={subjectModel} />
          <button onClick={addSubject}>Add subject</button><br />
          <ul>
            {teacherModel.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <button onClick={addTeacher}>Create Teacher</button>
        </form>
      </div>
      <div className="list">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>SurName</th>
              <th>Subjects</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index}>
                <td>{teacher.name}</td>
                <td>{teacher.surName}</td>
                <td>
                  <ul>
                    {teacher.subjects.map((subject, i) => (
                      <li key={i}>{subject}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
