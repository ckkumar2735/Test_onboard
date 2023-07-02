// Main.js
import React, { useState, useEffect } from 'react';
import '../Styles/Main.css';
import Headers from './Headers';
import Card_1 from './Card_1';
import Category from './Category';
import StepContainer from './StepContainer';
import Basic_Info from './Basic_Info';
import Legal_Doc from './Legal_Doc';
import LocationForm from './LocationForm ';
import Bank_Details from './Bank_Details';
import Esign from './Esign';
import Comission_onbording from './Comission_onbording';
import img1 from "../Images/page1.png";
import img2 from "../Images/page2.png";
import img3 from "../Images/page3.png";
import img4 from "../Images/page4.png";
import img5 from "../Images/page5.png";
import img6 from "../Images/page6.png";
import img7 from "../Images/page7.png";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const loadPageScript = async () => {
      const scriptPath = `./page${currentPage}.js`;

      try {
        const module = await import(scriptPath);
        module.default();
      } catch (error) {
        console.error('Failed to load script:', error);
      }
    };

    loadPageScript();
  }, [currentPage]);

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>

          <div className='col-lg-9 mt-3' style={{ background: "#FFFFFF" }}>
            <div className='row'>

              {currentPage === 1 && (
                <div>
                  <Headers />
                  <StepContainer currentPage={currentPage} />
                  <Category />
                  <Card_1 handlePageChange={handlePageChange} />

                </div>
              )}

              {currentPage === 2 && (
                <div>
                  <Headers />
                  <StepContainer currentPage={currentPage} />
                  <Basic_Info />

                  <div className="my-4 text-center">
                    <button className='btn3' onClick={previousPage}>Go Back</button>
                    <span className="mx-5"></span><span className="mx-5"></span>
                    <button className='btn2' onClick={nextPage}>PROCEED</button>
                  </div>
                </div>
              )}

              {currentPage === 3 && (
                <div>
                  <Headers />
                  <StepContainer currentPage={currentPage} />
                  <Legal_Doc />

                  <div className="my-4 text-center">
                    <button className='btn3 ' onClick={previousPage}>Go Back</button>
                    <span className="mx-5"></span><span className="mx-5"></span>
                    <button className='btn2 ' onClick={nextPage}>PROCEED</button>
                  </div>
                </div>
              )}

              {currentPage === 4 && (
                <div>
                  <Headers />
                  <StepContainer currentPage={currentPage} />
                  <LocationForm />

                  <div className="my-4 text-center">
                    <button className='btn3 ' onClick={previousPage}>Go Back</button>
                    <span className="mx-5"></span><span className="mx-5"></span>
                    <button className='btn2 ' onClick={nextPage}>PROCEED</button>
                  </div>
                </div>
              )}

              {currentPage === 5 && (
                <div>
                  <Headers />
                  <StepContainer currentPage={currentPage} />
                  <Bank_Details />

                  <div className="my-4 text-center">
                    <button className='btn3 ' onClick={previousPage}>Go Back</button>
                    <span className="mx-5"></span><span className="mx-5"></span>
                    <button className='btn2 ' onClick={nextPage}>PROCEED</button>
                  </div>
                </div>
              )}

              {currentPage === 6 && (
                <div>
                  <Headers />
                  <StepContainer currentPage={currentPage} />
                  <Esign />

                  <div className="my-4 text-center">
                    <button className='btn3' onClick={previousPage}>Go Back</button>
                    <span className="mx-5"></span><span className="mx-5"></span>
                    <button className='btn2' onClick={nextPage}>PROCEED</button>
                  </div>
                </div>
              )}

              {currentPage === 7 && (
                <div>
                  <Headers />
                  <StepContainer currentPage={currentPage} />
                  <Comission_onbording />

                  {/* Content for Page 4 */}
                  {/* <button className='btn3 mt-5' onClick={previousPage}> Go Back</button> */}

                </div>
              )}

            </div>
          </div>
          <div className='col-lg-3 right_bg'>
            {currentPage === 1 && (
              <div>
                <img src={img1} alt="Image1" className='img_1 img_fluid' />
              </div>
            )}

            {currentPage === 2 && (
              <div>
                <img src={img2} alt="image2" className='img_2 img_fluid' />
              </div>
            )}

            {currentPage === 3 && (
              <div>
                <img src={img3} alt='image3' className='img_3  img_fluid' />
              </div>
            )}

            {currentPage === 4 && (
              <div>
                <img src={img4} alt="image4" className='img_4 img_fluid' />
              </div>
            )}

            {currentPage === 5 && (
              <div>
                <img src={img7} alt="image7" className='img_7 img_fluid' />
              </div>
            )}

            {currentPage === 6 && (
              <div>
                <img src={img5} alt="image5" className='img_5 img_fluid' />
              </div>
            )}

            {currentPage === 7 && (
              <div>
                <img src={img6} alt="image5" className='img_6 img_fluid' />
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
