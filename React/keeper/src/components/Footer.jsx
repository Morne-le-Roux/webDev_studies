import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <footer>
      <p>Copyright {currentYear}</p>
    </footer>
  );
}

export default Footer;
