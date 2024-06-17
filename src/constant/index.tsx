import { GoTag } from "react-icons/go";
import { GoThumbsup } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { BsAward } from "react-icons/bs";

export const ourServicesList = [
    "Sewa Mobil Dengan Supir di Bali 12 Jam",
    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    "Sewa Mobil Jangka Panjang Bulanan",
    "Gratis Antar - Jemput Mobil di Bandara",
    "Layanan Airport Transfer / Drop In Out"
] as const;

export const whyUsItem = [
    {
        id: 1,
        icon: GoTag,
        title: "Mobil Lengkap",
        content: "Tersedia banyak varian mobil, dengan kondisi masih baru, wangi, bersih dan terawat",
        color: "bg-[#f9cc00]"
    },
    {
        id: 2,
        icon: GoThumbsup,
        title: "Harga Murah",
        content: "Harga dijamin murah & bersaing, bisa bandingkan harga kami dengan rental mobil lain",
        color: "bg-[#fa2c5a]"
    },
    {
        id: 3,
        icon: GoClock,
        title: "Layanan 24 Jam",
        content: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga melayani di hari minggu",
        color: "bg-[#0d28a6]"
    },
    {
        id: 4,
        icon: BsAward,
        title: "Sopir Professional",
        content: "Menyediakan sopir yang profesional, berpengalaman, jujur, ramah dan tepat waktu",
        color: "bg-[#5cb85f]"
    },
] as const;

export const faqItems = [
    "Apa saja syarat yang dibutuhkan?",
    "Berapa hari minimal sewa mobil lepas kunci?",
    "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    "Apakah Ada biaya antar-jemput?",
    "Bagaimana jika terjadi kecelakaan"
] as const;

export const testimonialItem = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jane Doe",
        age: 32,
        address: "Bromo",
        testimoni: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Doe",
        age: 36,
        address: "Bromo",
        testimoni: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Josh Doe",
        age: 24,
        address: "Bromo",
        testimoni: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    },
] as const;

export const showLimitOption = [
    {
      value: 7,
      label: "7",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 10,
      label: "10",
    },
  ];

export const carType = [
    {
        value: "", label: "--Select Car Type--", disabled: true,
    },
    {
        value: "Convertible", label: "Convertible",
    },
    {
        value: "Extended Cab Pickup", label: "Extended Cab Pickup",
    },
    {
        value: "Regular Cab Pickup", label: "Regular Cab Pickup",
    },
    {
        value: "Minivan", label: "Minivan",
    },
    {
        value: "Crew Cab Pickup", label: "Crew Cab Pickup",
    },
    {
        value: "Coupe", label: "Coupe",
    },
    {
        value: "Passenger Van", label: "Passenger Van",
    },
    {
        value: "Wagon", label: "Wagon",
    },
    {
        value: "SUV", label: "SUV",
    },
    {
        value: "MPV", label: "MPV",
    },
    {
        value: "Hatchback", label: "Hatchback",
    },
    {
        value: "Sedan", label: "Sedan",
    },
    {
        value: "Sport", label: "Sport",
    },
    {
        value: "Crossover", label: "Crossover",
    },
    {
        value: "Electric", label: "Electric",
    },
    {
        value: "Off Road", label: "Off Road",
    }
  ];

  export const carOptions = [
    "Alarm",
    "AM/FM Stereo",
    "Airbag: Passenger",
    "Airbag: Driver",
    "Airbag: Side",
    "Antilock Brakes",
    "A/C: Rear",
    "A/C: Front",
    "Alloy Wheels",
    "Bucket Seats",
    "Cassette Player",
    "Cruise Control",
    "CD (Single Disc)",
    "CD (Multi Disc)",
    "Fog Lights",
    "Integrated Phone",
    "Keyless Entry",
    "Memory Seats",
    "MP3 (Single Disc)",
    "Navigation",
    "Rear Window Defroster",
    "Power Windows",
    "Power Steering",
    "Power Seats",
    "Premium Sound",
    "Tinted Glass",
    "Third Row Seats",
  ];

  export const carSpecs = [
    "Brake assist",
    "Leather-wrapped shift knob",
    "Glove box lamp",
    "Rear passenger map pockets",
    "Electrochromic rearview mirror",
    "Dual chrome exhaust tips",
    "Direct-type tire pressure monitor system",
    "Cargo area lamp",
    "Automatic temperature control",
    "Electronic stability",
    "Trip computer",
    "Power steering",
    "Power door mirrors",
    "Front bucket seats",
    "Navigation system",
    "Wireless phone connectivity",
    "Power driver seat",
    "Rear window defroster",
    "Front bucket seats",
    "Rear window defroster",
    "Exterior parking camera rear",
    "Front dual zone A/C",
  ];