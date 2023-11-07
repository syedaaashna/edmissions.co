import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const InstitutionsPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[109px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex h-[151px] sm:h-[238px] justify-end md:px-5 relative w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-start justify-center mb-[41px] ml-auto mr-[59px] mt-auto w-[29%]">
              <Text
                className="mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Learn more
              </Text>
              <Text
                className="ml-12 sm:ml-[0] sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Sign up
              </Text>
              <Text
                className="sm:ml-[0] ml-[54px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Log in
              </Text>
            </div>
            <div className="absolute bg-blue-800 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto p-[45px] md:px-10 sm:px-5 w-full">
              <Text
                className="common-pointer mb-[5px] sm:mt-0 mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-amber-400"
                size="txtInterSemiBold25"
                onClick={() => navigate("/")}
              >
                <span className="text-amber-400 font-inter text-left font-semibold">
                  ED
                </span>
                <span className="text-white-A700 font-inter text-left font-semibold">
                  MISSIONS
                </span>
                <span className="text-amber-400 font-inter text-left font-semibold">
                  .CO
                </span>
              </Text>
              <Text
                className="common-pointer mb-[5px] sm:ml-[0] ml-[822px] sm:mt-0 mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
                onClick={() => navigate("/desktopnine")}
              >
                About Us
              </Text>
              <Text
                className="mb-[5px] sm:ml-[0] ml-[62px] sm:mt-0 mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Contact Us
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 gap-[62px] items-center justify-start max-w-[1348px] mt-10 mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[172px] md:h-auto object-cover w-[16%] sm:w-full"
              src="images/img_logocircle1.png"
              alt="logocircleOne"
            />
            <Text
              className="sm:flex-1 sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center w-[81%] sm:w-full"
              size="txtInterSemiBold45"
            >
              DECCAN COLLEGE OF ENGINEERING AND TECHNOLOGY
            </Text>
          </div>
          <div className="h-[504px] md:h-[552px] max-w-[1241px] mt-12 mx-auto md:px-5 relative w-full">
            <div className="bg-white-A700 border-[5px] border-amber-400 border-solid h-[448px] m-auto rounded-[40px] w-[97%]"></div>
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto outline outline-[2.5px] outline-blue-800 p-32 md:px-10 sm:px-5 rounded-[48px] shadow-bs2 w-full">
              <Text
                className="md:ml-[0] ml-[209px] mt-5 sm:text-[31px] md:text-[33px] text-[35px] text-amber-400 text-center"
                size="txtInterSemiBold35"
              >
                <>
                  Delivering world class education. <br />
                  <br />
                  Content Of website{" "}
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstitutionsPagePage;
