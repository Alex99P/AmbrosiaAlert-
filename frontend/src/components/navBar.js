import React from 'react';
import { Button } from 'react-bootstrap'

//Todos
//Sa rezolv stylul
// sa adaug markare doar cand apas pe buton



const SideNav = () => {
   const sayHello=()=>{
            // console.log("merge")
            alert("merge")
            };
   return (
   <div className="sidenav">
   
   <Button onClick={sayHello} variant="primary">Add Marker</Button>
   </div>
    );
   };
   export default SideNav;



   // class NavBar extends React.Component {
//     render() { 
//       const sayHello=()=>{
//       // console.log("merge")
//       alert("merge")
//       };
//         return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           {/* <h1>Maps</h1> */}
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
            
//             <Button onClick={sayHello} variant="primary">Add Marker</Button>
//             </div>
//           </div>
//         </div>
//       </nav>
//       );
//     }
// }
 
// export default NavBar;
