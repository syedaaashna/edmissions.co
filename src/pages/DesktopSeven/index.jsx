import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DesktopSevenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-end mx-auto px-1.5 w-full">
        <div className="flex md:flex-col flex-row gap-[54px] items-start justify-start md:px-5 w-[92%] md:w-full">
          <div className="bg-blue-800_01 flex flex-col justify-end p-1.5 w-[56%] md:w-full">
            <Text
              className="md:ml-[0] ml-[42px] mr-[72px] mt-[93px] md:text-5xl text-[70px] text-white-A700"
              size="txtInterBold70"
            >
              WELCOME BACK!
            </Text>
            <Text
              className="md:ml-[0] mt-[98px] mx-[58px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-[84%] sm:w-full"
              size="txtInterSemiBold40WhiteA700"
            >
              To keep connected with us please login.
            </Text>
            <Img
              className="h-[428px] mb-[17px] md:ml-[0] ml-[242px] mt-[241px]"
              src="images/img_illustration.svg"
              alt="illustration"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-[86px] items-center justify-start md:mt-0 mt-[72px] w-[41%] md:w-full">
            <Text
              className="md:text-5xl text-6xl text-black-900"
              size="txtInterBold60"
            >
              Create Account
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="bg-white-A700 border-2 border-gray-600 border-solid h-[66px] justify-center pl-[22px] pr-[35px] sm:px-5 py-5 rounded-[10px] text-gray-600 text-xl w-[234px]"
                  size="txtInterMedium20"
                >
                  First Name
                </Text>
                <Text
                  className="bg-white-A700 border-2 border-gray-600 border-solid h-[66px] justify-center pl-[21px] pr-[35px] sm:px-5 py-5 rounded-[10px] text-gray-600 text-xl w-[231px]"
                  size="txtInterMedium20"
                >
                  Last Name
                </Text>
              </div>
              <Text
                className="bg-white-A700 border-2 border-gray-600 border-solid h-[77px] justify-center mt-[52px] pb-[25px] pl-[22px] pr-[35px] pt-5 sm:px-5 rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600 w-[525px]"
                size="txtInterMedium25Gray600"
              >
                Email
              </Text>
              <div className="bg-white-A700 border-2 border-gray-600 border-solid flex flex-row sm:gap-10 items-start justify-between mt-[52px] p-5 rounded-[10px] w-full">
                <Text
                  className="mb-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                  size="txtInterMedium25Gray600"
                >
                  Password
                </Text>
                <Text
                  className="mb-[5px] mr-[27px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                  size="txtInterMedium25Gray600"
                >
                  Show
                </Text>
              </div>
              <div className="bg-white-A700 border-2 border-gray-600 border-solid flex flex-row sm:gap-10 items-start justify-between mt-[52px] p-5 rounded-[10px] w-full">
                <Text
                  className="mb-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                  size="txtInterMedium25Gray600"
                >
                  Confirm Password
                </Text>
                <Text
                  className="mr-[27px] mt-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                  size="txtInterMedium25Gray600"
                >
                  Show
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-start md:ml-[0] ml-[17px] mt-[29px] w-[81%] md:w-full">
                <div className="bg-white-A700 border border-black-900 border-solid h-[35px] w-9"></div>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                  size="txtInterMedium25Gray600"
                >
                  I Agree with privacy and policy
                </Text>
              </div>
              <Button
                className="common-pointer !text-amber-400 border-2 border-gray-600 border-solid cursor-pointer font-semibold leading-[normal] min-w-[525px] sm:min-w-full mt-[33px] rounded-[10px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                onClick={() => navigate("/")}
                color="blue_800"
                size="md"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSevenPage;
