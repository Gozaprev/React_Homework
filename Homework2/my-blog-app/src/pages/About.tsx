// With Tailwind css
// const About = () => (
//     <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded shadow">
//         <h1 className="text-3xl font-bold text-blue-700 mb-4">About This Blog</h1>
//         <p className="text-gray-700 mb-2">
//             This is a simple personal blog built with React, Vite, and styled using Tailwind CSS utility classes inline.
//         </p>
//         <p className="text-gray-700">
//             Created by <span className="font-semibold">[Bob Bobski]</span>.
//         </p>
//     </div>
// );

// export default About;


const About = () => (
    <div className="about">
        <h1>About This Blog</h1>
        <p>
            This is a simple personal blog built with React, Vite, and styled using plain CSS.
        </p>
        <p>
            Created by <span className="author-name">[Bob Bobski]</span>.
        </p>
    </div>
);

export default About;
