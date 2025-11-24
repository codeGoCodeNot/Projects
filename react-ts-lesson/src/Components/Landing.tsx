const Landing = ({ onShowProduct }: { onShowProduct: () => void }) => {
  return (
    <>
      <h1>Online shopping simplified</h1>
      <p className="tagline text-dimmed">
        Order your groceries from Blackmarket with our easy to use app, and get
        your products delivered straight to your doorstep.
      </p>
      <button onClick={onShowProduct} className="btn">
        Start shopping
      </button>
      <img
        className="landing-cover"
        width="816"
        height="380"
        src="https://www.drugfreekidscanada.org/wp-content/uploads/2022/10/shutterstock_2195859413.jpeg"
        alt="Display of fruits and vegetables"
      />
    </>
  );
};

export default Landing;
