import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./assets/css/App.css";
import bottomImg from "./assets/images/bottom.png";
import gzhImg from "./assets/images/gzh.png";
import logoImg from "./assets/images/logo.png";
import miniprogram from "./assets/images/miniprogram.png";
import topImg from "./assets/images/top.jpg";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import 'swiper/css/autoplay';

import "swiper/css";

function App() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(`/api/yunlian/${id}`).then((res) => {
      setInfo(res.data.object);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="yunlian-page-body">
      <div className="yunlian-page-body-wrapper">
        <div className="money-info">
          <div className="wrapper">
            <div className="top">
              <img src={topImg} width="100%" height="100%" alt="" />
            </div>
            <div className="content">
              <div className="logo">
                <img src={logoImg} alt="logo" />
              </div>
              {/* 轮播图 */}
              <div>
                <Swiper
                  modules={[Autoplay, A11y]}
                  loop={true}
                  autoplay={true}
                >
                  {info.images &&
                    JSON.parse(info.images).map((item) => (
                      <SwiperSlide key={item.name}>
                        <img
                          className="swiper-img"
                          src={item.url}
                          alt={item.name}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="money-single">
                <div className="outer-code">
                  唯一编号：{info.outerCode}
                  <div className="outer-code-img">
                    <img
                      src={info.outerCodeQrImg}
                      style={{ width: "100%" }}
                      alt="qrcode"
                    />
                  </div>
                </div>
                
                {info.dynasty &&<div className="info-item">
                  <div>朝代&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>{info.dynasty}</div>
                </div>}
                {info.era &&<div className="info-item">
                  <div>年代&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>{info.era}</div>
                </div>}
                <div className="info-item">
                  <div>名称&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>{info.name}</div>
                </div>
                {info.versionNo &&<div className="info-item">
                  <div>版别&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>{info.versionNo}</div>
                </div>}
                {info.comment &&<div className="info-item">
                  <div>评语&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>{info.comment}</div>
                </div>}
                {info.level &&<div className="info-item">
                  <div>等级&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>{info.level}</div>
                </div>}
                {info.grade &&<div className="info-item">
                  <div>分数&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>{info.grade}</div>
                </div>}
                {info.price &&<div className="info-item">
                  <div>参考价格&nbsp;&nbsp;&nbsp;</div>
                  <div>{info.price}元</div>
                </div>}
                {info.diameter &&<div className="info-item">
                  <div>数据&nbsp;&nbsp;&nbsp;</div>
                  <div>{info.diameter}*{info.thickness}mm{info.weight}克</div>
                </div>}
              </div>
              <div className="tip">
                <div className="tip-title">特别说明</div>
                <div className="tip-content">
                  请妥善保存评级币，保持评级币的原始状态，任何对币的损伤（洗、清、补、修）觅泉评级都不予承认，由此产生的一切损失请自行承担。
                </div>
              </div>
            </div>
            {/* bottom */}
            <div className="bottom">
              <img alt="" src={bottomImg} width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={gzhImg} alt="公众号" />
        <img src={miniprogram} alt="小程序" />
      </div>
    </div>
  );
}

export default App;
