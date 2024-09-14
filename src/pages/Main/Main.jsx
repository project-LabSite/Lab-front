import bg_Img from '../../assets/images/energy-bg.png';

const Main = () => {
    return (
        <div
            className="pt-28 w-full min-h-[calc(100vh-88px)] text-6xl font-bold text-white bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${bg_Img})` }}
        >
            <div className="pt-28 pl-24 justify-around ">
                <div>Energy & Environment</div>
                <div>Polymer Lab</div>
            </div>
        </div>
    );
};

export default Main;
