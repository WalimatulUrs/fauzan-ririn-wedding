import React, { Fragment } from 'react';
import { styWrapper } from './styles';
import WeddingInfoBox from './WeddingInfoBox';


function WeddingSection() {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        {/* <div className="overlay"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Akad Nikah dan Walimah</h2>
              <span className="sub-title sub-title__wedding">InsyaAllah akan Diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Akad Nikah"
                time="14:00 WITA"
                date="Sabtu, 13 Mei 2023"
                description="Lokasi Acara : Masjid Bait Al Islam Dusun Egok Desa Suka Makmur Kec. Gerung Lombok Barat"
                mobileDescription="Lokasi Acara : Masjid Bait Al Islam Dusun Egok Desa Suka Makmur Kec. Gerung Lombok Barat"
              />
              <WeddingInfoBox
                title="Walimah"
                time="09:30 WITA - Selesai"
                date="Ahad, 14 Mei 2023"
                description="Lokasi Acara : Halaman SD Negri 03 Suka Makmur Desa Suka Makmur Kec. Gerung Lobar"
                mobileDescription="Lokasi Acara : Halaman SD Negri 03 Suka Makmur Desa Suka Makmur Kec Gerung Lobar"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WeddingSection;
