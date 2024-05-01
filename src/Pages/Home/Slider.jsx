import one from "../../assets/images/banner/1.jpg";
import two from "../../assets/images/banner/2.jpg";
import three from "../../assets/images/banner/3.jpg";
import four from "../../assets/images/banner/4.jpg";
import five from "../../assets/images/banner/5.jpg";
import six from "../../assets/images/banner/6.jpg";

export const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={one} className="w-full h-[400px] md:h-[600px] rounded-xl" />
          <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 left-5 right-5 bottom-3">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={two} className="w-full h-[400px] md:h-[600px] rounded-xl" />
          <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 left-5 right-5 bottom-3">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={three}
            className="w-full h-[400px] md:h-[600px] rounded-xl"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 left-5 right-5 bottom-3">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={four}
            className="w-full h-[400px] md:h-[600px] rounded-xl"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 left-5 right-5 bottom-3">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
