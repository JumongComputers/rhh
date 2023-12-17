export interface Slide {
  imageUrl: string;
  heading: string;
  initial: { y: number; opacity: number };
  animate: { y: number; opacity: number };
  transition: { duration: number; delay: number };
}

const slides: Slide[] = [
  {
    imageUrl: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702733039/gridex/OVI__at_10.45.56_qky7ae.webp",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.5 },
  },
  {
    imageUrl: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731467/gridex/hero4_enkmi3.webp",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.5 },
  },
  {
    imageUrl: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731464/gridex/hero3_hn6gaj.webp",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.5 },
  },
  {
    imageUrl: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731461/gridex/ab2_gabvo7.webp",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.5 },
  },
];

export default slides;
