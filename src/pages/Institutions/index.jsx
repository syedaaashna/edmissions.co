import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const InstitutionsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[105px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="h-[151px] sm:h-[252px] md:px-5 relative w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-start justify-center ml-auto mr-[59px] mt-0.5 w-[29%]">
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
            <div className="absolute bg-blue-800 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto p-[41px] md:px-10 sm:px-5 w-full">
              <Text
                className="common-pointer mb-[13px] sm:mt-0 mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-amber-400"
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
                className="common-pointer mb-3 sm:ml-[0] ml-[835px] sm:mt-0 mt-[25px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
                onClick={() => navigate("/desktopnine")}
              >
                About Us
              </Text>
              <Text
                className="mb-3 sm:ml-[0] ml-[67px] sm:mt-0 mt-[25px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Contact Us
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[346px] mt-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
            size="txtInterSemiBold25Gray600"
          >
            Explore options based on your preferences
          </Text>
          <div className="bg-blue-800 flex md:flex-col flex-row gap-[25px] items-center justify-center md:ml-[0] ml-[316px] mr-[306px] mt-2 p-3 md:px-5 rounded-[40px] w-[57%] md:w-full">
            <Img
              className="h-[72px] sm:h-auto md:ml-[0] ml-[42px] object-cover w-[11%] md:w-full"
              src="images/img_search.png"
              alt="search"
            />
            <Text
              className="mr-[228px] sm:text-4xl md:text-[38px] text-[40px] text-amber-400_7c"
              size="txtInterSemiBold40Amber4007c"
            >
              Name,Area,Course....
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[327px] mt-[45px] md:px-5">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
              size="txtInterBold50"
            >
              Prominent Institutions in Hyderabad
            </Text>
            <Text
              className="mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
              size="txtInterSemiBold25Gray600"
            >
              Find the best institutions and their details at the same page!!
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1380px] mt-[60px] mx-auto md:px-5 w-full">
            <div className="bg-blue_gray-50 border border-black-900 border-solid flex md:flex-1 flex-col items-center justify-start mb-[5px] p-[19px] rounded-[30px] shadow-bs w-[23%] md:w-full">
              <Img
                className="h-[116px] md:h-auto mt-[19px] object-cover w-[68%] sm:w-full"
                src="images/img_logoleft1removebgpreview.png"
                alt="logoleft1remove"
              />
              <Text
                className="mt-4 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[95%] sm:w-full"
                size="txtInterMedium25"
              >
                SHADAN COLLEGE OF ENGINEERING AND TECHNOLOGY
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] mb-[34px] min-w-[187px] mt-[76px] text-center text-xl"
                shape="round"
              >
                AUTONOMOUS
              </Button>
            </div>
            <div className="bg-gray-100_01 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[5px] p-[38px] sm:px-5 rounded-[30px] shadow-bs w-[23%] md:w-full">
              <Img
                className="h-[115px] md:h-auto object-cover w-[69%] sm:w-full"
                src="images/img_jntuhlogo1.png"
                alt="jntuhlogoOne"
              />
              <Text
                className="mt-[37px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtInterMedium25"
              >
                JNTUH
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] mb-5 min-w-[187px] mt-[69px] text-center text-xl"
                shape="round"
              >
                UNIVERSITY
              </Button>
            </div>
            <div className="bg-gray-100_01 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[5px] p-[21px] sm:px-5 rounded-[30px] shadow-bs w-[23%] md:w-full">
              <Img
                className="h-32 md:h-auto object-cover w-[62%] sm:w-full"
                src="images/img_logoleft1removebgpreview.png"
                alt="logoleft1remove_One"
              />
              <Text
                className="mt-[22px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[96%] sm:w-full"
                size="txtInterMedium25"
              >
                SHADAN COLLEGE OF ENGINEERING AND TECHNOLOGY
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] mb-[37px] min-w-[187px] mt-[70px] text-center text-xl"
                shape="round"
              >
                AUTONOMOUS
              </Button>
            </div>
            <div className="bg-gray-100_01 flex md:flex-1 flex-col justify-start mb-[5px] p-[23px] sm:px-5 rounded-[30px] shadow-bs w-[23%] md:w-full">
              <Img
                className="common-pointer h-[114px] md:h-auto md:ml-[0] ml-[58px] mt-[17px] object-cover w-[59%] sm:w-full"
                src="images/img_logocircle1.png"
                alt="logocircleOne"
                onClick={() => navigate("/institutionspage")}
              />
              <Text
                className="md:ml-[0] ml-[7px] mt-[22px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[98%] sm:w-full"
                size="txtInterMedium25"
              >
                DECCAN COLLEGE OF ENGINEERING AND TECHNOLOGY
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] mb-8 min-w-[187px] md:ml-[0] ml-[61px] mr-[22px] mt-[68px] text-center text-xl"
                shape="round"
              >
                AUTONOMOUS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstitutionsPage;
