import React from 'react';

const GradeCard = ({ studentName, course, grade, remarks }) => (
  <div className="p-4 border rounded-lg bg-white shadow-md">
    <h3 className="text-lg font-bold">{studentName}</h3>
    <p>Course: {course}</p>
    <p>Grade: <span className="font-semibold">{grade}</span></p>
    <p className="text-sm text-gray-500">{remarks}</p>
  </div>
);

export default GradeCard;
