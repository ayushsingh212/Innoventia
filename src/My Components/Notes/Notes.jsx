import React from 'react';
import file1 from '../../ghf/1st year Chemistry Notes_.pdf';
import file2 from '../../ghf/Beta gamma Dirichlet Liouville integral book pdf -new.pdf';
import file3 from '../../ghf/Engineering Physics (Notes).pdf';
import file4 from '../../ghf/nanomaterials final.pptx';
import file5 from '../../ghf/green chem.pdf';
import file6 from '../../ghf/nth derivative formulas.pdf';
import file7 from '../../ghf/Standard formulas.pdf';

const Notes = () => {
  const allNotes = [ 
    { name: '1st Year Chemistry Notes', file: file1 },
    { name: 'Beta Gamma Dirichlet Liouville Integral Book', file: file2 },
    { name: 'Engineering Physics Notes', file: file3 },
    { name: 'Nanomaterials Final PPT', file: file4 },
    { name: 'Green Chemistry PDF', file: file5 },
    { name: 'Nth Derivative Formulas', file: file6 },
    { name: 'Standard Formulas', file: file7 },
  ];

  const handleDownload = (file, filename) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = filename;
    link.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Download Your Notes</h1>
        <p className="text-gray-600 mb-8">
          Click any button below to download the corresponding file.
        </p>
        <div className="space-y-4">
          {allNotes.map((note, index) => (
            <button
              key={index}
              onClick={() => handleDownload(note.file, `${note.name}.pdf`)}
              className="block w-full bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out"
              title={`Download ${note.name}`}
            >
              {note.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
