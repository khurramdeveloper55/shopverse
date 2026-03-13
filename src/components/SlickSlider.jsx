import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickSlider({
  items,
  slidesToShow = 6,
  showDots = true,
  prevArrow = null,
  nextArrow = null,
}) {
  const settings = {
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    prevArrow,
    nextArrow,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: slidesToShow - 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.max(3, slidesToShow - 3) },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="px-3">
          {item}
        </div>
      ))}
    </Slider>
  );
}
