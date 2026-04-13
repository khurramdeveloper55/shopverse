export default function ServiceFeatures() {
  const services = [
    {
      id: 1,
      img: "truck-delivery-hover-pinch.webp",
      title: "Free Worldwide Shipping",
      desc: "Enjoy fast, reliable delivery on all orders no matter where you are.",
    },
    {
      id: 2,
      img: "wallet-hover-wallet.webp",
      title: "14-Day Easy Returns",
      desc: "Not satisfied with your purchase? Send it back within 14 days for a full refund.",
    },
    {
      id: 3,
      img: "call-phone-hover-phone-ring.webp",
      title: "Expert Customer Support",
      desc: "Our dedicated support team is here to assist you 24/7.",
    },
  ];

  return (
    <div className="flex md:flex-row flex-col gap-8 mx-8 my-20">
      {services.map((item) => (
        <div key={item.id} className="flex items-start bg-[#fafafa] px-4 py-6">
          <span className="mr-4 max-w-16">
            <img src={item.img} alt="" />
          </span>

          <div className="text-left">
            <h5 className="font-semibold text-xl text-black">{item.title}</h5>
            <p className="text-gray-600 open-sans">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
