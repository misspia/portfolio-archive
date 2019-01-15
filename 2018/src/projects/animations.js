import {TweenMax, Power2, TimelineLite } from 'gsap'

export const projectAnimateIn = (ref) => {
  const tl = new TimelineMax({
    paused: true,
    ease: Elastic.easeIn
  });
  tl.from(ref, 0.5, { y: -30, autoAlpha: 0 })
  tl.play()
}

export const projectHover = (ref) => {
  
}
