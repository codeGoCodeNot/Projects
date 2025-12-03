const Landing = () => {
  return (
    <>
      <h1>Online shopping simplified</h1>
      <p className="tagline text-dimmed">
        Order your groceries from Blackmarket with our easy to use app, and get
        your products delivered straight to your doorstep.
      </p>
      <button className="btn">Start shopping</button>
      <img
        className="landing-cover"
        width="816"
        height="380"
        src="https://i.pinimg.com/1200x/05/ec/df/05ecdf15dfecf3be29e0186530a5b267.jpg"
        alt="Display of fruits and vegetables"
      />
    </>
  );
};

export default Landing;
