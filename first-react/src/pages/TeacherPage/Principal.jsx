import { useState } from 'react';
import { TeacherForm }  from './components/TeacherForm';
import { Teachers } from './components/Teachers';

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
