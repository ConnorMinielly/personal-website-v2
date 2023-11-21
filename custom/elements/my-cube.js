import { html } from "../utils/template-tag.js";

const cubeTemplate = html`
  <style>
    .cube {
      margin: 50px;
      width: 50px;
      height: 50px;
      position: relative;
      transform-style: preserve-3d;
      transform: translateZ(-25px) rotateX(45deg) rotateY(-45deg);
      animation: rotate 4s linear normal infinite;

      .cube-panel {
        position: absolute;
        width: 50px;
        height: 50px;
        border: 1px palevioletred solid;
      }

      #front {
        transform: rotateY(0deg) translateZ(25px);
      }

      #back {
        transform: rotateY(180deg) translateZ(25px);
      }

      #right {
        transform: rotateY(90deg) translateZ(25px);
      }

      #left {
        transform: rotateY(-90deg) translateZ(25px);
      }

      #top {
        transform: rotateX(90deg) translateZ(25px);
      }

      #bottom {
        transform: rotateX(-90deg) translateZ(25px);
      }
    }

    @keyframes rotate {
      from {
        transform: rotateX(40deg) rotateY(-45deg);
      }
      to {
        transform: rotateX(40deg) rotateY(45deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .cube {
        animation: none;
      }
    }
  </style>
  <div class="cube">
    <div class="cube-panel" id="front"></div>
    <div class="cube-panel" id="back"></div>
    <div class="cube-panel" id="right"></div>
    <div class="cube-panel" id="left"></div>
    <div class="cube-panel" id="top"></div>
    <div class="cube-panel" id="bottom"></div>
  </div>
`;

class Cube extends HTMLElement {
  constructor() {
    super();
    const cubeClone = cubeTemplate.cloneNode(true);
    this.appendChild(cubeClone);
  }
}

customElements.define("my-cube", Cube);