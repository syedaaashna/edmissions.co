import React from "react";

import { Button, Img, Text } from "components";

const AdmindashboardPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter mx-auto p-14 md:px-10 sm:px-5 relative w-full">
        <div className="md:h-[335px] sm:h-[400px] h-[523px] mb-[69px] mt-auto mx-auto w-[48%] md:w-full">
          <div className="absolute bg-white-A700 border-4 border-blue-800 border-solid flex flex-col gap-[23px] h-max inset-[0] items-center justify-center m-auto pb-[66px] w-full">
            <div className="bg-blue-800 flex flex-col items-start justify-end p-[29px] sm:px-5 w-full">
              <Text
                className="md:ml-[0] ml-[159px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtInterSemiBold40WhiteA700"
              >
                UPLOAD FILES
              </Text>
            </div>
            <div className="flex flex-col relative w-[83%] sm:w-full">
              <div className="flex flex-col mx-auto w-full">
                <div className="bg-white-A700 border-4 border-amber-400 border-solid sm:h-[135px] h-[228px] md:h-[70px] mx-auto p-[76px] md:px-10 sm:px-5 rounded-[27px] w-full">
                  <div className="h-[43px] ml-[108px] my-auto w-[24%]">
                    <Text
                      className="m-auto sm:text-[31px] md:text-[33px] text-[35px] text-amber-400"
                      size="txtInterSemiBold35"
                    >
                      Options
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-amber-400 w-max"
                      size="txtInterSemiBold35"
                    >
                      Options
                    </Text>
                  </div>
                  <div className="absolute bg-blue-800 border-[3px] border-blue-800 border-solid flex sm:flex-col flex-row gap-[23px] h-max inset-[0] items-center justify-center m-auto rounded-[14px] w-[43%]">
                    <Text
                      className="ml-5 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-amber-400"
                      size="txtInterSemiBold35"
                    >
                      Options
                    </Text>
                    <Img
                      className="h-[69px] md:h-auto mr-4 object-cover w-1/5 sm:w-full"
                      src="images/img_expandarrow.png"
                      alt="expandarrow"
                    />
                  </div>
                </div>
                <Button
                  className="border-[3px] border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[243px] mt-[-35px] mx-auto rounded-[14px] sm:text-[31px] md:text-[33px] text-[35px] text-center z-[1]"
                  color="white_A700"
                  size="sm"
                >
                  Institutions
                </Button>
              </div>
              <Button
                className="border-[3px] border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[243px] mt-[-9px] mx-auto rounded-[14px] sm:text-[31px] md:text-[33px] text-[35px] text-center z-[1]"
                color="white_A700"
                size="sm"
              >
                Students
              </Button>
            </div>
          </div>
          <Button
            className="absolute border-[3px] border-blue-800 border-solid bottom-[0] cursor-pointer font-semibold inset-x-[0] leading-[normal] min-w-[243px] mx-auto rounded-[14px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
            color="white_A700"
            size="sm"
          >
            Businesses
          </Button>
        </div>
        <Button
          className="border-[3px] border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[243px] mt-[-1px] mx-auto rounded-[14px] sm:text-[31px] md:text-[33px] text-[35px] text-center z-[1]"
          color="white_A700"
          size="sm"
        >
          Companies
        </Button>
      </div>
    </>
  );
};

export default AdmindashboardPage;
