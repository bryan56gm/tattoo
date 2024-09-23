// Components
import Hero from "./ui/Home/Hero";
import Description from "./ui/Home/Description";
import Tattoos from "./ui/Home/Tattoos";
import Clothes from "./ui/Home/Clothes";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Description />
      <Tattoos />
      <Clothes />
    </main>
  );
}











// import Hero from './ui/Home/Hero';
// import Description from './ui/Home/Description';

// // Importa el dynamic loader de Next.js
// import dynamic from 'next/dynamic';
// // Carga el componente CustomSwiper dinámicamente sin SSR (Server-Side Rendering)
// const CustomSwiper = dynamic(() => import('./ui/CustomSwiper'), { ssr: false });

// export default function HomePage() {
//   return (
//     <main>
//       <Hero />
//       <Description />
//       <CustomSwiper />
//     </main>
//   );
// }