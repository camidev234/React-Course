import PropTypes from 'prop-types';

export const Teachers = ({ teachers }) => {
  return (
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
  );
};

Teachers.propTypes = {
    teachers: PropTypes.array.isRequired
}



