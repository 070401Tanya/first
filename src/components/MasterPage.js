import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";

function MasterPage({children}){
    return(
<div>
<header>
<Logo />
<NavBar/>
</header>
<main> 
    {children}
</main>
<footer>
    
    
     </footer>
</div>
    );
}
export default MasterPage;
