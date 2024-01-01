import { useState } from "react";
import PropTypes from 'prop-types'
import '../styles/TeacherForm.css'

export const TeacherForm = ({ onAddTeacher }) => {
  const [teacherModel, setTeacherModel] = useState({
    name: "",
    surName: "",
    subjects: [],
  });

  const [subjectModel, setSubjectModel] = useState("");

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
    onAddTeacher(teacherModel)

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
    </div>
  );
};

TeacherForm.propTypes = {
    onAddTeacher: PropTypes.func.isRequired
}
