import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";

const DesktopNinePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[41px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="bg-blue-800 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full">
            <Text
              className="common-pointer mb-[69px] sm:ml-[0] ml-[39px] sm:mt-0 mt-[49px] sm:text-[21px] md:text-[23px] text-[25px] text-amber-400"
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
              className="mb-[69px] sm:ml-[0] ml-[621px] sm:mt-0 mt-[49px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
              size="txtInterSemiBold25WhiteA700"
            >
              About Us
            </Text>
            <Text
              className="common-pointer mb-[67px] sm:ml-[0] ml-[102px] sm:mt-0 mt-[51px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
              size="txtInterSemiBold25WhiteA700"
              onClick={() => navigate("/login")}
            >
              Login
            </Text>
            <Text
              className="mb-[70px] sm:ml-[0] ml-[84px] mr-[76px] sm:mt-0 mt-12 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
              size="txtInterSemiBold25WhiteA700"
            >
              Contact Us
            </Text>
          </header>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1309px] mt-[30px] mx-auto md:px-5 w-full">
            <Img
              className="h-[382px] md:h-auto md:mt-0 mt-12 object-cover"
              src="images/img_51557202672335.png"
              alt="51557202672335"
            />
            <div className="flex flex-col gap-[15px] items-start justify-start">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtInterBold50"
              >
                ABOUT US
              </Text>
              <Text
                className="text-black-900 text-lg"
                size="txtInterSemiBold18"
              >
                <>
                  Knowledge goes a long way — be it the insights you gain in
                  school or the books you read at your college library;
                  education plays a vital role in every walk of life. And as it
                  goes without saying, having access to good educational
                  resources and a well-rounded platform is extremely crucial to
                  attain proper education. Unfortunately, finding the right
                  educational institute can be an insurmountable task, not to
                  mention the time and energy needed for it.
                  <br />
                  Now let’s face it, we are all guilty of taking admission into
                  a college or a school that we didn’t want to, just because our
                  relatives suggested it to our parents, or because your uncle’s
                  son/daughter studies in it, or maybe because it’s a stone’s
                  throw away from your house (as was in my case). What if we had
                  a way to explore better colleges or schools and persuade our
                  parents to admit us in them? Surely, going to every school or
                  college in your area to ask for details is tedious, and it’s a
                  huge gap to cover across.
                </>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1264px] mt-20 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border-[3px] border-blue-800 border-solid flex flex-col h-[289px] items-start justify-center mb-[3px] p-[54px] md:px-10 sm:px-5 rounded-[30px] shadow-bs w-[289px]">
              <Text
                className="my-[74px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtInterMedium25"
              >
                SERVICE 1
              </Text>
            </div>
            <div className="bg-white-A700 border-[3px] border-amber-400 border-solid flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[38px] md:mt-0 mt-[3px] p-[55px] md:px-10 sm:px-5 rounded-[30px] shadow-bs w-[290px] md:w-full">
              <Text
                className="mb-20 mt-[67px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtInterMedium25"
              >
                SERVICE2
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[37px] w-[49%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border-[3px] border-blue-800 border-solid flex flex-col h-[289px] items-start justify-start p-[74px] md:px-10 sm:px-5 rounded-[30px] shadow-bs w-full">
                <Text
                  className="mb-[61px] mt-12 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterMedium25"
                >
                  SERVICE 3
                </Text>
              </div>
              <div className="bg-white-A700 border-[3px] border-amber-400 border-solid flex flex-col h-[289px] items-start justify-start p-12 md:px-10 sm:px-5 rounded-[30px] shadow-bs w-full">
                <Text
                  className="mb-[84px] mt-[77px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterMedium25"
                >
                  SERVICE 4
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNinePage;
