import React from 'react';
import { FileText } from 'lucide-react';

const FilesSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FileText className="mr-2 h-6 w-6 text-indigo-600" />
        Recent Files
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <span>Project_Proposal.pdf</span>
          <span className="text-sm text-gray-500">2 days ago</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Research_Notes.docx</span>
          <span className="text-sm text-gray-500">1 week ago</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Presentation_Slides.pptx</span>
          <span className="text-sm text-gray-500">2 weeks ago</span>
        </li>
      </ul>
    </div>
  );
};

export default FilesSection;