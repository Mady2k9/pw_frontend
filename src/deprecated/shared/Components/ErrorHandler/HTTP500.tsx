import React from 'react';

const Error500: React.FC = () => {
  return (
    <div className="error-container">
      <h1>500 - Internal Server Error</h1>
      <p>Something went wrong on our end. We&apos;re working to fix it.</p>
      {/* You can include additional error-specific content or actions here */}
    </div>
  );
};

export default Error500;
