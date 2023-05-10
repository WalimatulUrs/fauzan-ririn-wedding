import FulanFulanah from '@assets/images/fauzan-ririn.png';
import React, { Fragment } from 'react';
import { styWrapper } from './styles';



function HelloSection({ invitedPeople }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h2>
              {/* <h3 className="sub-title hs">8 Agustus 2021, Di Rumah Kami, Dusun Ireng Lauk, Gunungsari, Lombok Barat </h3> */}
              <p className="info">
                Dengan memohon Rahmat Allah Azza Wa Jalla, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan keberkahan dan
                kelancaran.
              </p>
            </div>
          </div>
          <div className="couple-wrap row">
            <div className="col-lg-5 col-md-5">
              <div className="couple-half">
                <div className="desc-groom">
                  <h3 className="main-font">Ahmad Fauzan S.Pd</h3>
                  <p className="parent-name parent-name__top">
                    Putra Bapak H. Mahmud <br />& Ibu Hj Nurrohmah
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <img src={FulanFulanah} alt="groom" className="img-responsive" loading="lazy" style={{ filter: "drop-shadow(0 6px 6px rgba(0, 0, 0, 0.5))", marginTop: '-32px', transform: 'scaleX(-1)', width: "auto", maxHeight: "170px" }} />
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="couple-half">
                <div className="desc-bride">
                  <h3 className="main-font">Ririn Novita Sari S.Pd</h3>
                  <p className="parent-name">
                    Putri Bapak Zainuri Ahmad AW <br />& Ibu Mariyam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


export default HelloSection;
