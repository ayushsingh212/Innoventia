import React from 'react';
import college from '../../assets/college.jpg';

const College = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4 py-8"
      style={{ backgroundImage: `url(${college})` }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          Ajay Kumar Garg Engineering College
        </h1>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          📅 Upcoming Tests & Events
        </h2>


        <div className="mb-8">
          <h3 className="text-xl font-bold border-b border-white pb-2 mb-4">📝 Tests</h3>
          <div className="space-y-4">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">ST1 - Session Test 1</h4>
              <p className="text-sm">📘 Syllabus: Units 1, 2, and 3 of Applied Physics and Basic Electrical</p>
              <p className="text-sm">🗓️ Date: 12th May 2025</p>
            </div>

            <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">ST2 - Session Test 2</h4>
              <p className="text-sm">📘 Syllabus: Units 4, 5, and 6 + important derivations</p>
              <p className="text-sm">🗓️ Date: 28th May 2025</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold border-b border-white pb-2 mb-4">🎉 Events</h3>
          <div className="space-y-4">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">TechFest 2025</h4>
              <p className="text-sm">🤖 Robotics challenge, coding competitions, and more.</p>
              <p className="text-sm">📍 Venue: Main Auditorium</p>
              <p className="text-sm">🗓️ Date: 15th May 2025</p>
            </div>

            <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">Cultural Fest</h4>
              <p className="text-sm">🎭 Drama, dance, music, and fashion shows.</p>
              <p className="text-sm">📍 Venue: College Ground</p>
              <p className="text-sm">🗓️ Date: 25th May 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default College;
