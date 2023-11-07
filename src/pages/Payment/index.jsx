import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[215px] justify-start mx-auto pb-[94px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[155px] md:h-[237px] sm:h-[383px] md:px-5 relative w-full">
            <div className="absolute h-[151px] md:h-[237px] sm:h-[383px] inset-[0] justify-center m-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-start mt-[49px] mx-auto w-[93%]">
                <div className="h-[31px] md:h-[33px] mb-0.5 relative w-[16%] md:w-full">
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
                <div className="h-[31px] md:h-[33px] mb-0.5 md:ml-[0] ml-[621px] relative w-[11%] md:w-full">
                  <Text
                    className="common-pointer m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtInterSemiBold25WhiteA700"
                    onClick={() => navigate("/desktopnine")}
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
                <div className="h-[31px] md:ml-[0] ml-[77px] md:mt-0 mt-0.5 relative w-[7%] md:w-full">
                  <Text
                    className="common-pointer m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtInterSemiBold25WhiteA700"
                    onClick={() => navigate("/login")}
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
                <div className="h-[31px] md:ml-[0] ml-[59px] relative w-[11%] md:w-full">
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
              <div className="absolute bg-blue-800 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto p-[39px] sm:px-5 w-full">
                <Text
                  className="mb-[31px] sm:mt-0 mt-2.5 sm:text-[21px] md:text-[23px] text-[25px] text-amber-400"
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
                  Learn more
                </Text>
                <Text
                  className="mb-[29px] sm:ml-[0] ml-[77px] sm:mt-0 mt-3 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtInterSemiBold25WhiteA700"
                >
                  Sign up
                </Text>
                <Text
                  className="mb-[30px] sm:ml-[0] ml-[59px] sm:mt-0 mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtInterSemiBold25WhiteA700"
                >
                  Pricing Plan
                </Text>
              </div>
            </div>
            <div className="absolute bg-blue-800 flex sm:flex-col flex-row sm:gap-5 h-max inset-[0] items-start justify-center m-auto p-[39px] sm:px-5 w-full">
              <Text
                className="common-pointer mb-[30px] sm:mt-0 mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-amber-400"
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
                className="mb-[30px] sm:ml-[0] ml-[841px] sm:mt-0 mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                About Us
              </Text>
              <Text
                className="mb-[35px] sm:ml-[0] ml-[57px] sm:mt-0 mt-1.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Contact Us
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border-[5px] border-blue-800 border-solid flex flex-col gap-[54px] justify-start md:ml-[0] ml-[277px] mr-[422px] p-[70px] md:px-5 rounded-[30px] w-[52%] md:w-full">
          <Text
            className="ml-12 md:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
            size="txtInterSemiBold50"
          >
            Payment
          </Text>
          <div className="h-[228px] md:h-[303px] mb-[75px] md:ml-[0] ml-[18px] mr-3 relative w-[95%] sm:w-full">
            <Img
              className="common-pointer h-[72px] mt-[58px] mx-auto object-cover w-[19%]"
              src="images/img_forwardbutton.png"
              alt="forwardbutton"
              onClick={() => navigate("/studentsdataafterpayment")}
            />
            <div className="absolute bg-white-A700 border-4 border-amber-400 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-16 md:px-10 sm:px-5 rounded-[27px] w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] mb-[13px] min-w-[266px] rounded-[5px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                color="blue_800"
                size="md"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
