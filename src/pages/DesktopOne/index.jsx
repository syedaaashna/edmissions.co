import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const DesktopOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[158px] w-full">
        <div className="flex flex-col md:gap-10 gap-20 items-end justify-start w-full">
          <div className="h-[151px] md:h-[235px] sm:h-[380px] md:px-5 relative w-full">
            <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-start mt-[49px] mx-auto w-[93%]">
              <Sidebar className="!sticky !w-[202px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-amber-400"
                  size="txtInterSemiBold25"
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
                <div className="h-[31px] relative w-full">
                  <Text
                    className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-amber-400"
                    size="txtInterSemiBold25"
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
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-amber-400 w-max"
                    size="txtInterSemiBold25"
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
                </div>
              </Sidebar>
              <div className="flex-1 h-[31px] md:h-[33px] mb-0.5 md:ml-[0] ml-[621px] relative w-full">
                <Text
                  className="common-pointer m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtInterSemiBold25WhiteA700"
                  onClick={() => navigate("/desktopnine")}
                >
                  Learn more
                </Text>
                <div className="absolute h-[31px] inset-[0] justify-center m-auto w-full">
                  <Text
                    className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtInterSemiBold25WhiteA700"
                  >
                    Learn more
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-max"
                    size="txtInterSemiBold25WhiteA700"
                  >
                    Learn more
                  </Text>
                </div>
              </div>
              <div className="flex-1 h-[31px] md:ml-[0] ml-[77px] md:mt-0 mt-0.5 relative w-full">
                <Text
                  className="common-pointer m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtInterSemiBold25WhiteA700"
                  onClick={() => navigate("/login")}
                >
                  Sign up
                </Text>
                <div className="absolute h-[31px] inset-[0] justify-center m-auto w-full">
                  <Text
                    className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtInterSemiBold25WhiteA700"
                  >
                    Sign up
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-max"
                    size="txtInterSemiBold25WhiteA700"
                  >
                    Sign up
                  </Text>
                </div>
              </div>
              <div className="flex-1 h-[31px] md:ml-[0] ml-[59px] relative w-full">
                <Text
                  className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtInterSemiBold25WhiteA700"
                >
                  Pricing Plan
                </Text>
                <div className="absolute h-[31px] inset-[0] justify-center m-auto w-full">
                  <Text
                    className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtInterSemiBold25WhiteA700"
                  >
                    Pricing Plan
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-max"
                    size="txtInterSemiBold25WhiteA700"
                  >
                    Pricing Plan
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-blue-800 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto p-[39px] sm:px-5 w-full">
              <Text
                className="mb-[26px] sm:mt-0 mt-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-amber-400"
                size="txtInterSemiBold25"
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
                className="mb-[31px] sm:ml-[0] ml-[621px] sm:mt-0 mt-2.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                About Us
              </Text>
              <Text
                className="mb-[29px] sm:ml-[0] ml-[102px] sm:mt-0 mt-3 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Login
              </Text>
              <Text
                className="mb-8 sm:ml-[0] ml-[84px] sm:mt-0 mt-[9px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Contact Us
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:px-5 w-[95%] md:w-full">
            <div className="flex flex-col justify-start md:mt-0 mt-[130px]">
              <Text
                className="md:text-5xl text-[90px] text-black-900"
                size="txtInterSemiBold90"
              >
                Edmissions.co
              </Text>
              <Text
                className="md:ml-[0] ml-[41px] mt-[22px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtInterSemiBold50"
              >
                Made finding easy!
              </Text>
              <Text
                className="common-pointer md:ml-[0] ml-[76px] mt-3.5 sm:text-4xl md:text-[38px] text-[40px] text-amber-400"
                size="txtInterSemiBold40"
                onClick={() => navigate("/afterlogin")}
              >
                <>I am looking for -&gt;</>
              </Text>
            </div>
            <Img
              className="h-[635px] sm:h-auto object-cover w-[54%] md:w-full"
              src="images/img_24884821.png"
              alt="24884821"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
