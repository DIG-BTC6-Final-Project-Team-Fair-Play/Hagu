// import React from "react";
// import { Box } from "@mantine/core";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

// export const PhotoGetTry = () => {
//   const storage = getStorage();
//   getDownloadURL(
//     ref(
//       storage,
//       "gs://hagu-882e3.appspot.com/image/photo_2024-06-27T02-18-38-495Z.png"
//     )
//   )
//     .then((url) => {
//       console.log(url);
//       const xhr = new XMLHttpRequest();
//       xhr.responseType = "blob";
//       xhr.onload = (event) => {
//         const blob = xhr.response;
//       };
//       xhr.open("GET", url);
//       xhr.send();

//       // Or inserted into an <img> element
//       const img = document.getElementById("myimg");
//       img.setAttribute("src", url);
//     })
//     .catch((error) => {
//       // Handle any errors
//     });

//   return (
//     <Box>
//       <img id="myimg"></img>
//     </Box>
//   );
// };
