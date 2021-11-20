// if (typeof window !== "undefined") {

// const Index = (props) => {
// const vehicles = props.data;
// const searchBar = document.getElementById("searchBar");
// searchBar.addEventListener("keyup", e => {
//     const searchString = e.target.value;
//     console.log(searchString);
//     const filteredVehicles = vehicles.filter(vehicle => {
//       return (
//         vehicle.Name.toLowerCase().includes(searchString) ||
//         vehicle.id.toLowerCase().includes(searchString)
//       );
//     });
//     displayCharacters(filteredVehicles);
//   });  
  
//   }
      
//   // browser code


// const getStaticProps = async () => {
//   const res = await Axios.get("https://6197c5b4164fa60017c22e0d.mockapi.io/vehicles");
//   return {
//     props: { data: res.data.slice(0, 10) },
//   };
// };
// }