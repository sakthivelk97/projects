import { useEffect, useState } from "react";
import './scroll.css'
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercentage);

//   if(errorMessage){
//     return <div> Error ! {errorMessage}</div>
//   }

  if(loading){
    return <div>Loading data ! Please Wait</div>
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0 ? data.map((item) => <p>{item.title}</p>) : 0}
      </div>
        
      <div
  style={{
    backgroundColor: '#1c1c1c',
  }}>
<a href="#">
  <BsArrowUpCircleFill
    style={{
      color: '#fff',
      margin: 'auto',
      padding: '10px',
      fontSize: '20px'
    }}/>
  </a>
</div>

    </div>
  );
}
