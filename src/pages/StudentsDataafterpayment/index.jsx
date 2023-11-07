import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";

const StudentsDataafterpaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-0.5 w-full">
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
        <div className="flex flex-col items-start mt-9 md:px-10 sm:px-5 px-[444px] w-full">
          <Text
            className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
            size="txtInterSemiBold50"
          >
            STUDENT DETAILS
          </Text>
        </div>
        <div className="md:h-[1125px] h-[722px] sm:h-[747px] max-w-[1320px] mt-[51px] mx-auto md:px-5 relative w-full">
          <div className="absolute bg-white-A700 border-4 border-blue-800_01 border-solid flex flex-col h-max inset-[0] items-center justify-center m-auto p-[19px] w-full">
            <div className="flex flex-col gap-[7px] items-center justify-start mb-[29px] mt-[9px] w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                <Text
                  className="md:mt-0 mt-8 sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                  size="txtInterSemiBold35Black900"
                >
                  Student 1
                </Text>
                <Text
                  className="md:ml-[0] ml-[725px] md:mt-0 mt-[19px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                  size="txtInterSemiBold35Black900"
                >
                  Location
                </Text>
                <div className="h-[90px] md:ml-[0] ml-[111px] relative w-[8%] md:w-full">
                  <Img
                    className="absolute h-[90px] inset-y-[0] left-[0] my-auto object-cover w-[90px]"
                    src="images/img_phonecontact.png"
                    alt="phonecontact"
                  />
                  <Img
                    className="absolute h-[90px] inset-y-[0] my-auto object-cover right-[0] w-[90px]"
                    src="images/img_phonecontact.png"
                    alt="phonecontact_One"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-end pl-[9px] pt-[9px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1 w-[97%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[26px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                    size="txtInterSemiBold35Black900"
                  >
                    Student 1
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[702px] md:mt-0 mt-[26px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                    size="txtInterSemiBold35Black900"
                  >
                    Location
                  </Text>
                  <Img
                    className="h-[90px] md:h-auto md:ml-[0] ml-[113px] object-cover w-[90px]"
                    src="images/img_phonecontact.png"
                    alt="phonecontact_Two"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[34px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                    size="txtInterSemiBold35Black900"
                  >
                    Student 1
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[736px] md:mt-0 mt-[27px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                    size="txtInterSemiBold35Black900"
                  >
                    Location
                  </Text>
                  <Img
                    className="h-[90px] md:h-auto md:ml-[0] ml-[105px] object-cover w-[90px]"
                    src="images/img_phonecontact.png"
                    alt="phonecontact_Three"
                  />
                </div>
                <List
                  className="flex flex-col gap-2.5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="h-[90px] relative w-full">
                    <Img
                      className="absolute h-[90px] inset-y-[0] my-auto object-cover right-[0] w-[90px]"
                      src="images/img_phonecontact.png"
                      alt="phonecontact"
                    />
                    <Line className="absolute bg-black-900 h-[3px] inset-x-[0] mx-auto rotate-[-180deg] top-[0] w-full" />
                    <div className="absolute bottom-[10%] flex flex-row md:gap-10 items-start justify-between left-[1%] w-[84%]">
                      <Text
                        className="mt-1.5 sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                        size="txtInterSemiBold35Black900"
                      >
                        Student 1
                      </Text>
                      <Text
                        className="mb-1.5 sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                        size="txtInterSemiBold35Black900"
                      >
                        Location
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[3px] rotate-[-180deg] bg-black-900 w-full" />
                  <div className="h-[90px] relative w-full">
                    <Img
                      className="absolute h-[90px] inset-y-[0] my-auto object-cover right-[0] w-[90px]"
                      src="images/img_phonecontact.png"
                      alt="phonecontact"
                    />
                    <Line className="absolute bg-black-900 h-[3px] inset-x-[0] mx-auto rotate-[-180deg] top-[0] w-full" />
                    <div className="absolute bottom-[14%] flex flex-row md:gap-10 items-start justify-between left-[1%] w-[85%]">
                      <Text
                        className="mt-1.5 sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                        size="txtInterSemiBold35Black900"
                      >
                        Student 1
                      </Text>
                      <Text
                        className="mb-1.5 sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                        size="txtInterSemiBold35Black900"
                      >
                        Location
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[3px] rotate-[-180deg] bg-black-900 w-full" />
                  <div className="h-[90px] relative w-full">
                    <Img
                      className="absolute h-[90px] inset-y-[0] my-auto object-cover right-[0] w-[90px]"
                      src="images/img_phonecontact.png"
                      alt="phonecontact"
                    />
                    <Line className="absolute bg-black-900 h-[3px] inset-x-[0] mx-auto rotate-[-180deg] top-[0] w-full" />
                    <div className="absolute bottom-[8%] flex flex-row md:gap-10 items-center justify-between left-[1%] w-[84%]">
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                        size="txtInterSemiBold35Black900"
                      >
                        Student 1
                      </Text>
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                        size="txtInterSemiBold35Black900"
                      >
                        Location
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Text
            className="absolute inset-x-[0] mx-auto rotate-[23deg] md:text-5xl text-[160px] text-amber-400_35 top-[0] w-[95%] sm:w-full"
            size="txtInterSemiBold160"
          >
            <span className="text-amber-400_35 font-inter text-left font-semibold">
              ED
            </span>
            <span className="text-black-900_3f font-inter text-left font-semibold">
              MISSIONS
            </span>
            <span className="text-amber-400_35 font-inter text-left font-semibold">
              .CO
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default StudentsDataafterpaymentPage;
