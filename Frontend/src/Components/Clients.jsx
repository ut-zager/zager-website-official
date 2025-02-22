import React from 'react';
import './ui/Clients.css';
const Clients = () => {
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="h-[60vh] w-[80vw] flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold mb-4">Our Clients</h1>
        <div className="relative flex items-center justify-center h-full bg-white bg-opacity-10 rounded-[50px_150px] w-full overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-[10%] bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-[10%] bg-gradient-to-l from-black to-transparent"></div>
          
          <div className="flex animate-scroll whitespace-nowrap space-x-4"> {/* Added space-x-4 for spacing */}
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffront.png?alt=media&token=a649eb27-4375-4244-a58e-6195da276306" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffusion.png?alt=media&token=95dea704-ce1c-4b1b-87c7-60d7c7896d7d" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Flpc.png?alt=media&token=c7236b6b-4b59-40e5-8b0e-e0bbb593955b" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fskygym.png?alt=media&token=164f00db-f726-4625-a24b-f037271a7aac" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fnidaanmonopng.PNG.png?alt=media&token=2a4349bf-2714-4b7f-920a-70cede7ae914" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2FLogo4x.png?alt=media&token=2620ba16-f280-4fd3-90a6-0f4a1de2d2f3" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fargo.png?alt=media&token=29f0c24f-2f7b-4d20-8aba-1e0d36f26d0f" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Farise.jpg?alt=media&token=88c4161d-8988-419c-970a-53ef8169b8ae" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffinedine.png?alt=media&token =586d67bc-6228-4b23-924b-9f413505f565" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fhygiene.jpg?alt=media&token=b75d473b-f842-41f4-8d42-a00e50bfd238" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Flpc.png?alt=media&token=c7236b6b-4b59-40e5-8b0e-e0bbb593955b" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fmomos_nation2.png?alt=media&token=636db2fd-46f3-47b7-a0f6-aea8c949317e" alt="" className="h-[10vh] max-h-[60px] object-contain" />
            <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Frevive.png?alt=media&token=4bddc43b-d024-4eba-9b55-c818aad9d86d" alt="" className="h-[10vh] max-h-[60px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

    // <div className="max-w-3xl mx-auto p-4">
    //   <h1 className="text-center text-2xl font-bold mb-4">Our Clients</h1>
    //   <Swiper
    //     navigation
    //     pagination={{ clickable: true }}
    //     className="mySwiper"
    //     style={{height: '500px'}}
    //   >
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffront.png?alt=media&token=a649eb27-4375-4244-a58e-6195da276306" alt="Slide 1" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffusion.png?alt=media&token=95dea704-ce1c-4b1b-87c7-60d7c7896d7d" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Flpc.png?alt=media&token=c7236b6b-4b59-40e5-8b0e-e0bbb593955b" alt="Slide 3" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fskygym.png?alt=media&token=164f00db-f726-4625-a24b-f037271a7aac" alt="Slide 4" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fnidaanmonopng.PNG.png?alt=media&token=2a4349bf-2714-4b7f-920a-70cede7ae914"alt="Slide 5" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2FLogo4x.png?alt=media&token=2620ba16-f280-4fd3-90a6-0f4a1de2d2f3" alt="Slide 6" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fargo.png?alt=media&token=29f0c24f-2f7b-4d20-8aba-1e0d36f26d0f" alt="Slide 7" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Farise.jpg?alt=media&token=88c4161d-8988-419c-970a-53ef8169b8ae" alt="Slide 8" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffinedine.png?alt=media&token=586d67bc-6228-4b23-924b-9f413505f565" alt="Slide 9" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fhygiene.jpg?alt=media&token=b75d473b-f842-41f4-8d42-a00e50bfd238" alt="Slide 10" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Flpc.png?alt=media&token=c7236b6b-4b59-40e5-8b0e-e0bbb593955b" alt="Slide 11" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fmomos_nation2.png?alt=media&token=636db2fd-46f3-47b7-a0f6-aea8c949317e" alt="Slide 12" className="w-full h-auto" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Frevive.png?alt=media&token=4bddc43b-d024-4eba-9b55-c818aad9d86d" alt="Slide 13" className="w-full h-auto" />
    //     </SwiperSlide>
    //   </Swiper>
    // </div>


