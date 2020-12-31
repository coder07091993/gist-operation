import React from "react";

const Dummy = () => <div>Whaaat</div>;
export default Dummy;
// import { useSelector, useDispatch } from "react-redux";
// import { getSomething } from "../redux/actions/dummy";

// const Users = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users.users);
//   useEffect(() => {
//     dispatch(
//       getSomething([
//         {
//           id: 1,
//           name: "Leanne Graham",
//           company: {
//             name: "Romaguera-Crona",
//             catchPhrase: "Multi-layered client-server neural-net"
//           }
//         }
//       ])
//     );
//   }, [dispatch]);

//   return (
//     <>
//       {users.length > 0 && users.map((user) => <p>{{ user }}</p>)}
//       {users.length === 0 && <p>No users available!</p>}
//     </>
//   );
// };

// export default Users;
