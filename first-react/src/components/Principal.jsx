import { useState } from 'react';
import { TeacherForm }  from './TeacherForm';
import { Teachers } from './Teachers';

const Principal = () => {
  const [teachers, setTeachers] = useState([]);

  const addTeacher = (newTeacher) => {
    setTeachers((prevTeachers) => [...prevTeachers, newTeacher]);
  };

  return (
    <div>
      <TeacherForm onAddTeacher={addTeacher} />
      <Teachers teachers={teachers} />
    </div>
  );
};

export default Principal;
