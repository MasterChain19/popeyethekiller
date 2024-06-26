function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}import React from 'https://cdn.skypack.dev/react';
import { render } from 'https://cdn.skypack.dev/react-dom';
import gsap from 'https://cdn.skypack.dev/gsap';

const ROOT_NODE = document.querySelector('#app');

const AJ = props => {
  const ajRef = React.useRef(null);
  const eyesRef = React.useRef(null);
  const pupilsRef = React.useRef(null);
  const blinkTween = React.useRef(null);
  const purrRef = React.useRef(
  new Audio('https://assets.codepen.io/605876/kitty-purr.mp3'));


  const purr = () => {
    if (blinkTween.current) blinkTween.current.kill();
    gsap.
    timeline().
    to([eyesRef.current, pupilsRef.current], {
      scaleY: 1,
      duration: 0.05 }).

    set(eyesRef.current, { transformOrigin: '50% 65%' }).
    set(pupilsRef.current, { transformOrigin: '50% 74%' }).
    to([eyesRef.current, pupilsRef.current], {
      scaleY: 0.025,
      duration: 0.14 }).

    to(
    purrRef.current,
    {
      onStart: () => {
        purrRef.current.play();
      },
      volume: 1 },

    '>');

  };

  const unpurr = () => {
    gsap.
    timeline().
    to([eyesRef.current, pupilsRef.current], {
      scaleY: 1,
      duration: 0.05 }).

    to(
    purrRef.current,
    {
      volume: 0,
      onComplete: () => {
        gsap.set(eyesRef.current, { transformOrigin: '50% 50%' });
        gsap.set(pupilsRef.current, { transformOrigin: '50% 65%' });
        purrRef.current.pause();
        purrRef.current.currentTime = 0;
        BLINK();
      } },

    '>');

  };

  // const blink = () => {
  //   const delay = random(2, 5)
  //   to(EYES, {
  //     delay,
  //     duration: 0.1,
  //     repeat: 1,
  //     yoyo: true,
  //     scaleY: 0,
  //     onComplete: () => blink(),
  //   })
  // }
  // blink()

  // let blinkTween
  // const BLINK = () => {
  //   const delay = gsap.utils.random(1, 5)
  //   blinkTween = gsap.to(SELECTORS.EYES, {
  //     delay,
  //     scaleY: 0.1,
  //     repeat: 3,
  //     yoyo: true,
  //     duration: 0.05,
  //     onComplete: () => {
  //       BLINK()
  //     },
  //   })
  // }
  // BLINK()

  React.useEffect(() => {
    // Set up transform origins etc.
    const EYES = ajRef.current.querySelectorAll('.aj__eye-clip');
    const PUPILS = ajRef.current.querySelectorAll('.aj__eye-pupil');
    eyesRef.current = EYES;
    pupilsRef.current = PUPILS;
    gsap.set(eyesRef.current, { transformOrigin: '50% 50%' });
    gsap.set(pupilsRef.current, { transformOrigin: '50% 65%' });
    // Set up audio
    purrRef.current.volume = 0;
    purrRef.current.loop = true;
  }, []);

  // Set up a recursive blink with random delays
  const BLINK = () => {
    if (!eyesRef.current || !pupilsRef.current) return;
    const delay = gsap.utils.random(1, 5);
    blinkTween.current = gsap.to([eyesRef.current, pupilsRef.current], {
      delay,
      scaleY: (index, element) =>
      element.classList.contains('aj__eye-clip') ? 0.05 : 0.4,
      duration: 0.05,
      repeat: 3,
      yoyo: true,
      onComplete: () => {
        BLINK();
      } });

  };

  React.useEffect(() => {
    if (BLINK) BLINK();
  }, []);

  return /*#__PURE__*/(
    React.createElement("svg", _extends({
      className: "aj",
      ref: ajRef,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1000 1000",
      onPointerEnter: purr,
      onPointerLeave: unpurr },
    props), /*#__PURE__*/
    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("clipPath", { id: "left-eye", className: "aj__eye-clip" }, /*#__PURE__*/
    React.createElement("path", {
      d: "M349.597 372.05c-44.769 0-78.974 65.571-70.423 133.518 6.542 37.25 29.739 56.977 70.423 51.316 72.364-20.635 64.56-184.834 0-184.834Z",
      fill: "#C9F180" })), /*#__PURE__*/


    React.createElement("clipPath", { id: "right-eye", className: "aj__eye-clip" }, /*#__PURE__*/
    React.createElement("path", {
      d: "M768.613 465.655c0-61.294-82.495-124.199-142.355-111.185-63.38 13.779-100.249 100.104-98.591 143.971-.164 49.791 33.199 71.933 98.591 74.124 70.926 2.376 142.355-45.615 142.355-106.91Z",
      fill: "#C9F180" }))), /*#__PURE__*/


/*
    React.createElement("path", {
      d: "M697.831 853.021 594.086 956.336l-7.942-29.14 80.626-80.306 30.052 5.88c.342.063.678.147 1.009.251Z",
      fill: "#00E8FC" }), */

    /*React.createElement("path", {
      d: "m706.815 864.342.785 16.019-91.044 90.681-14.486-5.299a12.4 12.4 0 0 1-7.703-8.384l-.283-1.024 103.744-103.316c5.076 1.431 8.722 5.967 8.987 11.323Z",
      fill: "#2DD881" }), */

    /*React.createElement("path", {
      d: "m707.598 880.361 1.742 35.34-65.571 65.297-27.212-9.956 91.041-90.681Z",
      fill: "#C9F180" }), 

    React.createElement("path", {
      d: "m666.769 846.89-80.625 80.307-7.954-29.156 56.725-56.499a12.532 12.532 0 0 1 4.629.026l27.225 5.322Z",
      fill: "#F9C846" }), */

  /*  React.createElement("path", {
      d: "m709.341 915.701 1.162 23.699a12.393 12.393 0 0 1-4.784 10.396l-41.773 32.411a12.354 12.354 0 0 1-11.814 1.847l-8.362-3.057 65.571-65.296Z",
      fill: "#FF595F" }), 

    React.createElement("path", {
      d: "m634.916 841.542-56.726 56.499-3.545-13.011c-1.505-5.518.952-11.34 5.938-14.1l50.607-28.043a12.448 12.448 0 0 1 3.726-1.345Z",
      fill: "#8F41B0" }), */
/*
    React.createElement("path", {
      d: "m693.688 874.984 2.882 58.654a9.692 9.692 0 0 1-3.733 8.124l-32.645 25.329a9.65 9.65 0 0 1-9.234 1.434l-39.114-14.302a9.684 9.684 0 0 1-6.017-6.551l-15.415-56.52a9.69 9.69 0 0 1 4.64-11.015l39.543-21.911a9.658 9.658 0 0 1 6.529-1.027l44.758 8.748a9.696 9.696 0 0 1 7.806 9.037Z",
      fill: "#BD8FD1" }), */
/*
    React.createElement("path", {
      d: "M660.611 933.562c.227 1.296-.02 2.47-.737 3.523-.719 1.053-1.646 1.681-2.782 1.88-.759.132-1.511.015-2.256-.346-.748-.361-1.4-1.018-1.954-1.965l-6.243-10.573-25.002 4.37-2.282 12.062c-.202 1.079-.592 1.919-1.171 2.512a3.745 3.745 0 0 1-2.075 1.103c-1.089.19-2.162-.086-3.22-.83-1.058-.743-1.7-1.763-1.926-3.058a6.107 6.107 0 0 1 .042-2.271l10.838-53.511c.229-1.201.73-2.173 1.503-2.917.773-.745 1.655-1.204 2.649-1.378.995-.174 1.98-.04 2.962.396.978.439 1.78 1.183 2.404 2.234l28.44 46.649c.412.681.682 1.39.81 2.12Zm-18.576-15.38-13.766-23.445-4.986 26.723 18.752-3.278Zm40.413-40.702 6.606 37.753c4.701 22.375-28.483 25.055-31.251 4.93.124-2.07 3.162-2.53 4.456-1.118 2.988 4.608 16.637 10.125 15.92-1.911 0 0-2.905-28.587-6.607-37.754-3.702-9.167 9.776-11.764 10.876-1.9Z",
      fill: "#5E1286" }), */

    React.createElement("path", {
      d: "M251.51 393.432c-64.243-77.283-91.961-125.727-98.592-238.527l142.857 151.574-44.265 86.953Z",
      fill: "#824B2E" }), /*#__PURE__*/

    React.createElement("path", {
      d: "m271.63 183.89-118.712-28.985c28.549 59.473 125.251 165.354 139.839 156.326 14.588-9.028 100.101-109.286 100.101-109.286L271.63 183.89Z",
      fill: "#0A0A0A" }), /*#__PURE__*/

    React.createElement("path", {
      d: "M998.994 424.317C996.978 177.311 970.728 83.385 876.258.48c4.585 191.889 29.678 330.232 29.678 330.232s70.548 74.77 93.058 93.605Z",
      fill: "#824B2E" }), /*#__PURE__*/

    React.createElement("path", {
      d: "m251.005 395.808 41.248-84.577 97.082-110.711 15.594-7.602 14.084-9.503s5.534-7.603 0-7.603c-5.533 0-11.569 1.901-11.569 1.901l-15.091 3.801-15.09 4.752s-2.515.95-3.521 0c-1.006-.95 0-4.752 0-4.752l2.012-3.326s4.527-3.801 7.545-5.227c3.018-1.425 50.805-18.055 62.877-21.381 12.073-3.327 25.654-3.802 40.745-4.277 15.09-.475 31.69 0 32.696 0 1.006 0 1.006-1.901 1.006-1.901s0-.95-1.006-1.9-44.266-.95-45.272-1.426c-1.006-.475-4.527-.95-4.527-.95s-6.036-.95-6.539-1.425c-.503-.475-1.509-3.326 0-5.227 1.509-1.901 4.527-1.425 5.533-2.851 1.006-1.425 8.049-2.851 8.049-2.851l103.118 2.851 38.23 8.078 46.78 15.68 45.775 22.332h14.084l34.709-17.106 40.744-33.26 36.72-55.593S871.73.48 875.754.006c4.024-.475 19.618 28.984 19.618 28.984l19.617 48.466 13.079 89.328 4.024 71.749 4.527 113.086 63.38 71.748v2.851h-2.515l-29.678-26.609 18.612 67.947 13.581 67.472-10.06 9.978-50.805 32.786v2.376l16.6-3.802 12.072-1.9h15.091c7.042 0 0 12.354 0 12.354S787.528 779.682 737.424 809.191c-50.104 29.51-131.712 43.868-217.304 64.621h-25.151c-36.689-3.545-56.642-7.838-91.046-19.956-65.386-31.372-103.661-57.424-174.044-114.987l-36.721-46.09-25.654-39.913c-11.167-19.95-12.575-28.034-12.072-30.41.503-2.376 9.557-12.354 20.624-31.835l17.102-30.885 57.847-163.928Z",
      fill: "#000" }), /*#__PURE__*/

    React.createElement("path", {
      d: "M688.129 628.633c126.074 19.522 181.302 56.199 266.6 145.397-89.699-87.104-145.619-124.126-267.606-143.497l1.006-1.9Zm-34.897 29.934c102.376 19.522 147.223 56.2 216.487 145.397-72.838-87.103-118.247-124.126-217.304-143.496l.817-1.901Zm-4.304 50.367c67.303 14.29 96.785 41.139 142.32 106.434-47.884-63.762-77.736-90.864-142.857-105.043l.537-1.391Z",
      fill: "#fff" }), /*#__PURE__*/

    React.createElement("g", { className: "aj__eye", "clip-path": "url(#right-eye)" }, /*#__PURE__*/
    React.createElement("path", {
      d: "M768.613 465.655c0-61.294-82.495-124.199-142.355-111.185-63.38 13.779-100.249 100.104-98.591 143.971-.164 49.791 33.199 71.933 98.591 74.124 70.926 2.376 142.355-45.615 142.355-106.91Z",
      fill: "#C9F180" }), /*#__PURE__*/

    React.createElement("g", { className: "aj__eye-pupil" }, /*#__PURE__*/
    React.createElement("path", {
      d: "M641.731 353.504c-76.664 10.403-84.003 188.59-21.704 185.266 62.299-3.324 98.368-195.67 21.704-185.266Z",
      fill: "#000" }), /*#__PURE__*/

    React.createElement("ellipse", {
      cx: 652.042,
      cy: 496.652,
      rx: 7.042,
      ry: 6.652,
      fill: "#fff" }))), /*#__PURE__*/



    React.createElement("g", { className: "aj__eye", "clip-path": "url(#left-eye)" }, /*#__PURE__*/
    React.createElement("path", {
      d: "M349.597 372.05c-44.769 0-78.974 65.571-70.423 133.518 6.542 37.25 29.739 56.977 70.423 51.316 72.364-20.635 64.56-184.834 0-184.834Z",
      fill: "#C9F180" }), /*#__PURE__*/

    React.createElement("g", { className: "aj__eye-pupil" }, /*#__PURE__*/
    React.createElement("path", {
      d: "M347.082 372.05c-55.332 5.702-67.403 166.303-22.635 166.304 44.768 0 77.968-172.006 22.635-166.304Z",
      fill: "#000" }), /*#__PURE__*/

    React.createElement("ellipse", {
      cx: 346.579,
      cy: 496.541,
      rx: 7.042,
      ry: 6.652,
      fill: "#fff" }))), /*#__PURE__*/



    React.createElement("path", {
      d: "M266.6 607.252C140.526 626.774 85.297 663.451 0 752.649c89.698-87.104 145.619-124.126 267.606-143.496l-1.006-1.901Zm34.897 29.935C199.121 656.708 154.274 693.386 85.01 782.583c72.837-87.103 118.246-124.126 217.304-143.496l-.817-1.9Zm4.304 50.366c-67.303 14.29-96.786 41.139-142.321 106.434 47.885-63.762 77.737-90.864 142.858-105.043l-.537-1.391Zm120.017 35.064 5.994-63.895-7.015-.587-5.993 63.895c-16.445 20.726-35.627 19.2-86.36-5.319-1.365-.62-1.87 2.363 0 3.95 1.871 1.588 17.556 9.617 35.81 16.604 18.255 6.988 31.691 3.068 31.691 3.068s18.015-9.31 19.696-11.077c1.681-1.768 4.186-1.558 5.511.461 1.326 2.019 14.028 11.898 19.058 13.3 5.03 1.402 26.242 4.225 34.205 3.303 7.963-.922 30.014-5.34 36.927-9.055 6.914-3.714 8.737-9.075.489-5.206-8.249 3.87-73.868 21.481-90.013-9.442Z",
      fill: "#fff" }), /*#__PURE__*/

    React.createElement("path", {
      d: "M466.306 608.241c-12.064-.422-35.187 11.607-40.679 10.464-5.492-1.143-26.902-19.961-33.214-13.049-6.311 6.911 2.793 18.641 2.793 18.641 20.013 28.754 16.424 24.227 28.838 34.768l9.048.317s36.23-25.359 41.536-32.306c5.306-6.947 3.742-18.413-8.322-18.835Z",
      fill: "#FFCDCF" })));



};
render( /*#__PURE__*/React.createElement(AJ, null), ROOT_NODE);