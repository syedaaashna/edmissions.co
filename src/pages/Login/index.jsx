import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between max-w-[1386px] mx-auto md:px-5 w-full">
          <div className="h-[1024px] md:h-[761px] py-28 relative w-1/2 md:w-full">
            <div className="h-[761px] m-auto w-full">
              <div className="h-[761px] m-auto w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col gap-1.5 justify-start w-full">
                    <Img
                      className="h-[709px] md:h-auto object-cover"
                      src="images/img_backgroundcomplete.png"
                      alt="backgroundcompl"
                    />
                    <Img
                      className="h-[46px] ml-9 md:ml-[0]"
                      src="images/img_shadow.svg"
                      alt="shadow"
                    />
                  </div>
                </div>
                <Img
                  className="absolute bottom-[5%] h-[539px] right-[26%]"
                  src="images/img_device.svg"
                  alt="device"
                />
              </div>
              <Img
                className="absolute h-[390px] inset-y-[0] left-[23%] my-auto"
                src="images/img_policy.svg"
                alt="policy"
              />
            </div>
            <div className="absolute bottom-[17%] flex flex-col items-center justify-start left-[16%] w-[23%]">
              <div className="flex flex-col justify-start w-full">
                <div className="md:h-[175px] h-[193px] md:ml-[0] ml-[30px] relative w-[81%]">
                  <div className="absolute bottom-[0] md:h-[175px] h-[179px] inset-x-[0] mx-auto w-full">
                    <div className="absolute md:h-[145px] h-[149px] inset-x-[0] mx-auto top-[5%] w-full">
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <div className="flex flex-col items-end justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-[8%] md:w-full">
                            <Img
                              className="h-[3px] w-1"
                              src="images/img_vector_blue_gray_900.svg"
                              alt="vector"
                            />
                            <Img
                              className="h-[3px] md:ml-[0] ml-[3px] mt-0.5"
                              src="images/img_vector_blue_gray_900_3x1.svg"
                              alt="vector_One"
                            />
                            <Img
                              className="h-[9px] ml-1 md:ml-[0]"
                              src="images/img_vector_red_900.svg"
                              alt="vector_Two"
                            />
                          </div>
                          <Img
                            className="h-[42px] mt-0.5"
                            src="images/img_volume.svg"
                            alt="volume"
                          />
                          <div className="flex flex-row gap-[25px] items-start justify-between mt-[5px] w-full">
                            <Img
                              className="h-[79px]"
                              src="images/img_reply.svg"
                              alt="reply"
                            />
                            <Img
                              className="h-[55px]"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-2 left-[21%] top-[32%]"
                        src="images/img_camera.svg"
                        alt="camera"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[27%] flex flex-col h-[51px] items-end justify-start left-[0] pl-[17px] pt-[17px] w-1/5"
                        style={{
                          backgroundImage: "url('images/img_group74.svg')",
                        }}
                      >
                        <Img
                          className="h-[30px] mt-[3px]"
                          src="images/img_checkmark_black_900.svg"
                          alt="checkmark_One"
                        />
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[15px] h-full inset-y-[0] items-center justify-start left-[10%] my-auto w-[45%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[49px] items-end justify-start pl-[19px] pt-[19px] w-1/2 md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group75.svg')",
                        }}
                      >
                        <Img
                          className="h-[11px] mt-[18px]"
                          src="images/img_megaphone.svg"
                          alt="megaphone"
                        />
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[114px] items-end justify-start sm:pl-5 pl-[25px] py-[25px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group72.svg')",
                        }}
                      >
                        <Img
                          className="h-[39px] mb-[23px]"
                          src="images/img_vector.svg"
                          alt="vector_Three"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[29%] h-[54px] right-[31%]"
                    src="images/img_group74.svg"
                    alt="user"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[60px] items-end justify-start left-[12%] p-0.5 top-[0] w-[31%]"
                    style={{ backgroundImage: "url('images/img_group73.svg')" }}
                  >
                    <Img
                      className="h-3.5 mb-3 mt-7"
                      src="images/img_group75.svg"
                      alt="volume_One"
                    />
                  </div>
                </div>
                <div className="md:h-[309px] h-[339px] relative w-[67%]">
                  <div className="md:h-[309px] h-[339px] m-auto w-full">
                    <div className="md:h-[305px] h-[339px] m-auto w-full">
                      <div className="absolute bottom-[4%] flex flex-col items-center justify-start left-[4%] w-[77%]">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[30px] items-end justify-start mb-[3px] pb-[3px] pl-[3px] w-[22%]"
                            style={{
                              backgroundImage: "url('images/img_group76.svg')",
                            }}
                          >
                            <Img
                              className="h-[15px] mb-[11px]"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[29px] items-end justify-start mt-[3px] pb-3.5 w-[15%]"
                            style={{
                              backgroundImage: "url('images/img_group76.svg')",
                            }}
                          >
                            <Img
                              className="h-[15px]"
                              src="images/img_location.svg"
                              alt="location_One"
                            />
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[0] h-5 left-[0]"
                        src="images/img_offer.svg"
                        alt="offer"
                      />
                      <Img
                        className="absolute bottom-[0] h-3.5 right-[0]"
                        src="images/img_offer.svg"
                        alt="offer_One"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[308px] items-end justify-start left-[6%] p-[3px] top-[0] w-[71%]"
                        style={{
                          backgroundImage: "url('images/img_group71.svg')",
                        }}
                      >
                        <Img
                          className="h-[98px] mb-[171px] mt-[30px]"
                          src="images/img_volume_black_900.svg"
                          alt="volume_Two"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[9%] flex flex-col h-[13px] items-center justify-start left-[5%] w-[21%]"
                      style={{
                        backgroundImage: "url('images/img_group78.svg')",
                      }}
                    >
                      <Img
                        className="h-[13px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                    </div>
                    <Img
                      className="absolute h-[309px] right-[3%] top-[0]"
                      src="images/img_vector_blue_gray_900_309x36.svg"
                      alt="vector_Four"
                    />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[9%] flex flex-col h-[9px] items-center justify-start right-[15%] w-1/5"
                    style={{ backgroundImage: "url('images/img_group78.svg')" }}
                  >
                    <Img
                      className="h-[9px]"
                      src="images/img_trash.svg"
                      alt="trash_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
            <Text
              className="md:text-5xl text-6xl text-black-900"
              size="txtInterBold60"
            >
              <>
                Log in
                <br />{" "}
              </>
            </Text>
            <Text
              className="md:text-5xl text-6xl text-black-900"
              size="txtInterBold60"
            >
              <>
                Log in
                <br />{" "}
              </>
            </Text>
            <div className="md:h-[127px] h-[158px] relative w-[99%] md:w-full">
              <div className="absolute md:h-[124px] h-[154px] inset-[0] justify-center m-auto w-full">
                <div className="md:h-[124px] h-[154px] m-auto w-full">
                  <div className="absolute bottom-[0] h-[31px] left-[0] w-[21%]">
                    <Text
                      className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtInterSemiBold25Black900"
                    >
                      User Name{" "}
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-max"
                      size="txtInterSemiBold25Black900"
                    >
                      User Name{" "}
                    </Text>
                  </div>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-gray-600 top-[0] w-full"
                    size="txtInterMedium30"
                  >
                    Welcome back! Please login into your account.
                  </Text>
                </div>
                <div className="absolute bottom-[0] h-[31px] left-[0] w-[21%]">
                  <Text
                    className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtInterSemiBold25Black900"
                  >
                    User Name{" "}
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-max"
                    size="txtInterSemiBold25Black900"
                  >
                    User Name{" "}
                  </Text>
                </div>
              </div>
              <Text
                className="absolute inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-gray-600 top-[0] w-full"
                size="txtInterMedium30"
              >
                Welcome back! Please login into your account.
              </Text>
            </div>
            <div className="flex h-20 md:h-[95px] justify-end mt-[15px] relative w-full">
              <div className="h-[31px] md:h-[53px] mb-[22px] ml-[22px] mt-auto w-[41%]">
                <Text
                  className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-gray-500"
                  size="txtInterSemiBold25Gray500"
                >
                  Yourname@gmail.com
                </Text>
                <div className="absolute h-[31px] inset-[0] justify-center m-auto w-full">
                  <Text
                    className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-gray-500"
                    size="txtInterSemiBold25Gray500"
                  >
                    Yourname@gmail.com
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-gray-500 w-max"
                    size="txtInterSemiBold25Gray500"
                  >
                    Yourname@gmail.com
                  </Text>
                </div>
              </div>
              <Text
                className="absolute bg-white-A700 border border-black-900 border-solid h-full inset-[0] justify-center m-auto max-w-[668px] md:max-w-full pb-[22px] pl-[22px] pr-[35px] pt-[26px] sm:px-5 rounded-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-500 w-max"
                size="txtInterSemiBold25Gray500"
              >
                Yourname@gmail.com
              </Text>
            </div>
            <div className="h-[31px] md:h-[87px] mt-14 relative w-[18%]">
              <Text
                className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtInterSemiBold25Black900"
              >
                Password
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-max"
                size="txtInterSemiBold25Black900"
              >
                Password
              </Text>
            </div>
            <div className="h-20 md:h-[95px] mt-[15px] relative w-full">
              <Text
                className="ml-[42px] my-auto sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                size="txtInterSemiBold25Gray600"
              >
                12345678
              </Text>
              <Text
                className="absolute bg-white-A700 border border-black-900 border-solid h-full inset-[0] justify-center m-auto max-w-[668px] md:max-w-full sm:px-5 px-[35px] py-6 rounded-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600 w-max"
                size="txtInterSemiBold25Gray600"
              >
                12345678
              </Text>
            </div>
            <div className="h-[37px] md:h-[68px] md:ml-[0] ml-[392px] mt-[31px] relative w-[39%]">
              <Text
                className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-gray-600"
                size="txtInterMedium30"
              >
                Forgot Password?
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-gray-600 w-max"
                size="txtInterMedium30"
              >
                Forgot Password?
              </Text>
            </div>
            <div className="flex md:h-[159px] h-[94px] justify-end ml-0.5 md:ml-[0] mt-[65px] relative w-[99%] md:w-full">
              <Text
                className="mb-[19px] ml-[262px] mt-auto sm:text-4xl md:text-[38px] text-[40px] text-amber-400"
                size="txtInterMedium40"
              >
                Login
              </Text>
              <Button
                className="common-pointer absolute cursor-pointer font-medium h-full inset-[0] justify-center leading-[normal] m-auto min-w-[658px] md:min-w-full sm:text-4xl md:text-[38px] text-[40px] text-center"
                onClick={() => navigate("/")}
                shape="round"
                color="blue_800_01"
                size="md"
              >
                Login
              </Button>
            </div>
            <div className="h-[37px] md:h-[92px] md:ml-[0] ml-[11px] mt-[55px] relative w-[41%]">
              <Text
                className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterMedium30Black900"
              >
                <span className="text-gray-600 font-inter text-left font-medium">
                  New User?
                </span>
                <span className="text-black-900 font-inter text-left font-medium">
                  {" "}
                </span>
                <span className="text-blue-800_01 font-inter text-left font-medium">
                  SignUp
                </span>
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-max"
                size="txtInterMedium30Black900"
              >
                <span className="text-gray-600 font-inter text-left font-medium">
                  New User?
                </span>
                <span className="text-black-900 font-inter text-left font-medium">
                  {" "}
                </span>
                <span className="text-blue-800_01 font-inter text-left font-medium">
                  SignUp
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
