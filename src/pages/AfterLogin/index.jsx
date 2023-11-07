import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const AfterLoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[65px] w-full">
        <div className="flex flex-col md:gap-10 gap-44 items-center justify-start w-full">
          <header className="bg-blue-800 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full">
            <Text
              className="common-pointer mb-[54px] sm:ml-[0] ml-[46px] sm:mt-0 mt-[65px] sm:text-[21px] md:text-[23px] text-[25px] text-amber-400"
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
              className="common-pointer mb-[53px] sm:ml-[0] ml-[835px] sm:mt-0 mt-[66px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
              size="txtInterSemiBold25WhiteA700"
              onClick={() => navigate("/desktopnine")}
            >
              About Us
            </Text>
            <Text
              className="mb-[53px] sm:ml-[0] ml-[67px] mr-[41px] sm:mt-0 mt-[66px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
              size="txtInterSemiBold25WhiteA700"
            >
              Contact Us
            </Text>
          </header>
          <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-start max-w-[1048px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-blue-800_01 border-2 border-solid border-white-A700 flex md:flex-1 flex-col gap-4 items-center justify-end md:mt-0 mt-2 p-[5px] rounded-[10px] shadow-bs w-[42%] md:w-full">
                <Text
                  className="mt-[97px] sm:text-[40px] md:text-[46px] text-[50px] text-amber-400"
                  size="txtInterSemiBold50Amber400"
                >
                  Institutions
                </Text>
                <Img
                  className="common-pointer h-[85px] md:h-auto object-cover w-[14%] sm:w-full"
                  src="images/img_forwardbutton.png"
                  alt="forwardbutton"
                  onClick={() => navigate("/institutions")}
                />
              </div>
              <div className="h-[273px] md:h-[274px] mb-[5px] relative w-[42%] md:w-full">
                <div className="absolute bg-blue-800_01 border-2 border-solid border-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[60px] md:px-10 sm:px-5 rounded-[10px] shadow-bs w-full">
                  <Text
                    className="mb-[37px] mt-[51px] sm:text-[40px] md:text-[46px] text-[50px] text-amber-400"
                    size="txtInterSemiBold50Amber400"
                  >
                    Companies
                  </Text>
                </div>
                <Img
                  className="common-pointer absolute bottom-[0] h-[85px] object-cover right-[4%] w-[14%]"
                  src="images/img_forwardbutton.png"
                  alt="forwardbutton_One"
                  onClick={() => navigate("/companies")}
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="md:h-[269px] h-[270px] relative w-[42%] md:w-full">
                <Text
                  className="mt-1 mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                  size="txtInterSemiBold50"
                >
                  <>-&gt;</>
                </Text>
                <div className="absolute bg-blue-800_01 border-2 border-solid border-white-A700 flex flex-col gap-[21px] h-full inset-[0] justify-center m-auto pt-[15px] px-[15px] rounded-[10px] shadow-bs1 w-full">
                  <Text
                    className="md:ml-[0] ml-[45px] mr-[81px] mt-[87px] sm:text-[40px] md:text-[46px] text-[50px] text-amber-400"
                    size="txtInterSemiBold50Amber400"
                  >
                    Businesses
                  </Text>
                  <Img
                    className="common-pointer h-[85px] md:h-auto md:ml-[0] ml-[347px] object-cover w-[15%] sm:w-full"
                    src="images/img_forwardbutton.png"
                    alt="forwardbutton_Two"
                    onClick={() => navigate("/buisness")}
                  />
                </div>
              </div>
              <div className="bg-blue-800_01 border-2 border-solid border-white-A700 flex md:flex-1 flex-col gap-5 justify-end pt-[17px] px-[17px] rounded-[10px] shadow-bs w-[42%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[43px] mr-[136px] mt-[86px] sm:text-[40px] md:text-[46px] text-[50px] text-amber-400"
                  size="txtInterSemiBold50Amber400"
                >
                  Students
                </Text>
                <Img
                  className="common-pointer h-[85px] md:h-auto md:ml-[0] ml-[343px] object-cover w-[15%] sm:w-full"
                  src="images/img_forwardbutton.png"
                  alt="forwardbutton_Three"
                  onClick={() => navigate("/payment")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterLoginPage;
