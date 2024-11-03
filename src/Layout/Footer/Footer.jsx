const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex flex-col md:flex-row items-center text-gray-400 justify-around backdrop-blur-md bg-transparent p-4">
      <div className="py-2 text-center md:text-left">
        <div>© 2024 EEPL. All Rights Reserved</div>
        <div>Proudly created with Prof. Joe's lab</div>
      </div>
      <div className="py-2 text-center md:text-left">
        <div>Energy & Environment Polymer Lab</div>
        <div>Email: chp@gnu.ac.kr</div>
      </div>
      <div className="py-2 text-center md:text-left">
        <div>연구실: 경남 진주시 내동로 139번길 8번지 내동캠퍼스 601호</div>
      </div>
    </div>
  );
};

export default Footer;
