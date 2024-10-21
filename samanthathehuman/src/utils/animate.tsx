import gsap from 'gsap';

export const zoomElements = (elements: NodeListOf<HTMLElement>) => { 
  gsap.set(elements, { transformPerspective: 500 });
  gsap.fromTo(elements, {
    z: -1000,
    opacity: 0,
  }, {
    delay: 0.5,
    duration: 0.3,
    opacity: 1,
    z: 10,
    ease: "slow(0.7,0.7,false)",
    stagger: {
      from: "random", 
      amount: 1,
    }
  });
};
