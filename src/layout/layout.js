import Header from "./header";
import React from "react";

import Footer from "./footer";

const Layout=(props)=>{
    return(
        <div>
            <Header />
        <main>
         
            {props.children}
          
        </main>
        <Footer />
        </div>
    )
}
export default Layout;