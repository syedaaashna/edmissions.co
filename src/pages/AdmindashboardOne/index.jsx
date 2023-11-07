import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const AdmindashboardOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[116px] w-full">
        <div className="flex flex-col md:gap-10 gap-[155px] items-center justify-start w-full">
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
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1279px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border-4 border-blue-800 border-solid flex md:flex-1 flex-col items-center justify-start pb-0.5 pl-0.5 shadow-bs w-[51%] md:w-full">
              <div className="bg-blue-800 flex flex-col items-start justify-start p-[27px] sm:px-5">
                <Text
                  className="mb-1 ml-1.5 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtInterSemiBold40WhiteA700"
                >
                  UPLOAD FILES
                </Text>
              </div>
              <div className="bg-white-A700 border-[5px] border-amber-400 border-solid flex flex-col items-center justify-end mt-[72px] p-[42px] md:px-10 sm:px-5 rounded-[27px]">
                <Text
                  className="mt-[126px] sm:text-4xl md:text-[38px] text-[40px] text-blue-800"
                  size="txtInterMedium40Blue800"
                >
                  Drag files here
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] mb-[26px] min-w-[204px] mt-[67px] rounded-[5px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
                color="blue_800"
              >
                SAVE
              </Button>
            </div>
            <div className="h-[598px] relative w-[43%] md:w-full">
              <div className="absolute bg-white-A700 border-4 border-blue-800 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-7 sm:px-5 w-full">
                <Text
                  className="bg-white-A700 border-[3px] border-amber-400 border-solid h-[68px] justify-center mt-[153px] pl-[31px] pr-[35px] sm:px-5 py-[15px] text-3xl sm:text-[26px] md:text-[28px] text-gray-600 w-[383px]"
                  size="txtInterRegular30"
                >
                  Name
                </Text>
                <Text
                  className="bg-white-A700 border-[3px] border-amber-400 border-solid h-[68px] justify-center mt-[29px] pl-8 pr-[35px] sm:px-5 py-[15px] text-3xl sm:text-[26px] md:text-[28px] text-gray-600 w-[383px]"
                  size="txtInterRegular30"
                >
                  Status
                </Text>
                <Text
                  className="bg-white-A700 border-[3px] border-amber-400 border-solid h-[68px] justify-center mt-[29px] pl-8 pr-[35px] sm:px-5 py-[15px] text-3xl sm:text-[26px] md:text-[28px] text-gray-600 w-[383px]"
                  size="txtInterRegular30"
                >
                  Contact Details
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[204px] mt-[65px] rounded-[5px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
                  color="blue_800"
                >
                  SAVE
                </Button>
              </div>
              <Button
                className="absolute cursor-pointer font-semibold inset-x-[0] leading-[normal] min-w-[542px] sm:min-w-full mx-auto md:text-4xl sm:text-[34px] text-[38px] text-center top-[0]"
                shape="square"
                color="blue_800"
                size="lg"
              >
                SINGLE STUDENT UPLOAD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmindashboardOnePage;
