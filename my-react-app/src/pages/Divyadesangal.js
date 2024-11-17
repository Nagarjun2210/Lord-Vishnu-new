import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { storage } from './components/firebase';

const Divyadesangal = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [temples, setTemples] = useState([]);
  const api_url = "http://localhost:5030";

  const findUrl = async () => {
    // Get all image names from temples
    const allImgNames = temples.map((temple) => temple.image_source);
    
    // Fetch URLs for all images asynchronously
    const allImgUrls = await Promise.all(
      allImgNames.map(async (item) => {
        try {
          const url = await storage.ref("images").child(item).getDownloadURL();
          return url;
        } catch (error) {
          console.error("Error fetching image URL for:", item, error);
          return null; // Fallback if the image URL fails to load
        }
      })
    );
    setImgUrl(allImgUrls);
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "Divyadesangal",
      title: "Divyadesangal"
    });

    fetch(api_url + "/gettemples")
      .then(res => res.json())
      .then(res => {
        setTemples(res);
      });

    console.log("Divyadesangal page rendered");
  }, []);

  // Fetch image URLs after temples are loaded
  useEffect(() => {
    if (temples.length > 0) {
      findUrl();
    }
  }, [temples]);

  const handleClick = (templeName) => {
    ReactGA.event({
      category: 'Divyadesam modal content',
      action: 'Click',
      label: templeName,
    });
    console.log(templeName);
  };

  const [modalTitle, setModalTitle] = useState();
  const [modalMessage, setModalMessage] = useState("");

  function setModalContent(templeName) {
    fetch(api_url + "/templedetails/" + templeName)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setModalMessage(res[0].temple_details);
      });
    setModalTitle(templeName);
    handleClick(templeName);
  };

  const myElement = (
    <div>
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">{modalTitle}</h4>
            </div>
            <div className="modal-body">
              <p>{modalMessage}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="marginTop"></div>
      <h1>108 divya desangal</h1>
      <p>A Divya Desam (Sanskrit: दिव्यदेशम्, Tamil: திவ்ய தேசம்) or Vaishnava Divya Desam is one of the 108 Vishnu and Lakshmi temples that is mentioned in the works of the Alvars, the poet-saints of the Sri Vaishnava tradition.<br/>
        Of the 108 temples, 105 are in India, one is in Nepal, and the last two are believed to be outside the earth, in Tirupparkatal and Vaikuntham. In India, they are spread across the states of Tamil Nadu (84), Kerala (11), Andhra Pradesh (2), Gujarat (1), Uttar Pradesh (4), and Uttarakhand (3). Muktinath, Saligramam is the only Divya Desam in Nepal. The Divya Desams are revered by the 12 Alvars in the Naalayira Divya Prabandham, a collection of 4,000 Tamil verses. The Divya Desams follow either Tenkalai or Vadakalai modes of worship.<br/>
        The Divya Desams are classified into six regions:<br/>
        Chera Nadu (western)<br/>
        Chola Nadu (central)<br/>
        Pandya Nadu (south)<br/>
        Pallava Nadu (north)<br/>
        Vada Nadu (northern India)<br/>
        Vinnulaga Divya Desams (celestial)</p>
      <center><p><b>Click the temple to see more info about it</b></p></center>
      <div className="grid-container">
        {temples.map((temple, index) => (
          <div key={temple.id} className="grid-item" type="button" data-toggle="modal" data-target="#myModal" onClick={() => setModalContent(temple.title)}>
            <div className="inner-grid">
              {imgUrl[index] ? (
                <img src={imgUrl[index]} alt={temple.title} />
              ) : (
                <img src="default_image.jpg" alt="default" />
              )}
              <div className="text_container">
                <p className="desam_name">{temple.title}</p>
                <p className="desam_loc">Location: {temple.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return myElement;
};

export default Divyadesangal;
