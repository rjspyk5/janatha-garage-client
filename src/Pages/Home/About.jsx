import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

export const About = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content px-0 grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            {" "}
            <img src={person} className="w-3/4 h-full rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute top-1/2  border-4 border-white right-4 rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <p className="text-red-500 font-bold text-lg">About Us</p>
            <h1 className="text-4xl font-bold max-w-[330px]">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn bg-red-500 text-white">Get More info</button>
          </div>
        </div>
      </div>
    </div>
  );
};
