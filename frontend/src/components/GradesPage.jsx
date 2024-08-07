import React, { useEffect, useState } from 'react';

const GradesPage = () => {
  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch('http://localhost:8080/grade');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Grades fetched:', data); // Debugging
        setGrades(data);
      } catch (error) {
        console.error('Error fetching grades:', error);
      }
    };

    const fetchSubjects = async () => {
      try {
        const response = await fetch('http://localhost:8080/subject');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Subjects fetched:', data); // Debugging
        setSubjects(data);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    Promise.all([fetchGrades(), fetchSubjects()]).then(() => setDataLoaded(true));
  }, []);

  // Function to assign color based on grade
  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+': return 'bg-green-700';
      case 'A': return 'bg-green-500';
      case 'A-': return 'bg-green-400';
      case 'B+': return 'bg-yellow-500';
      case 'B': return 'bg-yellow-400';
      case 'B-': return 'bg-yellow-300';
      case 'C+': return 'bg-orange-500';
      case 'C': return 'bg-orange-400';
      case 'C-': return 'bg-orange-300';
      case 'D+': return 'bg-red-500';
      case 'D': return 'bg-red-400';
      case 'D-': return 'bg-red-400';
      case 'F': return 'bg-red-500';
      default: return 'bg-gray-200'; // Default color for unknown grades
    }
  };

  // Group grades by subject_id
  const gradesBySubject = grades.reduce((acc, grade) => {
    if (!acc[grade.subject_id]) {
      acc[grade.subject_id] = [];
    }
    acc[grade.subject_id].push(grade);
    return acc;
  }, {});

  if (!dataLoaded) return <div>Loading...</div>;

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-[#f4f4f4] rounded-lg shadow-lg p-8">
        <div className="flex flex-col gap-8">
          {/* Subjects and Grades Section */}
          {subjects.length ? (
            subjects.map((subject) => (
              <div key={subject.subject_id} className="p-4 bg-blue-100 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">{subject.name}</h2>
                <div className="flex gap-2 flex-wrap">
                  {gradesBySubject[subject.subject_id] && gradesBySubject[subject.subject_id].length ? (
                    gradesBySubject[subject.subject_id].map((grade) => (
                      <div key={grade.grade_id} className="w-16 h-16 flex items-center justify-center relative">
                        <div
                          className={`w-16 h-16 flex items-center justify-center border border-black text-4xl font-semibold text-white ${getGradeColor(grade.grade_value)}`}
                        >
                          {grade.grade_value}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500">No grades available for this subject</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500">No subjects available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GradesPage;
