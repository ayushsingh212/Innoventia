import React, { useState } from 'react';

const Ytcont = () => {
  const [year, setYear] = useState(1);
  const [branch, setBranch] = useState('CSE');

  const options = [
    { year: 1, branch: 'CSE' },
    { year: 2, branch: 'CSE' },
    { year: 3, branch: 'CSE' },
    { year: 4, branch: 'CSE' },
    { year: 1, branch: 'ECE' },
    { year: 2, branch: 'ECE' },
    { year: 3, branch: 'ECE' }
  ];

  const videoData = {
    1: [
      'https://www.youtube.com/embed/HjhaedTyyQ4?si=qaNWBojdY31PcjzS',
      'https://www.youtube.com/embed/HjhaedTyyQ4?si=3Kf1AWb58MwDcQ-F',
      'https://www.youtube.com/embed/W2BY_zEMjjU?si=jCQcQlZac9hkQ43t',
      'https://www.youtube.com/embed/W2BY_zEMjjU?si=jCQcQlZac9hkQ43t',
    ],
    2: [
      'https://www.youtube.com/embed/I0AHMyrjMVs?si=SaviRaWVTJ-m-Bsl',
      'https://www.youtube.com/embed/Dh_Fq4__lbg?si=oIdG4LhR7HJrCwAa',
      'https://www.youtube.com/embed/W2BY_zEMjjU?si=jCQcQlZac9hkQ43t',
      'https://www.youtube.com/embed/W2BY_zEMjjU?si=jCQcQlZac9hkQ43t',
    ],
    3: [
      'https://www.youtube.com/embed/Dh_Fq4__lbg?si=oIdG4LhR7HJrCwAa',
      'https://www.youtube.com/embed/Zka7duZ0xdU?si=1VKeZBzMDHHS_Ev6',
      'https://www.youtube.com/embed/W2BY_zEMjjU?si=jCQcQlZac9hkQ43t',
      'https://www.youtube.com/embed/g4Ffdh41vRQ?si=Dya7PP4mG2wbH-LP',
    ],
    4: [
      'https://www.youtube.com/embed/Q8v4PniSJ1c?si=VNOmDwUwUDJLgWZO',
      'https://www.youtube.com/embed/HjhaedTyyQ4?si=3Kf1AWb58MwDcQ-F',
      'https://www.youtube.com/embed/W2BY_zEMjjU?si=jCQcQlZac9hkQ43t',
      'https://www.youtube.com/embed/W2BY_zEMjjU?si=jCQcQlZac9hkQ43t',
    ]
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg mt-6">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-2 text-center">🎓 Best YouTube Lectures</h1>
      <p className="text-gray-700 text-center mb-8">Choose your branch and year to get curated video content</p>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Select Your Branch</label>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
          >
            {[...new Set(options.map((e) => e.branch))].map((b, index) => (
              <option key={index} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Select Your Year</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
          >
            {[1, 2, 3, 4].map((y) => (
              <option key={y} value={y}>Year {y}</option>
            ))}
          </select>
        </div>
      </div>

 
      {videoData[year] && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🎥 Videos for Year {year} {branch}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoData[year].map((url, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
              >
                <iframe
                  width="100%"
                  height="315"
                  src={url}
                  title={`YouTube video ${index + 1}`}
                
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ytcont;
