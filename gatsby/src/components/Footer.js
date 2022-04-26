import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className="center">&copy; Slick's Slice {new Date().getFullYear()}</p>
    </footer>
  );
}