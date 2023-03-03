import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/visit-us");
  }, [navigate]);

  const onBookNowTextClick = useCallback(() => {
    navigate("/visit-us");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWhatsappClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEmailClick = useCallback(() => { 
    navigate("/");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onVisitUsTextClick = useCallback(() => {
    navigate("/visit-us");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[6118px] overflow-hidden text-left text-base text-black font-josefin-sans">
      <img
        className="absolute top-[1890.76px] left-[0px] w-[171.83px] h-[648.07px]"
        alt=""
        src="../ellipse-8.svg"
      />
      <textarea className="[border:none] bg-darkgray absolute top-[1527px] left-[611px] w-[253px] h-[497px]" />
      <img
        className="absolute top-[0px] left-[0px] w-[346px] h-[346px]"
        alt=""
        src="../ellipse-81.svg"
      />
      <img
        className="absolute top-[630px] left-[1861px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[736px] left-[503px] w-[17px] h-4"
        alt=""
        src="../ellipse-82.svg"
      />
      <img
        className="absolute top-[1181px] left-[1861px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[34px] left-[507px] w-8 h-[31px]"
        alt=""
        src="../ellipse-19.svg"
      />
      <img
        className="absolute top-[630px] left-[1820px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[713px] left-[503px] w-[17px] h-4"
        alt=""
        src="../ellipse-82.svg"
      />
      <img
        className="absolute top-[1181px] left-[1820px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[78px] left-[507px] w-8 h-[31px]"
        alt=""
        src="../ellipse-19.svg"
      />
      <img
        className="absolute top-[671px] left-[1861px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[736px] left-[481px] w-[15px] h-4"
        alt=""
        src="../ellipse-84.svg"
      />
      <img
        className="absolute top-[1222px] left-[1861px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[34px] left-[464px] w-[31px] h-[31px]"
        alt=""
        src="../ellipse-21.svg"
      />
      <img
        className="absolute top-[671px] left-[1820px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[713px] left-[481px] w-[15px] h-4"
        alt=""
        src="../ellipse-84.svg"
      />
      <img
        className="absolute top-[1222px] left-[1820px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[78px] left-[464px] w-[31px] h-[31px]"
        alt=""
        src="../ellipse-21.svg"
      />
      <img
        className="absolute top-[710px] left-[1861px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[736px] left-[457px] w-[18px] h-4"
        alt=""
        src="../ellipse-86.svg"
      />
      <img
        className="absolute top-[1261px] left-[1861px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[34px] left-[420px] w-8 h-[31px]"
        alt=""
        src="../ellipse-19.svg"
      />
      <img
        className="absolute top-[710px] left-[1820px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[713px] left-[457px] w-[18px] h-4"
        alt=""
        src="../ellipse-86.svg"
      />
      <img
        className="absolute top-[1261px] left-[1820px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[78px] left-[420px] w-8 h-[31px]"
        alt=""
        src="../ellipse-19.svg"
      />
      <img
        className="absolute top-[751px] left-[1861px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[736px] left-[436px] w-[15px] h-4"
        alt=""
        src="../ellipse-84.svg"
      />
      <img
        className="absolute top-[1302px] left-[1861px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[34px] left-[377px] w-[31px] h-[31px]"
        alt=""
        src="../ellipse-21.svg"
      />
      <img
        className="absolute top-[751px] left-[1820px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[713px] left-[436px] w-[15px] h-4"
        alt=""
        src="../ellipse-84.svg"
      />
      <img
        className="absolute top-[1302px] left-[1820px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[78px] left-[377px] w-[31px] h-[31px]"
        alt=""
        src="../ellipse-21.svg"
      />
      <img
        className="absolute top-[790px] left-[1861px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[736px] left-[412px] w-[17px] h-4"
        alt=""
        src="../ellipse-82.svg"
      />
      <img
        className="absolute top-[1341px] left-[1861px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[34px] left-[333px] w-8 h-[31px]"
        alt=""
        src="../ellipse-19.svg"
      />
      <img
        className="absolute top-[790px] left-[1820px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[713px] left-[412px] w-[17px] h-4"
        alt=""
        src="../ellipse-82.svg"
      />
      <img
        className="absolute top-[1341px] left-[1820px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[78px] left-[333px] w-8 h-[31px]"
        alt=""
        src="../ellipse-19.svg"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[1110px] object-cover"
        alt=""
        src="../unnamed-1@2x.png"
      />
      <div className="absolute top-[49px] left-[52px] bg-fuchsia-100 w-[46px] h-[7px]" />
      <div className="absolute top-[63px] left-[52px] bg-fuchsia-100 w-[46px] h-[7px]" />
      <div className="absolute top-[77px] left-[52px] bg-fuchsia-100 w-[46px] h-[7px]" />
      <b className="absolute top-[93px] left-[52px] text-2xs inline-block font-abhaya-libre w-[66px] h-[33px]">
        Menu
      </b>
      <img
        className="absolute top-[282px] left-[736.78px] w-9 h-[41.57px]"
        alt=""
        src="../polygon-1.svg"
      />
      <img
        className="absolute top-[380.77px] left-[197.69px] w-[36.23px] h-[41.57px]"
        alt=""
        src="../polygon-2.svg"
      />
      <div className="absolute top-[505px] left-[202px] text-lg font-abhaya-libre inline-block w-[361px] h-[39px]">
        Makes You Beautiful
      </div>
      <div className="absolute top-[577px] left-[202px] text-2xs font-abhaya-libre inline-block w-[527px] h-[136px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-violet-100 absolute top-[713px] left-[202px] w-[168.97px] h-[35px] opacity-[0.5]" />
      <div className="absolute top-[719px] left-[238px] text-2xs font-abhaya-libre">
        Read More :
      </div>
      <img
        className="absolute top-[842px] left-[523px] w-10 h-10"
        alt=""
        src="../ellipse-31.svg"
      />
      <img
        className="absolute top-[2121px] left-[681px] w-10 h-10"
        alt=""
        src="../ellipse-31.svg"
      />
      <img
        className="absolute top-[1836px] left-[1390px] w-10 h-10"
        alt=""
        src="../ellipse-31.svg"
      />
      <img
        className="absolute top-[465px] left-[1016px] w-10 h-10"
        alt=""
        src="../ellipse-31.svg"
      />
      <img
        className="absolute top-[1940px] left-[193px] w-10 h-10"
        alt=""
        src="../ellipse-31.svg"
      />
      <img
        className="absolute top-[1659px] left-[65px] w-10 h-10"
        alt=""
        src="../ellipse-31.svg"
      />
      <img
        className="absolute top-[1256px] left-[1593px] w-10 h-10"
        alt=""
        src="../ellipse-31.svg"
      />
      <img
        className="absolute top-[834px] left-[0px] w-[363px] h-[246px]"
        alt=""
        src="../vector-2.svg"
      />
      <img
        className="absolute top-[1080px] left-[0px] w-[350px] h-[246px]"
        alt=""
        src="../vector-4.svg"
      />
      <img
        className="absolute top-[0px] left-[636px] w-[648px] h-[648px]"
        alt=""
        src="../ellipse-7.svg"
      />
      <img
        className="absolute top-[-522px] left-[-1341px] w-[648px] h-[648px]"
        alt=""
      />
      <div className="absolute top-[1169px] left-[418px] text-[80px] font-jomolhari text-center inline-block w-[1136px] h-[110px]">
        WELCOME TO AMBREEN’S
      </div>
      <img
        className="absolute top-[1341px] left-[741px] w-[896px] h-[597px] object-cover"
        alt=""
        src="../image-5@2x.png"
      />
      <img
        className="absolute top-[1866px] left-[809px] w-[804px] h-[362px] object-cover"
        alt=""
        src="../image-7@2x.png"
      />
      <img
        className="absolute top-[1387px] left-[169px] w-[442.17px] h-[824px] object-cover"
        alt=""
        src="../mask-group@2x.png"
      />
      <div className="absolute top-[1951.5px] left-[959.5px] box-border w-px h-[210px] border-r-[1px] border-solid border-black" />
      <div className="absolute top-[1951.5px] left-[1421.5px] box-border w-px h-[210px] border-r-[1px] border-solid border-black" />
      <img
        className="absolute top-[2325px] left-[0px] w-[1920px] h-[1080px] object-cover opacity-[0.1]"
        alt=""
        src="../mask-group1@2x.png"
      />
      <div className="absolute top-[1975px] left-[903px] text-lg font-jejuhallasan text-white inline-block w-[15px] h-60">
        Hair
      </div>
      <div className="absolute top-[1935px] left-[1456px] text-lg font-jejuhallasan text-white inline-block w-[15px] h-60">
        Styles
      </div>
      <img
        className="absolute top-[1501px] left-[1747px] w-[648px] h-[648px]"
        alt=""
        src="../ellipse-71.svg"
      />
      <img
        className="absolute top-[3040px] left-[1794px] w-[648px] h-[648px]"
        alt=""
        src="../ellipse-59.svg"
      />
      <img
        className="absolute top-[2820px] left-[1835px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[3572px] left-[1733px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[2820px] left-[1794px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[3572px] left-[1692px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[2861px] left-[1835px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[3613px] left-[1733px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[2861px] left-[1794px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[3613px] left-[1692px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[2900px] left-[1835px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[3652px] left-[1733px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[2900px] left-[1794px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[3652px] left-[1692px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[2941px] left-[1835px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[3693px] left-[1733px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[2941px] left-[1794px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[3693px] left-[1692px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[2980px] left-[1835px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[3732px] left-[1733px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[2980px] left-[1794px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[3732px] left-[1692px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[2409px] left-[144px] w-[1776px] h-[246px] overflow-x-auto object-cover"
        alt=""
        src="../frame-1@2x.png"
      />
      <div className="absolute top-[2795px] left-[144px] w-[1623px] h-[319px] overflow-y-auto text-lg text-fuchsia-200 font-jomolhari">
        <div className="absolute top-[0px] left-[0px] bg-lavenderblush-100 w-[656px] h-[292px]" />
        <div className="absolute top-[352px] left-[0px] bg-lavenderblush-100 w-[656px] h-[292px]" />
        <textarea className="[border:none] bg-lavenderblush-100 absolute top-[725px] left-[0px] w-[656px] h-[292px]" />
        <div className="absolute top-[352px] left-[844px] bg-lavenderblush-100 w-[656px] h-[292px]" />
        <textarea className="[border:none] bg-lavenderblush-100 absolute top-[725px] left-[844px] w-[656px] h-[292px]" />
        <div className="absolute top-[26px] left-[26px] inline-block w-[233px] h-[135px]">
          Style 1
        </div>
        <div className="absolute top-[364px] left-[33px] inline-block w-[233px] h-[135px]">
          Style 3
        </div>
        <div className="absolute top-[737px] left-[33px] inline-block w-[233px] h-[135px]">
          Style 5
        </div>
        <div className="absolute top-[373px] left-[877px] inline-block w-[233px] h-[135px]">
          Style 4
        </div>
        <div className="absolute top-[746px] left-[877px] inline-block w-[233px] h-[135px]">
          Style 6
        </div>
        <div className="absolute top-[106px] left-[13px] bg-snow w-[615px] h-[156px] opacity-[0.5]" />
        <div className="absolute top-[444px] left-[20px] bg-snow w-[615px] h-[156px] opacity-[0.5]" />
        <div className="absolute top-[817px] left-[20px] bg-snow w-[615px] h-[156px] opacity-[0.5]" />
        <div className="absolute top-[453px] left-[864px] bg-snow w-[615px] h-[156px] opacity-[0.5]" />
        <div className="absolute top-[826px] left-[864px] bg-snow w-[615px] h-[156px] opacity-[0.5]" />
        <div className="absolute top-[113px] left-[26px] text-base font-judson text-black inline-block w-[601px] h-36">
          Thestandard of hair care, cuts and color personalized to add
          versatility.Our talented team of hair experts is trained to create a
          hairstyle to suit your hair type and face shape.
        </div>
        <div className="absolute top-[451px] left-[33px] text-base font-judson text-black inline-block w-[601px] h-36">
          Thestandard of hair care, cuts and color personalized to add
          versatility.Our talented team of hair experts is trained to create a
          hairstyle to suit your hair type and face shape.
        </div>
        <div className="absolute top-[824px] left-[33px] text-base font-judson text-black inline-block w-[601px] h-36">
          Thestandard of hair care, cuts and color personalized to add
          versatility.Our talented team of hair experts is trained to create a
          hairstyle to suit your hair type and face shape.
        </div>
        <div className="absolute top-[460px] left-[877px] text-base font-judson text-black inline-block w-[601px] h-36">
          Thestandard of hair care, cuts and color personalized to add
          versatility.Our talented team of hair experts is trained to create a
          hairstyle to suit your hair type and face shape.
        </div>
        <div className="absolute top-[833px] left-[877px] text-base font-judson text-black inline-block w-[601px] h-36">
          Thestandard of hair care, cuts and color personalized to add
          versatility.Our talented team of hair experts is trained to create a
          hairstyle to suit your hair type and face shape.
        </div>
        <div className="absolute top-[0px] left-[844px] bg-lavenderblush-300 w-[656px] h-[292px]" />
        <div className="absolute top-[26px] left-[870px] inline-block w-[233px] h-[135px]">
          Style 2
        </div>
        <div className="absolute top-[106px] left-[857px] bg-snow w-[615px] h-[156px] opacity-[0.5]" />
        <div className="absolute top-[113px] left-[870px] text-base font-judson text-black inline-block w-[601px] h-36">
          Thestandard of hair care, cuts and color personalized to add
          versatility.Our talented team of hair experts is trained to create a
          hairstyle to suit your hair type and face shape.
        </div>
      </div>
      <img
        className="absolute top-[581px] left-[759px] w-[334px] h-[334px]"
        alt=""
        src="../ellipse-61.svg"
      />
      <img
        className="absolute top-[621px] left-[799px] w-[254px] h-[254px]"
        alt=""
        src="../ellipse-60.svg"
      />
      <div className="absolute top-[682px] left-[850px] text-xl text-white text-center inline-block w-[152px] h-[168px]">
        <p className="[margin-block-start:0] [margin-block-end:0px]">{`up to `}</p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">30%</p>
        <p className="m-0">OFF</p>
      </div>
      <div className="absolute top-[3858px] left-[50px] bg-lavender w-[909px] h-[509px]" />
      <div className="absolute top-[3828px] left-[965px] bg-pink w-[909px] h-[684px]" />
      <div className="absolute top-[3925px] left-[144px] text-[inherit] font-inherit inline-block w-[350px] h-24">
        <ul className="m-0 pl-[53px]">Get prim and proper with us.</ul>
      </div>
      <div className="absolute top-[3888px] left-[1212px] text-xl">
        <p className="[margin-block-start:0] [margin-block-end:0px]">{`Trust our `}</p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          clients just as
        </p>
        <p className="m-0">other trusted us.</p>
      </div>
      <img
        className="absolute top-[4159px] left-[218px] w-[913px] h-[383px] object-cover"
        alt=""
        src="../mask-group2@2x.png"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[calc(50%_+_1002px)] left-[calc(50%_+_259px)] rounded-[51px] w-[158px] h-[43px]"
        onClick={onRectangleButtonClick}
      />
      <div
        className="absolute top-[4070px] left-[1242px] text-[26px] cursor-pointer"
        onClick={onBookNowTextClick}
      >
        Book now
      </div>
      <img
        className="absolute top-[4154px] left-[1144px] w-[376px] h-[645px] object-cover"
        alt=""
        src="../mask-group3@2x.png"
      />
      <div className="absolute top-[4331px] left-[1455px] bg-lavender w-[306px] h-[306px]" />
      <div className="absolute top-[4394px] left-[1500px] font-light font-josefin-slab inline-block w-[234px] h-[173px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum
      </div>
      <div className="absolute top-[6028px] left-[0px] bg-gainsboro w-[1920px] h-[90px]" />
      <div className="absolute top-[6049px] left-[579px] font-jomolhari">
        Copyright © 2023 Ambreen Salon - All Rights Reserved.
      </div>
      <div className="absolute top-[5520px] left-[0px] bg-thistle w-[1920px] h-[508px]" />
      <div className="absolute top-[5589px] left-[129px] text-sm font-jomolhari">{`HELP & INFORMATION`}</div>
      <div className="absolute top-[5589px] left-[634px] text-sm font-jomolhari">
        MORE FROM AMBREEN
      </div>
      <div className="absolute top-[5589px] left-[1149px] text-sm font-jomolhari">
        FOR ASSITANCE
      </div>
      <div
        className="absolute top-[5680px] left-[634px] text-xs text-gray-200 inline-block w-[71px] h-[41px] cursor-pointer"
        onClick={onHomeTextClick}
      >
        Home
      </div>
      <div
        className="absolute top-[5680px] left-[1149px] text-xs text-gray-200 inline-block w-[319px] h-[29px] cursor-pointer"
        onClick={onWhatsappClick}
      >
        Whatsapp : ---------------------------
      </div>
      <div
        className="absolute top-[5735px] left-[1149px] text-xs text-gray-200 inline-block w-[319px] h-[29px] cursor-pointer"
        onClick={onEmailClick}
      >
        Email : ---------------------------
      </div>
      <div
        className="absolute top-[5743px] left-[634px] text-xs text-gray-200 inline-block w-[106px] h-10 cursor-pointer"
        onClick={onServicesTextClick}
      >
        Packages
      </div>
      <div
        className="absolute top-[5805px] left-[634px] text-xs text-gray-200 inline-block w-[88px] h-[41px] cursor-pointer"
        onClick={onVisitUsTextClick}
      >
        Visit us
      </div>
      <div
        className="absolute top-[5868px] left-[634px] text-xs text-gray-200 inline-block w-[71px] h-[41px] cursor-pointer"
        onClick={onAboutTextClick}
      >
        About
      </div>
      <div className="absolute top-[5682px] left-[129px] text-2xs">{`ORDER & RETURN POLICY`}</div>
      <div className="absolute top-[5745px] left-[129px] text-2xs">FAQs</div>
      <div className="absolute top-[5822.5px] left-[1148.5px] box-border w-[166px] h-px border-t-[1px] border-solid border-black" />
      <img
        className="absolute top-[5842px] left-[1149px] w-[38px] h-[38px] object-cover"
        alt=""
        src="../5a22b45aa94174-1@2x.png"
      />
      <img
        className="absolute top-[5837px] left-[1191px] w-12 h-12 object-cover"
        alt=""
        src="../kisspngyoutubelogocomputericons5adcd5332b87b3-1@2x.png"
      />
      <img
        className="absolute top-[5840px] left-[1243px] w-10 h-10 object-cover"
        alt=""
        src="../kisspngscalablevectorgraphicsclipartinstagrampngfile5a75716ab5b203-1@2x.png"
      />
      <img
        className="absolute top-[5838px] left-[1287px] w-11 h-11 object-cover"
        alt=""
        src="../5a230168351318-1@2x.png"
      />
      <div className="absolute top-[2295px] left-[839px] text-xl font-abhaya-libre">
        OUR WORK
      </div>
      <img
        className="absolute top-[4126px] left-[136px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[4126px] left-[95px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[4167px] left-[136px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[4167px] left-[95px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[4206px] left-[136px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[4206px] left-[95px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[4247px] left-[136px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[4247px] left-[95px] w-7 h-7"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="absolute top-[4286px] left-[136px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <img
        className="absolute top-[4286px] left-[95px] w-7 h-[30px]"
        alt=""
        src="../ellipse-9.svg"
      />
      <div className="absolute top-[4620px] left-[220px] text-xl font-jomolhari">
        NEWS LETTER
      </div>
      <div className="absolute top-[4714px] left-[182px] box-border w-[456px] h-[658px] border-[8px] border-solid border-violet-200" />
      <div className="absolute top-[4804px] left-[331px] font-jomolhari opacity-[0.5]">
        Your Name
      </div>
      <div className="absolute top-[4959px] left-[331px] font-jomolhari opacity-[0.5]">
        Your Email
      </div>
      <div className="absolute top-[5181px] left-[238px] rounded-[23px] bg-lavenderblush-200 w-[344px] h-[87px]" />
      <div className="absolute top-[5197px] left-[307px] font-jomolhari opacity-[0.5]">
        Subscribe Now
      </div>
      <div className="absolute top-[4860.5px] left-[237.5px] box-border w-[345px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[5015.5px] left-[237.5px] box-border w-[345px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[4943px] left-[1245px] font-light font-josefin-slab inline-block w-[621px] h-[202px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, .
      </div>
      <div className="absolute top-[4943px] left-[754px] text-xl leading-[57px] font-kalam inline-block w-[425px] h-[183px]">
        Taking care of all of your needs.
      </div>
      <input
        className="[border:none] bg-gainsboro absolute top-[5140px] left-[737px] rounded-[35px] w-[450px] h-[75px]"
        type="text"
      />
      <div className="absolute top-[5133px] left-[919px] text-lg leading-[97px] font-kalam inline-block w-[138px] h-[67px]">
        Search
      </div>
      <img
        className="absolute h-[0.72%] w-[2.31%] top-[84.28%] right-[57.07%] bottom-[15%] left-[40.63%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector.svg"
      />
      <img
        className="absolute top-[7px] left-[30px] w-[900px] h-[638px] object-cover"
        alt=""
        src="../logo-png-1@2x.png"
      />
      <img
        className="absolute top-[5663px] left-[0px] w-[578px] h-[410px] object-cover"
        alt=""
        src="../logo-png-11@2x.png"
      />
    </div>
  );
};

export default Home;
