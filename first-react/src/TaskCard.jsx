import './task.css'
import PropTypes from 'prop-types';

export const TaskCard = ({ isSolved }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#eee",
        fontFamily: "sans-serif",
      }}
    >
      <h3>First Task</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, omnis.
      </p>
      <span className={ isSolved ? 'checked' : 'notSolved' }>{isSolved ? "Checked" : "Not solved"}</span>
    </div>
  );
};

TaskCard.propTypes = {
  isSolved: PropTypes.bool.isRequired
};


