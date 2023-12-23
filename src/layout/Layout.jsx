import React from "react";

function Layout({children}) {
  return (
    <>
      <header className="header">
        <h1>Book App</h1>
        <p>React.js course</p>
      </header>
      {children}
      <footer className="footer">
        <p>developed by Mahnegar with🧡</p>
      </footer>
    </>
  );
}

export default Layout;
