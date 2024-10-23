// import React from "react";
// import "/index.css";

// const ShimmerCard = () => {
//   return (
//     <>
//       <div className="cardshimmer">
//         <div className="shimmer-card">
//           <div className="shimmer-card-img shimmer"></div>
//           <div className="shimmer-card-content">
//             <div className="shimmer-title shimmer"></div>
//             <div className="shimmer-text shimmer"></div>
//             <div className="shimmer-text shimmer"></div>
//           </div>
//         </div>

//         <div className="shimmer-card">
//           <div className="shimmer-card-img shimmer"></div>
//           <div className="shimmer-card-content">
//             <div className="shimmer-title shimmer"></div>
//             <div className="shimmer-text shimmer"></div>
//             <div className="shimmer-text shimmer"></div>
//           </div>
//         </div>

//         <div className="shimmer-card">
//           <div className="shimmer-card-img shimmer"></div>
//           <div className="shimmer-card-content">
//             <div className="shimmer-title shimmer"></div>
//             <div className="shimmer-text shimmer"></div>
//             <div className="shimmer-text shimmer"></div>
//           </div>
//         </div>

//         <div className="shimmer-card">
//           <div className="shimmer-card-img shimmer"></div>
//           <div className="shimmer-card-content">
//             <div className="shimmer-title shimmer"></div>
//             <div className="shimmer-text shimmer"></div>
//             <div className="shimmer-text shimmer"></div>
//           </div>
//         </div>
//         <div className="shimmer-card">
//           <div className="shimmer-card-img shimmer"></div>
//           <div className="shimmer-card-content">
//             <div className="shimmer-title shimmer"></div>
//             <div className="shimmer-text shimmer"></div>
//             <div className="shimmer-text shimmer"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ShimmerCard;



import React from "react";

const ShimmerCard = () => {
  return (
    <div className="flex flex-wrap">
      {/* Repeated shimmer card components  with tailwind css
      */}
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="w-52 rounded-lg bg-gray-200 shadow-md m-4 overflow-hidden animate-pulse"
        >
          <div className="w-full h-48 bg-gray-300 border-b border-gray-400"></div>
          <div className="p-4">
            <div className="w-3/4 h-6 mb-4 bg-gray-300"></div>
            <div className="w-full h-4 mb-2 bg-gray-300"></div>
            <div className="w-full h-4 mb-2 bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;
