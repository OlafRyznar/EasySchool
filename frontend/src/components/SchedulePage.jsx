import React from 'react';

const SchedulePage = () => {
  return (
    <div className="w-full h-auto bg-white p-8">
      <div className="max-w-6xl mx-auto mt-8">
        <div className="border border-gray-300 rounded-lg shadow-lg">
          {/* Days Header */}
          <div className="grid grid-cols-8 border-b border-gray-300 bg-gray-100 text-center font-semibold h-20">
            <div className="py-4">Time</div>
            <div className="py-4">MON</div>
            <div className="py-4">TUE</div>
            <div className="py-4">WED</div>
            <div className="py-4">THU</div>
            <div className="py-4">FRI</div>
            <div className="py-4">SAT</div>
            <div className="py-4">SUN</div>
          </div>

          {/* Schedule Grid */}
          <div className="grid grid-cols-8 border-t border-gray-300">
            {/* Time Column */}
            <div className="grid grid-rows-9 border-r border-gray-300">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border-b border-gray-300 text-right px-4 py-3">
                  {`${8 + i}:00`}
                </div>
              ))}
            </div>

            {/* Days Columns */}
            {[...Array(7)].map((_, i) => (
              <div key={i} className="relative border-r border-gray-200">
                <div className="h-full">
                  {[...Array(9)].map((_, j) => (
                    <div
                      key={j}
                      className={`border-b border-gray-300 ${j === 8 ? 'border-b-0' : ''}`}
                      style={{ height: 'calc(100% / 9)' }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
