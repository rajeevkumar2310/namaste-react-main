const About = () => {
  return (
    <div className="min-h-dvh text-center">
      <h1 className="text-2xl font-bold ">About Us Page!! </h1>
      <p className="text-lg">This is Namaste React about us page!!!</p>
      <input
        type="text"
        placeholder="name"
        className="m-2 p-2 border border-black rounded-lg"
      />
      <input
        type="text"
        placeholder="name2"
        className="m-2 p-2 border border-black rounded-lg"
      />
      <button className="m-10 p-2 rounded-lg bg-slate-200">Submit</button>
    </div>
  );
};

export default About;
