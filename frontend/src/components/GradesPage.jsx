import React from 'react';

const GradesPage = () => {
  // Function to generate grade boxes
  const renderGrades = (grades) => {
    return grades.map((grade, index) => (
      <div key={index} className="w-16 h-16 flex items-center justify-center relative">
        <div
          className={`w-16 h-16 flex items-center justify-center border border-black text-4xl font-semibold text-white ${grade.color}`}
        >
          {grade.text}
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-[#f4f4f4] rounded-lg shadow-lg p-8">
        <div className="flex flex-col gap-8">
          {/* Subject Column 1 */}
          <div className="flex items-center justify-between p-4 bg-[#fdd0d0] rounded-xl">
            <div className="text-black text-2xl font-semibold">Physics</div>
            <div className="flex gap-2">
              {renderGrades([
                { text: 'F', color: 'bg-red-500' },
                { text: 'F', color: 'bg-red-500' },
                { text: 'F', color: 'bg-red-500' },
                { text: 'A', color: 'bg-green-500' },
                { text: 'B', color: 'bg-green-500' },
              ])}
            </div>
          </div>

          {/* Subject Column 2 */}
          <div className="flex items-center justify-between p-4 bg-[#c6f5c1] rounded-xl">
            <div className="text-black text-2xl font-semibold">Maths</div>
            <div className="flex gap-2">
              {renderGrades([
                { text: 'A', color: 'bg-green-500' },
                { text: 'B', color: 'bg-green-500' },
                { text: 'B', color: 'bg-green-500' },
                { text: 'C', color: 'bg-yellow-500' },
                { text: 'D', color: 'bg-orange-500' },
              ])}
            </div>
          </div>

          {/* Subject Column 3 */}
          <div className="flex items-center justify-between p-4 bg-[#fff8c4] rounded-xl">
            <div className="text-black text-2xl font-semibold">English</div>
            <div className="flex gap-2">
              {renderGrades([
                { text: 'B', color: 'bg-green-500' },
                { text: 'C', color: 'bg-yellow-500' },
                { text: 'B', color: 'bg-green-500' },
                { text: 'F', color: 'bg-red-500' },
                { text: 'D', color: 'bg-orange-500' },
              ])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradesPage;
