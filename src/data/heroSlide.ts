export interface Slide {
  imageUrl: string;
  heading: string;
  initial: { y: number; opacity: number };
  animate: { y: number; opacity: number };
  transition: { duration: number; delay: number };
}

const slides: Slide[] = [
  {
    imageUrl: "/images/hero1.jpg",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.5 },
  },
  {
    imageUrl: "/images/hero2.jpg",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.5 },
  },
  {
    imageUrl: "/images/hero3.jpg",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.5 },
  },
  {
    imageUrl: "/images/hero4.jpg",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.5 },
  },
];

export default slides;
