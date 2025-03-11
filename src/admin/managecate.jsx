// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ManageCategories = () => {
//   const categories = [
//     { id: 1, name: 'Bollywood', description: 'Bollywood News', postingDate: '2018-06-06 15:58:09', lastUpdate: '2018-07-01 00:11:07' },
//     { id: 2, name: 'Sports', description: 'Related to sports news', postingDate: '2018-06-06 16:05:09', lastUpdate: '2018-06-14 16:41:55' },
//     { id: 3, name: 'Entertainment', description: 'Entertainment related News', postingDate: '2018-06-14 11:02:58', lastUpdate: '2018-06-14 11:03:41' },
//     { id: 4, name: 'Politics', description: 'Politics', postingDate: '2018-06-22 21:16:09', lastUpdate: '0000-00-00 00:00:00' },
//     { id: 5, name: 'Business', description: 'Business', postingDate: '2018-06-22 21:16:22', lastUpdate: '0000-00-00 00:00:00' },
//   ];

//   return (
//     <div className="container mt-4">
//       <h2>Manage Categories</h2>
//       <button className="btn btn-success mb-3">Add</button>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Category</th>
//             <th>Description</th>
//             <th>Posting Date</th>
//             <th>Last Update Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category) => (
//             <tr key={category.id}>
//               <td>{category.id}</td>
//               <td>{category.name}</td>
//               <td>{category.description}</td>
//               <td>{category.postingDate}</td>
//               <td>{category.lastUpdate}</td>
//               <td>
//                 <a href="#" className="text-primary">
//                   <i className="fas fa-edit"></i>
//                 </a>
//                 <a href="#" className="text-danger ml-2">
//                   <i className="fas fa-trash"></i>
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageCategories;