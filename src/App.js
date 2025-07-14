import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./assets/css/App.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import "swiper/css/autoplay";

import "swiper/css";

function App() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(`https://www.miquan.ink/api/yunlian/${id}`).then((res) => {
      setInfo(res.data.object);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="custom-pj">
      <div className="cloud-header">
        <div className="ps-bg">
          <div className="logo">
            <img
              src="https://miquan-money-cdn.miquan.ink/static/wechat/mqjd/quanlian/logo.png"
              alt="logo"
            ></img>
          </div>
          <div className="qrcode">
            <img src={info.outerCodeQrImg} alt="qrcode" />
          </div>
          <div className="code">
            <div className="code-title">唯一编号：</div>
            <div className="code-num">{info.BM || info.outerCode}</div>
          </div>
        </div>
      </div>
      {/* 轮播图 */}
      <div className="cloud-swiper">
      <PhotoProvider>
        <Swiper modules={[Autoplay, A11y]} loop={true} autoplay={true}>
          {info.images &&
            JSON.parse(info.images).map((item) => (
              <SwiperSlide key={item.name}>
                  <PhotoView key={item.nam} src={item.url}>
                    <img className="swiper-img" src={item.url} alt={item.name} />
                  </PhotoView>
              </SwiperSlide>
            ))}
        </Swiper>
        </PhotoProvider>
      </div>
      <div className="cloud-content">
        {info.particularYear && (
          <div className="cloud-info-item">
            <div>年份</div>
            <div>{info.particularYear}</div>
          </div>
        )}
        {info.faceValue && (
          <div className="cloud-info-item">
            <div>面值</div>
            <div>{info.faceValue}</div>
          </div>
        )}
        {info.modernCurrencyName && (
          <div className="cloud-info-item">
            <div>名称</div>
            <div>{info.modernCurrencyName}</div>
          </div>
        )}

        {(info.particularYear && info.categoryType) ||
          (!info.particularYear && info.format && (
            <div className="cloud-info-item">
              <div>版别</div>
              <div>{info.categoryType || info.format}</div>
            </div>
          ))}
        {info.crownNumber && (
          <div className="cloud-info-item">
            <div>冠号</div>
            <div>{info.crownNumber}</div>
          </div>
        )}
        {info.fraction && (
          <div className="cloud-info-item">
            <div>分数</div>
            <div>{info.fraction}</div>
          </div>
        )}
        {info.dynasty && (
          <div className="cloud-info-item">
            <div>朝代</div>
            <div>{info.dynasty}</div>
          </div>
        )}
        {info.era && (
          <div className="cloud-info-item">
            <div>年代</div>
            <div>{info.era}</div>
          </div>
        )}
        {info.name && (
          <div className="cloud-info-item">
            <div>名称</div>
            <div>{info.name}</div>
          </div>
        )}
        {info.versionNo && (
          <div className="cloud-info-item">
            <div>版别</div>
            <div>{info.versionNo}</div>
          </div>
        )}
        {info.level && (
          <div className="cloud-info-item">
            <div>级别</div>
            <div>{info.level}</div>
          </div>
        )}
        {info.grade && (
          <div className="cloud-info-item">
            <div>分数</div>
            <div>{info.grade}</div>
          </div>
        )}
        {info.diameter && (
          <div className="cloud-info-item">
            <div>数据</div>
            <div>
              {info.diameter}*{info.thickness}mm{info.weight}克
            </div>
          </div>
        )}
        {!info.modernCurrencyName && <div className="cloud-info-item">
          <div>样本来源</div>
          <div>来源于觅泉版别速查</div>
        </div>}
        {info.comment && (
          <div className="cloud-info-item">
            <div>说明</div>
            <div>{info.comment}</div>
          </div>
        )}
        {info.partnerName && (
          <div className="cloud-info-item">
            <div>合作机构</div>
            <div>{info.partnerName}</div>
          </div>
        )}
      </div>
      <div className="cloud-msg">
        <div className="ps-bg">
          <div className="cloud-tip">
            <div className="tip-title">特别提示</div>
            <div className="tip-desc">
              藏品应妥善保存，保持原始评级状态，任何对藏品的损伤都不予认可，并不承担由此带来的任何损失。
            </div>
            <div className="tip-footer">
              <div className="footer-title">北京觅泉科技有限公司</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cloud-logo">
        <img
          src="https://miquan-money-cdn.miquan.ink/static/wechat/mqjd/quanlian/cloud_logo.png"
          alt=""
        ></img>
      </div>
    </div>

    // <div className="yunlian-page-body">
    //   <div className="yunlian-page-body-wrapper">
    //     <div className="money-info">
    //       <div className="wrapper">
    //         <div className="top">
    //           <img src={topImg} width="100%" height="100%" alt="" />
    //         </div>
    //         <div className="content">
    //           <div className="logo">
    //             <img src={logoImg} alt="logo" />
    //           </div>
    //           {/* 轮播图 */}
    //           <div>
    //             <Swiper
    //               modules={[Autoplay, A11y]}
    //               loop={true}
    //               autoplay={true}
    //             >
    //               {info.images &&
    //                 JSON.parse(info.images).map((item) => (
    //                   <SwiperSlide key={item.name}>
    //                     <img
    //                       className="swiper-img"
    //                       src={item.url}
    //                       alt={item.name}
    //                     />
    //                   </SwiperSlide>
    //                 ))}
    //             </Swiper>
    //           </div>
    //           <div className="money-single">
    //             <div className="outer-code">
    //               唯一编号：{info.outerCode}
    //               <div className="outer-code-img">
    //                 <img
    //                   src={info.outerCodeQrImg}
    //                   style={{ width: "100%" }}
    //                   alt="qrcode"
    //                 />
    //               </div>
    //             </div>

    //             {info.dynasty &&<div className="info-item">
    //               <div>朝代&nbsp;&nbsp;&nbsp;&nbsp;</div>
    //               <div>{info.dynasty}</div>
    //             </div>}
    //             {info.era &&<div className="info-item">
    //               <div>年代&nbsp;&nbsp;&nbsp;&nbsp;</div>
    //               <div>{info.era}</div>
    //             </div>}
    //             <div className="info-item">
    //               <div>名称&nbsp;&nbsp;&nbsp;&nbsp;</div>
    //               <div>{info.name}</div>
    //             </div>
    //             {info.versionNo &&<div className="info-item">
    //               <div>版别&nbsp;&nbsp;&nbsp;&nbsp;</div>
    //               <div>{info.versionNo}</div>
    //             </div>}
    //             {info.comment &&<div className="info-item">
    //               <div>评语&nbsp;&nbsp;&nbsp;&nbsp;</div>
    //               <div>{info.comment}</div>
    //             </div>}
    //             {info.level &&<div className="info-item">
    //               <div>等级&nbsp;&nbsp;&nbsp;&nbsp;</div>
    //               <div>{info.level}</div>
    //             </div>}
    //             {info.grade &&<div className="info-item">
    //               <div>分数&nbsp;&nbsp;&nbsp;&nbsp;</div>
    //               <div>{info.grade}</div>
    //             </div>}
    //             {info.price &&<div className="info-item">
    //               <div>参考价格&nbsp;&nbsp;&nbsp;</div>
    //               <div>{info.price}元</div>
    //             </div>}
    //             {info.diameter &&<div className="info-item">
    //               <div>数据&nbsp;&nbsp;&nbsp;</div>
    //               <div>{info.diameter}*{info.thickness}mm{info.weight}克</div>
    //             </div>}
    //           </div>
    //           <div className="tip">
    //             <div className="tip-title">特别说明</div>
    //             <div className="tip-content">
    //               请妥善保存评级币，保持评级币的原始状态，任何对币的损伤（洗、清、补、修）觅泉评级都不予承认，由此产生的一切损失请自行承担。
    //             </div>
    //           </div>
    //         </div>
    //         {/* bottom */}
    //         <div className="bottom">
    //           <img alt="" src={bottomImg} width="100%" height="100%" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="footer">
    //     <img src={gzhImg} alt="公众号" />
    //     <img src={miniprogram} alt="小程序" />
    //   </div>
    // </div>
  );
}

export default App;
