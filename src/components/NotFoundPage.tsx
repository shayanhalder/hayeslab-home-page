import Header from './Header';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif',
    color: '#333',}}>

    <Header labName="Hayes Lab" navLinks={headerLinks} />

    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif',
    color: '#333', }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <p>
        You can go back to the <Link to="/">home page</Link>.
      </p>
    </div>
    </div>
  );
}
const headerLinks = [
    { text: 'Tools', url: 'tools' },
    { text: 'Contact Us', url: 'contact' },
];

export default NotFoundPage;