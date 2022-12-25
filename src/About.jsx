import "./css/about.css";
export default function About() {
  const partner = [
    {
      id: 1,
      name: "Farm Industries",
      desc: "provide almost real time monitoring of crop health in different stages of growth.",
    },
    {
      id: 2,
      name: "Commodity Traders",
      desc: "connecting traders to the farm lands of high yield quality and quantity.",
    },
    {
      id: 3,
      name: "Real estate",
      desc: "provide insights on unused agricultural areas in the recent past on the outskirts of major cities in India.",
    },
    {
      id: 4,
      name: "Government",
      desc: "partnering with agro or health ministry to report residue burning after a crop season.",
    },
  ];

  return (
    <div className="about">
      <div className="landing">
        <div className="landing-text">
          <h2>Simplifying satellite data analysis for everyone</h2>
          <h4>
            Our rigorous calculations from algorithms fueled by AI and off field
            information from farms.
          </h4>
        </div>
        <div className="landing-images">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img3"></div>
          <div className="img4"></div>
        </div>
      </div>
      <div className="landing2">
        <div className="landing2-image">
          <img src="/images/abt5.png"></img>
        </div>
        <div className="landing2-text">
          <h1>No Details</h1>
          <h1>Go Unnoticed!</h1>
          <p>from seasonality to type of crop of the crops in just a click</p>
          <button>Check out our services</button>
          <img src="/images/iconClick.png"></img>
        </div>
      </div>
      <div className="landing3">
        <div className="landing3-ellipse">
          <h1 className="ellipse-text">Our Partners</h1>
          <svg
            width="428"
            height="855"
            viewBox="0 0 428 855"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_438_781" fill="white">
              <path d="M0.5 855C56.6401 855 112.23 843.942 164.097 822.458C215.964 800.975 263.091 769.485 302.788 729.788C342.485 690.091 373.975 642.964 395.459 591.097C416.942 539.23 428 483.64 428 427.5C428 371.36 416.942 315.77 395.458 263.903C373.975 212.036 342.485 164.909 302.788 125.212C263.091 85.5148 215.964 54.0254 164.097 32.5415C112.23 11.0576 56.6401 -4.90792e-06 0.499969 0L0.5 427.5L0.5 855Z" />
            </mask>
            <path
              d="M0.5 855C56.6401 855 112.23 843.942 164.097 822.458C215.964 800.975 263.091 769.485 302.788 729.788C342.485 690.091 373.975 642.964 395.459 591.097C416.942 539.23 428 483.64 428 427.5C428 371.36 416.942 315.77 395.458 263.903C373.975 212.036 342.485 164.909 302.788 125.212C263.091 85.5148 215.964 54.0254 164.097 32.5415C112.23 11.0576 56.6401 -4.90792e-06 0.499969 0L0.5 427.5L0.5 855Z"
              stroke="white"
              stroke-width="2"
              stroke-dasharray="4 50"
              mask="url(#path-1-inside-1_438_781)"
            />
          </svg>
        </div>
        <div className="landing3-boxes">
          {partner.map((item) => {
            return (
              <div className="landing3-box">
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                <a>Know more &gt;</a>
              </div>
            );
          })}
        </div>
      </div>
      <footer>
        <div className="quick-links">
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>

            </ul>
        </div>
        <div className="contact-us">
            <h3>Contact us at</h3>
            <p>xyz@gmail.com</p>
            <p>+91- 1234457691</p>
        </div>
        <div className="address">
        <h3>Office address</h3>
        <p>Geomatics Dept.
IIT Roorkee
Roorkee
Uttarakhand-247667</p>
        </div>
        
      </footer>
      <div className="orange"></div>
    </div>
  );
}
