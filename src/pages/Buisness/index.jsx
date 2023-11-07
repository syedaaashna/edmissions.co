import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const BuisnessPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[78px] w-full">
        <div className="flex flex-col justify-start overflow-auto w-full">
          <div className="flex h-[147px] sm:h-[231px] justify-end md:px-5 relative w-full">
            <div className="flex flex-row h-full items-start justify-between mb-[37px] ml-auto mr-[39px] mt-auto w-[29%]">
              <Text
                className="mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Learn more
              </Text>
              <Text
                className="mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Sign up
              </Text>
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Log in
              </Text>
            </div>
            <div className="absolute bg-blue-800 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto p-10 sm:px-5 w-full">
              <Text
                className="common-pointer mb-1.5 sm:mt-0 mt-[29px] sm:text-[21px] md:text-[23px] text-[25px] text-amber-400"
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
                className="common-pointer mb-1.5 sm:ml-[0] ml-[822px] sm:mt-0 mt-[29px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
                onClick={() => navigate("/desktopnine")}
              >
                About Us
              </Text>
              <Text
                className="mb-1.5 sm:ml-[0] ml-[62px] sm:mt-0 mt-[29px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25WhiteA700"
              >
                Contact Us
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[364px] mt-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
            size="txtInterSemiBold25Gray600"
          >
            Explore options based on your preferences
          </Text>
          <div className="bg-blue-800 flex md:flex-col flex-row gap-[25px] items-center justify-center md:ml-[0] ml-[333px] mr-[289px] mt-[11px] p-3 md:px-5 rounded-[40px] w-[57%] md:w-full">
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
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[351px] mt-[57px] md:px-5">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
              size="txtInterBold50"
            >
              Notable Establishments in Hyderabad
            </Text>
            <Text
              className="mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
              size="txtInterSemiBold25Gray600"
            >
              Find the best institutions and their details at the same page!!
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[62px] mt-[60px] md:px-5 w-[96%] md:w-full">
            <div className="bg-blue_gray-50 border border-black-900 border-solid flex flex-col justify-start mb-[5px] p-[19px] rounded-[30px] shadow-bs w-[23%] md:w-full">
              <Img
                className="h-[76px] md:h-auto md:ml-[0] ml-[53px] mt-[26px] object-cover w-[58%]"
                src="images/img_thstransfi9th0.png"
                alt="thstransfi9thZero"
              />
              <Text
                className="md:ml-[0] ml-[15px] mt-[49px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[95%] sm:w-full"
                size="txtInterMedium25"
              >
                INDIA’S FIRST CODING BOOTCAMP
              </Text>
              <Input
                name="groupFortyOne"
                placeholder="BOOTCAMP"
                className="font-medium leading-[normal] p-0 placeholder:text-indigo-A700 text-left text-xl w-full"
                wrapClassName="mb-[34px] md:ml-[0] ml-[43px] mr-12 mt-[76px] w-[68%]"
              ></Input>
            </div>
            <div className="bg-gray-100_01 flex flex-col items-center justify-start md:ml-[0] ml-[41px] md:mt-0 mt-[5px] p-[7px] rounded-[30px] shadow-bs w-[23%] md:w-full">
              <Img
                className="h-[99px] md:h-auto mt-[31px] object-cover w-[52%] sm:w-full"
                src="images/img_name1.png"
                alt="nameOne"
              />
              <Text
                className="mt-3 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[88%] sm:w-full"
                size="txtInterMedium25"
              >
                INDIA’s FIRST STUDENT FOCUSED INCUBATOR (NON-ACADEMIC)
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] mb-[51px] min-w-[187px] mt-[92px] text-center text-xl"
                shape="round"
              >
                INCUBATOR
              </Button>
            </div>
            <div className="bg-gray-100_01 flex flex-col justify-start md:ml-[0] ml-[41px] md:mt-0 mt-[5px] p-[15px] rounded-[30px] shadow-bs w-[23%] md:w-full">
              <Img
                className="h-[118px] md:h-auto md:ml-[0] ml-[61px] mt-3.5 object-cover w-[46%] sm:w-full"
                src="images/img_rectangle12.png"
                alt="rectangleTwelve"
              />
              <Text
                className="md:ml-[0] ml-[23px] mt-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtInterMedium25"
              >
                EDMISSIONS ARE OPEN
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] mb-[43px] min-w-[187px] md:ml-[0] ml-[46px] mr-[53px] mt-[59px] text-center text-xl"
                shape="round"
              >
                EDTECH
              </Button>
            </div>
            <div className="bg-gray-100_01 flex flex-col justify-start mb-[5px] md:ml-[0] ml-[34px] p-[23px] sm:px-5 rounded-[30px] shadow-bs w-[23%] md:w-full">
              <Img
                className="h-[76px] md:h-auto md:ml-[0] ml-[55px] mt-8 object-cover w-[59%]"
                src="images/img_thstransfi9th0.png"
                alt="thstransfi9thZero_One"
              />
              <Text
                className="md:ml-[0] ml-[7px] mt-[45px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[98%] sm:w-full"
                size="txtInterMedium25"
              >
                INDIA’s FIRST CODING OOOTCAMP
              </Text>
              <Input
                name="groupThirtyNine"
                placeholder="BOOTCAMP"
                className="font-medium leading-[normal] p-0 placeholder:text-indigo-A700 text-left text-xl w-full"
                wrapClassName="mb-8 md:ml-[0] ml-[61px] mr-[22px] mt-[68px] w-[70%]"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuisnessPage;
