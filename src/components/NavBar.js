import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navlinks = links.map(function(link){
    return <a key = {link} href={'#'+link}>{link}</a>
  })

  return navlinks;
}

export default NavBar;
