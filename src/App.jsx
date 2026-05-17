import React from "react";

import paymentQR from "./assets/5.png";
const pageLink = "https://m.me/105429995897909";

export default function SpringfieldSeaResortPage() {
  const [bookingData, setBookingData] = React.useState(null);
  const [paymentTimer, setPaymentTimer] = React.useState(600);
  const [extraGuests, setExtraGuests] = React.useState({});
  const [dates, setDates] = React.useState({});

  React.useEffect(() => {
    let timer;

    if (bookingData && paymentTimer > 0) {
      timer = setInterval(() => {
        setPaymentTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [bookingData, paymentTimer]);
  const rooms = [
    {
      title: "🏨 ห้องดีลักซ์ ( Deluxe Room )",
      size: "44 ตร.ม.",
      guests: "ผู้ใหญ่ 2 ท่าน เด็ก 1 คน",
      price: "1,690.-",
      oldPrice: "3,200.-",
      desc: "ห้องพักสไตล์รีสอร์ทริมทะเล พร้อมระเบียงและชิงช้า รับลมทะเลได้ทุกห้อง",
      extraBed: false,
      maxExtra: 0,
      images: [
        "https://i.postimg.cc/2ySdtHJV/1.jpg",
        "https://i.postimg.cc/rswGHhbR/2.jpg",
        "https://i.postimg.cc/mkg3ndqH/3.jpg",
        "https://i.postimg.cc/Bbn5zhyD/4.jpg"
      ]
    },
    {
      title: "🌊 ห้องแกรนด์ ดีลักซ์ ( Grand Deluxe )",
      size: "44 ตร.ม.",
      guests: "ผู้ใหญ่ 2 ท่าน เด็ก 1 คน",
      price: "1,890.-",
      oldPrice: "3,400.-",
      desc: "วิวทะเลสุดผ่อนคลาย ห้องกว้าง โปร่งสบาย พร้อมระเบียงส่วนตัว",
      extraBed: false,
      maxExtra: 0,
      images: [
        "https://i.postimg.cc/kXMWMhTN/5.jpg",
        "https://i.postimg.cc/QxNcNnfJ/6.jpg",
        "https://i.postimg.cc/SNQcQtgG/7.jpg",
        "https://i.postimg.cc/MKZ1Zr9D/8.jpg"
      ]
    },
    {
      title: "✨ ห้องจูเนียร์ สวีท ( Junior Suite )",
      size: "55 ตร.ม.",
      guests: "ผู้ใหญ่ 2 เด็ก 2 หรือ ผู้ใหญ่ 3 ท่าน",
      price: "2,340.-",
      oldPrice: "3,900.-",
      desc: "ห้องใหญ่พักสบาย พร้อมอ่างอาบน้ำ และระเบียงวิวสุดผ่อนคลาย",
      extraBed: true,
      maxExtra: 1,
      images: [
        "https://i.postimg.cc/ncVqVw32/9.jpg",
        "https://i.postimg.cc/7YPSPQKm/10.jpg",
        "https://i.postimg.cc/Dyf1fYxx/11.jpg",
        "https://i.postimg.cc/28Hh1Ftn/12.jpg"
      ]
    },
    {
      title: "🏊 ห้องพูลรูม ( Pool Room )",
      size: "57 ตร.ม.",
      guests: "ผู้ใหญ่ 2 เด็ก 2 หรือ ผู้ใหญ่ 3 ท่าน",
      price: "2,640.-",
      oldPrice: "4,400.-",
      desc: "ห้องพักพร้อมสระส่วนตัว เหมาะสำหรับคู่รักและครอบครัว",
      extraBed: true,
      maxExtra: 1,
      images: [
        "https://i.postimg.cc/7YB05MRg/13.jpg",
        "https://i.postimg.cc/5NPLXqrq/14.jpg",
        "https://i.postimg.cc/TYkgKqsJ/15.jpg",
        "https://i.postimg.cc/kXjK2FHf/16.jpg"
      ]
    },
    {
      title: "👨‍👩‍👧‍👦 ห้องแฟมิลี่ สวีท ( Family Suite )",
      size: "87 ตร.ม.",
      guests: "ผู้ใหญ่ 4 ท่าน เด็ก 2 คน",
      price: "3,360.-",
      oldPrice: "5,600.-",
      desc: "2 ห้องนอน พร้อมห้องนั่งเล่นและระเบียงส่วนตัว เหมาะสำหรับครอบครัว",
      extraBed: true,
      maxExtra: 1,
      images: [
        "https://i.postimg.cc/kXjK2FHj/17.jpg",
        "https://i.postimg.cc/28Hh1Ft0/18.jpg",
        "https://i.postimg.cc/NfNmK7nJ/19.jpg",
        "https://i.postimg.cc/28Hh1FtX/20.jpg",
        "https://i.postimg.cc/3JLmkCqf/21.jpg"
      ]
    },
    {
      title: "🏖️ ห้องพูลวิลล่า ( Pool Villa Beach Front )",
      size: "164 ตร.ม.",
      guests: "ผู้ใหญ่ 4 ท่าน เด็ก 2 คน",
      price: "3,720.-",
      oldPrice: "6,200.-",
      desc: "พูลวิลล่าติดชายหาด พร้อมสระว่ายน้ำส่วนตัว วิวทะเลเต็มตา",
      extraBed: true,
      maxExtra: 2,
      images: [
        "https://i.postimg.cc/X72drcPz/22-1.jpg",
        "https://i.postimg.cc/kXjK2FHj/17.jpg",
        "https://i.postimg.cc/TYkgKqsS/22.jpg",
        "https://i.postimg.cc/65Hn8LPk/23.jpg",
        "https://i.postimg.cc/CLvkRHtT/24.jpg",
        "https://i.postimg.cc/GhMG4JNn/25.jpg",
        "https://i.postimg.cc/CLvkRHt0/26.jpg"
      ]
    },
    {
      title: "👑 ห้องรอยัล สวีท ( Royal Suite )",
      size: "135 ตร.ม.",
      guests: "ผู้ใหญ่ 4 ท่าน เด็ก 2 คน",
      price: "4,100.-",
      oldPrice: "8,200.-",
      desc: "ห้องพักวิวทะเล 180 องศา พร้อมอ่างจากุซซี่และห้องนั่งเล่นสุดหรู",
      extraBed: true,
      maxExtra: 2,
      images: [
        "https://i.postimg.cc/13f6wVxd/27.jpg",
        "https://i.postimg.cc/RZNfKJr8/28.jpg",
        "https://i.postimg.cc/YChgYLcZ/29.jpg",
        "https://i.postimg.cc/3xdpm0Mz/30.jpg",
        "https://i.postimg.cc/x1cHMNDr/31.jpg",
        "https://i.postimg.cc/yx13dkys/32.jpg"
      ]
    }
  ];

  // Package data
  const packageSlides = [
  [
    "https://i.postimg.cc/kXMWMhTN/5.jpg",
    "https://i.postimg.cc/QxNcNnfJ/6.jpg",
    "https://i.postimg.cc/SNQcQtgG/7.jpg",
    "https://i.postimg.cc/MKZ1Zr9D/8.jpg"
  ],
  [
    "https://i.postimg.cc/ncVqVw32/9.jpg",
    "https://i.postimg.cc/7YPSPQKm/10.jpg",
    "https://i.postimg.cc/Dyf1fYxx/11.jpg",
    "https://i.postimg.cc/28Hh1Ftn/12.jpg"
  ],
  [
    "https://i.postimg.cc/X72drcPz/22-1.jpg",
    "https://i.postimg.cc/kXjK2FHj/17.jpg",
    "https://i.postimg.cc/TYkgKqsS/22.jpg",
    "https://i.postimg.cc/65Hn8LPk/23.jpg",
    "https://i.postimg.cc/CLvkRHtT/24.jpg",
    "https://i.postimg.cc/GhMG4JNn/25.jpg",
    "https://i.postimg.cc/CLvkRHt0/26.jpg"
  ],
  [
    "https://i.postimg.cc/13f6wVxd/27.jpg",
    "https://i.postimg.cc/RZNfKJr8/28.jpg",
    "https://i.postimg.cc/YChgYLcZ/29.jpg",
    "https://i.postimg.cc/3xdpm0Mz/30.jpg",
    "https://i.postimg.cc/x1cHMNDr/31.jpg",
    "https://i.postimg.cc/yx13dkys/32.jpg"
  ]
];

  const packages = [
    {
      title: "💕 Honeymoon Bliss Package ( แพ็คเกจ ฮันนีมูนบลิส )",
      image: "https://i.postimg.cc/kXMWMhTN/5.jpg",
      badge: "🔥 ขายดีที่สุด",
      oldPrice: "11,110 บาท",
      discount: "ลด 40%",
      price: "6,666 บาท",
      detail:
        "3 วัน 2 คืน • ห้องแกรนด์ ดีลักซ์ 44 ตร.ม. สำหรับคู่รัก 2 ท่าน พร้อมอาหารเช้า ซีฟู้ด นวด และไวน์",
      fullDetail: [
        "🌅 พักผ่อนในบรรยากาศสุดโรแมนติก",
        "🏨 ห้อง Grand Deluxe ชั้น 2 วิวทะเล",
        "✅ ห้องพัก Grand Deluxe 2 คืน",
        "✅ อาหารเช้าแบบบุฟเฟต์ทุกวัน",
        "✅ บัตรอาหารซีฟู้ด มูลค่า 3,000 บาท",
        "✅ นวดแผนไทย 1 ชั่วโมง / ท่าน",
        "✅ ไวน์สุดหรู 1 แก้ว / ท่าน / วัน ( เปลี่ยนเป็นมอคเทล • สมูทตี้ • น้ำผลไม้ได้ กรณีไม่ดื่มแอลกอฮอล์ )",
        "✅ เลือกกิจกรรมทำร่วมกันได้ 1 อย่าง",
        "✅ ประกันอุบัติเหตุ ตลอดทริป"
      ]
    },
    {
      title: "💙 Our Love Three Package ( แพ็คเกจ รักสามเรา )",
      image: "https://i.postimg.cc/ncVqVw32/9.jpg",
      badge: "💎 ครอบครัวยอดนิยม",
      oldPrice: "12,960 บาท",
      discount: "ลด 40%",
      price: "7,777 บาท",
      detail:
        "3 วัน 2 คืน • ห้องจูเนียร์ สวีท 55 ตร.ม. เหมาะสำหรับ 2–3 ท่าน พร้อมกิจกรรมสุดพิเศษ",
      fullDetail: [
        "👨‍👩‍👧 เหมาะสำหรับครอบครัวเล็ก หรือกลุ่มเพื่อนสนิท",
        "🏨 ห้อง Junior Suite พื้นที่กว้างขวาง",
        "✅ ห้องพัก Junior Suite 2 คืน",
        "✅ อาหารเช้าบุฟเฟต์ทุกวัน",
        "✅ บัตรอาหารซีฟู้ด มูลค่า 3,000 บาท",
        "✅ นวดแผนไทย 1 ชั่วโมง / ท่าน",
        "✅ ไวน์สุดหรู 1 แก้ว / ท่าน / วัน ( เปลี่ยนเป็นมอคเทล • สมูทตี้ • น้ำผลไม้ได้ กรณีไม่ดื่มแอลกอฮอล์ )",
        "✅ เลือกกิจกรรมทำร่วมกันได้ 2 อย่าง",
        "✅ ประกันอุบัติเหตุ ตลอดทริป"
      ]
    },
    {
      title: "🌊 Pool Villa Party Package ( แพ็คเกจ ปาตี้พูลวิลล่า )",
      image: "https://i.postimg.cc/X72drcPz/22-1.jpg",
      badge: "🎉 HOT DEAL",
      oldPrice: "16,665 บาท",
      discount: "ลด 40%",
      price: "9,999 บาท",
      detail:
        "3 วัน 2 คืน • พูลวิลล่าติดหาด 164 ตร.ม. สำหรับผู้ใหญ่ 4 ท่าน เด็ก 2 คน พร้อมสระส่วนตัวและซีฟู้ดจัดเต็ม",
      fullDetail: [
        "🏖 พูลวิลล่าติดหาด วิวทะเลเต็มตา",
        "🛏️ 2 ห้องนอน 2 ห้องน้ำ",
        "✅ พักห้อง Pool Villa Beach Front",
        "✅ อาหารเช้าบุฟเฟต์ทุกวัน",
        "✅ บัตรอาหารซีฟู้ด มูลค่า 5,000 บาท",
        "✅ นวดแผนไทย 1 ชั่วโมง / ท่าน",
        "✅ ไวน์สุดหรู 2 แก้ว / ท่าน / วัน ( เปลี่ยนเป็นมอคเทล • สมูทตี้ • น้ำผลไม้ได้ กรณีไม่ดื่มแอลกอฮอล์ )",
        "✅ เลือกกิจกรรมสนุก ๆ ได้ 2 อย่าง",
        "✅ ประกันอุบัติเหตุ ตลอดการเข้าพัก"
      ]
    },
    {
      title: "👑 Emperor Package ( แพ็คเกจ จักรพรรดิ์ )",
      image: "https://i.postimg.cc/13f6wVxd/27.jpg",
      badge: "👑 VIP PREMIUM",
      oldPrice: "21,665 บาท",
      discount: "ลด 40%",
      price: "12,999 บาท",
      detail:
        "3 วัน 2 คืน • Royal Suite วิวทะเล 180 องศา สำหรับผู้ใหญ่ 4 ท่าน เด็ก 2 คน พร้อมสิทธิพิเศษครบครัน",
      fullDetail: [
        "🏖 Royal Suite ขนาด 135 ตร.ม.",
        "🌊 วิวทะเล 180 องศา แบบพาโนรามา",
        "🛏️ 2 ห้องนอน 2 ห้องน้ำ",
        "✅ อาหารเช้าบุฟเฟต์ทุกวัน",
        "✅ บัตรอาหารซีฟู้ด มูลค่า 6,000 บาท",
        "✅ นวดแผนไทย 1 ชั่วโมง / ท่าน",
        "✅ ไวน์สุดหรู 2 แก้ว / ท่าน / วัน ( เปลี่ยนเป็นมอคเทล • สมูทตี้ • น้ำผลไม้ได้ กรณีไม่ดื่มแอลกอฮอล์ )",
        "✅ เลือกทำกิจกรรมร่วมกันได้ 3 อย่าง",
        "✅ ประกันอุบัติเหตุ ตลอดทริป"
      ]
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/k5t7QqgX/1008.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-xl px-6 py-3 rounded-full mb-8 shadow-2xl">
            <span className="text-cyan-300 text-lg">✦</span>
            <p className="uppercase tracking-[0.3em] text-sm md:text-base font-semibold text-white/90">
              Luxury Beachfront Resort • Hua Hin - Cha Am
            </p>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tight drop-shadow-2xl">
            Springfield at Sea
            <br />
            <span className="text-cyan-300">Resort</span>
          </h1>

          <div className="flex justify-center mb-8">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
          </div>

          <p className="text-xl md:text-3xl text-slate-100 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            สัมผัสประสบการณ์พักผ่อนระดับ 5 ดาว
            <br className="hidden md:block" />
            ริมชายหาดหัวหิน - ชะอำ พร้อมพูลวิลล่า วิวทะเล และแพ็กเกจสุดเอ็กซ์คลูซีฟ
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="bg-black/30 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-cyan-300 text-sm uppercase tracking-widest mb-1">Luxury</p>
              <p className="font-bold text-lg">Beachfront Resort</p>
            </div>

            <div className="bg-black/30 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-cyan-300 text-sm uppercase tracking-widest mb-1">Premium</p>
              <p className="font-bold text-lg">Pool Villa & Suites</p>
            </div>

            <div className="bg-black/30 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-cyan-300 text-sm uppercase tracking-widest mb-1">Exclusive</p>
              <p className="font-bold text-lg">5-Star Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">✨ จุดเด่นของโรงแรม</h2>
          <p className="text-slate-300 text-lg">พักผ่อนริมทะเลแบบครบจบในที่เดียว</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "🌊 ติดชายหาด เดินลงทะเลได้ทันที",
            "🍹 สระว่ายน้ำพร้อมบาร์ริมทะเล",
            "🏊‍♂️ สระว่ายน้ำขนาดใหญ่",
            "👶 โซนเด็กและ Kids Club",
            "🍽️ ห้องอาหารระดับพรีเมียม",
            "⭐⭐⭐⭐⭐ โรงแรมระดับ 5 ดาว",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur"
            >
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">🏨 ห้องพักแนะนำ</h2>
            <p className="text-slate-300 text-lg">
              เริ่มต้นเพียง 1,690.- พร้อมอาหารเช้า
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-[32px] overflow-hidden shadow-2xl"
              >
                <div className="overflow-x-auto flex snap-x snap-mandatory">
                  {room.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={room.title}
                      className="h-72 min-w-full object-cover snap-center"
                    />
                  ))}
                </div>

                <div className="flex justify-center gap-2 py-3 bg-black/5">
                  {room.images.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className="w-2 h-2 rounded-full bg-slate-400"
                    />
                  ))}
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-black">{room.title}</h3>

                    {index === 0 && (
                      <span className="bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full animate-pulse shadow-lg">
                        🔥 ราคาดีที่สุด
                      </span>
                    )}

                    {index === 1 && (
                      <span className="bg-cyan-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg animate-pulse">
                        🌊 วิวทะเลยอดนิยม
                      </span>
                    )}

                    {index === 2 && (
                      <span className="bg-purple-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg animate-bounce">
                        ✨ เหมาะสำหรับครอบครัว
                      </span>
                    )}

                    {index === 5 && (
                      <span className="bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full animate-bounce shadow-lg">
                        👑 PREMIUM
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-slate-700 mb-5">
                    <p>📐 ขนาด : {room.size}</p>
                    <p>👨‍👩‍👧‍👦 {room.guests}</p>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {room.desc}
                  </p>

                  <div className="bg-slate-100 rounded-3xl p-5 mb-6 border border-slate-200">
                    <div className="mb-4">
                      {room.extraBed ? (
                        <>
                          <p className="font-black text-slate-800 mb-3 text-lg">
                            🛏️ เสริมผู้เข้าพัก ( สูงสุด {room.maxExtra} ท่าน • ท่านละ ฿1000 )
                          </p>

                          <div className="flex items-center overflow-hidden rounded-2xl border border-slate-300 w-fit bg-white shadow-sm mb-4">
                            <button
                              onClick={() =>
                                setExtraGuests((prev) => ({
                                  ...prev,
                                  [index]: Math.max((prev[index] || 0) - 1, 0),
                                }))
                              }
                              className="px-5 py-3 text-xl font-black text-slate-600 hover:bg-slate-100"
                            >
                              −
                            </button>

                            <div className="px-6 py-3 text-2xl font-black min-w-[70px] text-center">
                              {extraGuests[index] || 0}
                            </div>

                            <button
                              onClick={() =>
                                setExtraGuests((prev) => ({
                                  ...prev,
                                  [index]: Math.min((prev[index] || 0) + 1, room.maxExtra),
                                }))
                              }
                              className="px-5 py-3 text-xl font-black text-slate-600 hover:bg-slate-100"
                            >
                              +
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="bg-red-100 text-red-700 px-5 py-4 rounded-2xl font-black text-lg border border-red-300">
                          ❌ ห้องประเภทนี้ไม่สามารถเสริมเตียงได้
                        </div>
                      )}
                    </div>

                    <div className="flex gap-4 flex-wrap">
                      <div>
                        <p className="text-xs text-slate-500 mb-2 font-bold">📅 CHECK-IN</p>
                        <input
                          type="date"
                          value={dates[index]?.checkIn || ""}
                          onChange={(e) =>
                            setDates((prev) => ({
                              ...prev,
                              [index]: {
                                ...prev[index],
                                checkIn: e.target.value,
                              },
                            }))
                          }
                          className="rounded-2xl border border-slate-300 px-4 py-3 font-semibold bg-white"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500 mb-2 font-bold">🏖️ CHECK-OUT</p>
                        <input
                          type="date"
                          value={dates[index]?.checkOut || ""}
                          onChange={(e) =>
                            setDates((prev) => ({
                              ...prev,
                              [index]: {
                                ...prev[index],
                                checkOut: e.target.value,
                              },
                            }))
                          }
                          className="rounded-2xl border border-slate-300 px-4 py-3 font-semibold bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-slate-700 font-semibold">
                    💰 เพิ่มผู้เข้าพักพิเศษ {(extraGuests[index] || 0)} คน
                    (+฿{((extraGuests[index] || 0) * 1000).toLocaleString()})
                  </div>

                  <div className="flex items-end justify-between gap-4 flex-wrap">
                    <div>
                      <p className="text-slate-400 line-through text-lg">
                        {room.oldPrice}
                      </p>
                      <p className="text-4xl font-black text-cyan-600">
                        ฿{(() => {
                          const base = parseInt(room.price.replace(/,/g, ""));
                          const extra = ((extraGuests[index] || 0) * 1000);

                          const checkIn = dates[index]?.checkIn;
                          const checkOut = dates[index]?.checkOut;

                          let nights = 1;

                          if (checkIn && checkOut) {
                            const start = new Date(checkIn);
                            const end = new Date(checkOut);
                            const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
                            nights = diff > 0 ? diff : 1;
                          }

                          return ((base + extra) * nights).toLocaleString();
                        })()}.-
                      </p>
                    </div>

                    <button
                    onClick={() => {
                        const base = parseInt(room.price.replace(/,/g, ""));
                        const extra = ((extraGuests[index] || 0) * 1000);

                        const checkIn = dates[index]?.checkIn;
                        const checkOut = dates[index]?.checkOut;

                        let nights = 1;

                        if (checkIn && checkOut) {
                          const start = new Date(checkIn);
                          const end = new Date(checkOut);
                          const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
                          nights = diff > 0 ? diff : 1;
                        }

                        const total = (base + extra) * nights;

                        setBookingData({
                          title: room.title,
                          price: total.toLocaleString(),
                        });

                        setPaymentTimer(600);
                      }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl"
                    >
                      🏖️ จองห้องพัก
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {bookingData && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[32px] p-8 max-w-md w-full text-black relative">
            <button
              onClick={() => setBookingData(null)}
              className="absolute top-4 right-4 text-2xl font-black"
            >
              ✕
            </button>

            <h2 className="text-3xl font-black mb-4 text-center">
              💳 ชำระเงินเพื่อยืนยันการจอง
            </h2>

            <img
              src={paymentQR}
              alt="QR Payment"
              className="w-72 h-72 mx-auto rounded-3xl shadow-xl mb-6"
            />

            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-3xl p-6 text-center mb-6">
              <p className="font-bold mb-2">💰 ยอดชำระทั้งหมด</p>
              <p className="text-5xl font-black">฿{bookingData.price}</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-3xl p-6 text-center mb-6">
              <p className="text-red-500 font-black text-xl mb-3">
                ⏰ กรุณาชำระเงินภายใน
              </p>
              <p className="text-6xl font-black text-red-500 mb-3">
                {String(Math.floor(paymentTimer / 60)).padStart(2, "0")}:
                {String(paymentTimer % 60).padStart(2, "0")}
              </p>
              <p className="text-slate-600">
                เพื่อป้องกันห้องหลุดจอง กรุณาแจ้งสลิปภายในเวลาที่กำหนด
              </p>
            </div>

            <div className="bg-slate-100 rounded-3xl p-6 mb-6">
              <h3 className="font-black text-xl mb-3">📌 หลังชำระเงินแล้ว</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• กรุณาส่งสลิปผ่าน Facebook Page ของโรงแรม</li>
                <li>• เจ้าหน้าที่จะยืนยันการจองภายใน 5 นาที</li>
                <li>• กรุณาเก็บหลักฐานการชำระเงินไว้</li>
              </ul>
            </div>

            <a
              href={pageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xl py-5 rounded-3xl hover:scale-105 transition-all shadow-2xl"
            >
              📩 แจ้งสลิปยืนยันการจองที่นี่
            </a>
          </div>
        </div>
      )}

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">🎁 แพ็กเกจสุดคุ้ม</h2>
            <p className="text-slate-300 text-xl">
              โปรโมชั่นพิเศษ ลดสูงสุด 40% พร้อมสิทธิประโยชน์ครบครัน
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-[36px] overflow-hidden shadow-2xl"
              >
                <div className="overflow-x-auto flex snap-x snap-mandatory">
                  {packageSlides[index].map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={pkg.title}
                      className="h-80 min-w-full object-cover snap-center"
                    />
                  ))}
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-3xl font-black leading-tight">{pkg.title}</h3>
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-black animate-pulse">
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="line-through text-slate-400 text-xl">
                      {pkg.oldPrice}
                    </span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full font-black text-sm">
                      {pkg.discount}
                    </span>
                  </div>

                  <p className="text-5xl font-black text-cyan-600 mb-5">
                    {pkg.price}
                  </p>

                  <p className="text-slate-700 text-lg leading-relaxed mb-6">
                    {pkg.detail}
                  </p>

                  <div className="space-y-3 bg-slate-100 rounded-3xl p-6 mb-6">
                    {pkg.fullDetail.map((item, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="bg-white rounded-2xl px-4 py-3 font-semibold shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 mb-6 shadow-xl border border-white/10">
                    <h4 className="text-2xl font-black mb-4">🦞 รายละเอียดบัตรอาหารซีฟู้ด</h4>

                    <div className="space-y-3 text-slate-200 leading-relaxed">
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                        🦞 บัตรอาหารซีฟู้ด คือ บัตรกำนัลที่สามารถใช้แทนเงินสด
                        เพื่อสั่งซื้ออาหารและเครื่องดื่ม ภายในห้องอาหารของโรงแรมเท่านั้น
                      </div>

                      <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-4 text-cyan-200 font-semibold">
                        ✨ สามารถแบ่งใช้ได้ 2 ครั้ง
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-3xl p-6 mb-8 shadow-2xl">
                    <h4 className="text-2xl font-black mb-5">🌊 กิจกรรมที่สามารถเลือกได้</h4>

                    <div className="grid md:grid-cols-2 gap-4 mb-5">
                      {[
                        "🛥 เจ็ทสกี (Jetski) / 1 ชั่วโมง",
                        "🪁 ไคท์บอร์ด (Kiteboarding) / 1 ชั่วโมง",
                        "🛶 เรือคายัค (Kayaking) / 1 ชั่วโมง",
                        "🚣 SUP Board / 1 ชั่วโมง",
                        "🏄 Surf Board / 1 ชั่วโมง",
                        "🤿 ดำน้ำตื้น (Snorkeling)",
                        "🐠 ดำน้ำลึก (Scuba Diving)"
                      ].map((activity, actIndex) => (
                        <div
                          key={actIndex}
                          className="bg-white/10 backdrop-blur rounded-2xl px-4 py-4 border border-white/10 font-semibold"
                        >
                          {activity}
                        </div>
                      ))}
                    </div>

                    <div className="bg-yellow-400 text-black rounded-2xl p-4 font-black text-center shadow-lg">
                      ⚠️ ช่วงนี้งดกิจกรรมดำน้ำ • กิจกรรมอื่นสามารถเลือกได้ตามปกติ
                    </div>
                  </div>

                  <div className="bg-sky-100 rounded-3xl p-5 mb-6 border border-sky-200">
                    {index <= 1 ? (
                      <div className="bg-red-100 text-red-700 px-5 py-4 rounded-2xl font-black text-lg border border-red-300 mb-4">
                        ❌ แพ็กเกจนี้ไม่สามารถเสริมผู้เข้าพักได้
                      </div>
                    ) : (
                      <>
                        <p className="font-black text-slate-800 mb-3">
                          🛏️ เสริมผู้เข้าพัก ( รวม 2 คืน ฿3000 • ได้รับสิทธิ์ครบตามแพ็กเกจ )
                        </p>

                        <div className="flex items-center overflow-hidden rounded-2xl border border-sky-300 w-fit bg-white shadow-sm mb-4">
                          <button
                            onClick={() =>
                              setExtraGuests((prev) => ({
                                ...prev,
                                [`pkg-${index}`]: Math.max((prev[`pkg-${index}`] || 0) - 1, 0),
                              }))
                            }
                            className="px-5 py-3 text-xl font-black text-slate-600 hover:bg-slate-100"
                          >
                            −
                          </button>

                          <div className="px-6 py-3 text-2xl font-black min-w-[70px] text-center">
                            {extraGuests[`pkg-${index}`] || 0}
                          </div>

                          <button
                            onClick={() =>
                              setExtraGuests((prev) => ({
                                ...prev,
                                [`pkg-${index}`]: Math.min((prev[`pkg-${index}`] || 0) + 1, 2),
                              }))
                            }
                            className="px-5 py-3 text-xl font-black text-slate-600 hover:bg-slate-100"
                          >
                            +
                          </button>
                        </div>
                      </>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-2 font-bold">📅 CHECK-IN</p>
                        <input
                          type="date"
                          value={dates[`pkg-${index}`]?.checkIn || ""}
                          onChange={(e) =>
                            setDates((prev) => ({
                              ...prev,
                              [`pkg-${index}`]: {
                                ...prev[`pkg-${index}`],
                                checkIn: e.target.value,
                              },
                            }))
                          }
                          className="rounded-2xl border border-slate-300 px-4 py-3 font-semibold bg-white w-full"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500 mb-2 font-bold">🏖️ CHECK-OUT</p>
                        <input
                          type="date"
                          value={dates[`pkg-${index}`]?.checkOut || ""}
                          onChange={(e) =>
                            setDates((prev) => ({
                              ...prev,
                              [`pkg-${index}`]: {
                                ...prev[`pkg-${index}`],
                                checkOut: e.target.value,
                              },
                            }))
                          }
                          className="rounded-2xl border border-slate-300 px-4 py-3 font-semibold bg-white w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const packagePrice = parseInt(pkg.price.replace(/[^0-9]/g, ""));
                      const extra = (extraGuests[`pkg-${index}`] || 0) * 3000;

                      const packageDailyPrices = [1890, 2340, 3720, 4100];
                      const dailyPrice = packageDailyPrices[index];

                      const checkIn = dates[`pkg-${index}`]?.checkIn;
                      const checkOut = dates[`pkg-${index}`]?.checkOut;

                      let nights = 2;

                      if (checkIn && checkOut) {
                        const start = new Date(checkIn);
                        const end = new Date(checkOut);
                        const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
                        nights = diff > 0 ? diff : 2;
                      }

                      let total = 0;

                      const packageCount = Math.floor(nights / 2);
                      const remainNight = nights % 2;

                      total = (packageCount * packagePrice) + (remainNight * dailyPrice);

                      total += extra;

                      setBookingData({
                        title: pkg.title,
                        price: total.toLocaleString(),
                      });

                      setPaymentTimer(600);
                    }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 rounded-3xl text-xl font-black hover:scale-[1.02] transition-all shadow-2xl"
                  >
                    ✨ จองแพ็กเกจนี้
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
