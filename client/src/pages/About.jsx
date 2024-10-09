export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl text-center font-bold mb-4 text-slate-800">About</h1>
      <p className="text-slate-700 mb-4 text-justify">This is a full-stack application built with the MERN - MongoDB, Express, React, NodeJS - stack. It includes authentication features that allow users to signin, login, logout and provides access to protected routes only for authenticated users.</p>
      <p className="text-slate-700 mb-4 text-justify">The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON Web Tokens (JWT).</p>
      <p className="text-slate-700 mb-4 text-justify">This application is intended as a starting point for building full-stack
        web applications with authentication using the MERN stack. Feel free to
        use it as a template for your own projects!</p>
    </div>
  )
}
