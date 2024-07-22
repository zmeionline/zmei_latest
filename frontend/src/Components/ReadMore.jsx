import React from 'react';
import { Link } from 'react-router-dom';

const ReadMore = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md  p-6 w-full">
        <h2 className="text-2xl font-bold mb-4">Text complet</h2>
        <p className="text-gray-700 mb-4">
          Praesent volutpat justo a nisi faucibu, nec dictum velit fermentum.
        </p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 font-medium">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReadMore;
