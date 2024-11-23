// import React from "react";

// const About = () => {
//   const events = [
//     {
//       year: "2015",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio nostrum minima aliquam quia error quaerat praesentium cumque magni incidunt similique, vitae ratione nihil, distinctio a, recusandae autem laborum omnis!",
//     },
//     {
//       year: "2016",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio, deserunt at odit aperiam neque illo. Aspernatur omnis sed beatae fuga laboriosam eum porro ea voluptas similique fugit, nisi mollitia?",
//     },
//     {
//       year: "2017",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio, deserunt at odit aperiam neque illo. Aspernatur omnis sed beatae fuga laboriosam eum porro ea voluptas similique fugit, nisi mollitia?",
//     },
//     {
//       year: "2018",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio, deserunt at odit aperiam neque illo. Aspernatur omnis sed beatae fuga laboriosam eum porro ea voluptas similique fugit, nisi mollitia?",
//     },
//   ];

//   return (
//     <section className="py-8">
//       <div className="container m-auto px-4">
//         <h2 className="text-2xl font-semibold">About</h2>

//         <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-0 before:w-1 before:bg-white">
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className={`pl-24 relative ${
//                 index !== 0 ? "pt-10" : ""
//               } pt-10 before:w-4 before:h-4`}
//             >
//               <h3 className="absolute left-0 text-lg font-semibold">
//                 {event.year}
//               </h3>
//               <p>{event.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
