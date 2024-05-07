// import React, { useState, useEffect, useRef } from 'react';

// // Custom hook to get current time every second
// const useTime = () => {
//   const [time, setTime] = useState(new Date());

//   // Ref to store interval ID for cleanup
//   const intervalRef = useRef();

//   useEffect(() => {
//     // Function to update time every second
//     const updateTime = () => {
//       setTime(new Date());
//     };

//     // Start interval and store its ID in ref
//     intervalRef.current = setInterval(updateTime, 1000);

//     // Cleanup function to clear interval on unmount
//     return () => clearInterval(intervalRef.current);
//   }, []); // Run effect only once on mount

//   return time;
// };

// // Clock component to display time with AM/PM
// const Clock = () => {
//   const time = useTime();
//   const hours = time.getHours();
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';
//   const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour time

//   return (
//     <div>
//       <h1>
//         {formattedHours}:{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds} {ampm}
//       </h1>
//     </div>
//   );
// };

// export default Clock;
