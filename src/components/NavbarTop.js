// import React from "react";
// import Thunder from "../icons/thunder.png";

// const NavbarTop = () => {
//   return (
//     <div>
//       <nav className="p-6 bg-purple-400">
//         <div className="flex flex-row m-0">
//           <img src={Thunder} alt="" className="w-12 h-12" />
//           <h2 className="text-3xl text-white font-bold">
//             <b>W</b>eather<b>B</b>ooth
//           </h2>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavbarTop;

// import React from "react";
// import Thunder from "../icons/thunder.png";

// const NavbarTop = () => {
//   return (
//     <div>
//       <nav className="p-4 bg-purple-400">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <img src={Thunder} alt="" className="w-12 h-12" />
//             <h2 className="text-3xl text-white font-bold ml-2">
//               <b>W</b>eather<b>B</b>ooth
//             </h2>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavbarTop;


import React from "react";
import Thunder from "../icons/thunder.png";

const NavbarTop = () => {
  return (
    <div>
      <nav className="p-4 bg-purple-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={Thunder} alt="" className="w-12 h-12 sm:w-8 sm:h-8" />
            <h2 className="text-3xl text-white font-bold ml-2 sm:text-2xl">
              <b>W</b>eather<b>B</b>ooth
            </h2>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarTop;

