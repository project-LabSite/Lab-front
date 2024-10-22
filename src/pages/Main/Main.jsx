import bg_Img from "../../assets/images/energy-bg.png";
import "../../assets/styles/main.css";

const Main = () => {
  return (
    <div
      className="relative pt-28 w-full min-h-[100vh] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg_Img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative pt-28 pl-24 flex flex-col justify-center items-center text-gray-100">
        <div className="fade-in-section">
          <div className="text-6xl font-bold mb-4">Energy & Environment</div>
          <div className="text-5xl font-bold">Polymer Lab</div>
        </div>
        <div className="fade-in-section flex flex-col items-center mt-32">
          <p className="text-lg max-w-2xl text-center">
            Our mission is to innovate and lead in polymer research for a
            sustainable future. We focus on developing advanced materials and
            technologies that address the world's energy and environmental
            challenges. Through interdisciplinary collaboration and cutting-edge
            research, we aim to create solutions that promote sustainability,
            efficiency, and resilience across various industries.
          </p>
          <a
            href="https://scholar.google.co.kr/citations?view_op=list_works&hl=ko&hl=ko&user=Bjxv0isAAAAJ&pagesize=80"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-400 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
