import Header from "./header";
import React from "react";
import classes from "./layout.module.css";
import Footer from "./footer";

const Layout=(props)=>{
    return(
        <div className={classes.header}>
            <Header />
        <div >
         
            {props.children}
          
        </div>
        <Footer />
        </div>
    )
}
export default Layout;