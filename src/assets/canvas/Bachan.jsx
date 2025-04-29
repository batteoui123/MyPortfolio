import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      const stars = [];
      const numStars = 200;
      const speed = 0.2;

      class Star {
        constructor() {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.z = p.random(p.width);
          this.pz = this.z;
        }

        update() {
          this.z -= speed;
          if (this.z < 1) {
            this.z = p.width;
          }
        }

        show() {
          const sx = p.map(this.x / this.z, 0, 1, 0, p.width);
          const sy = p.map(this.y / this.z, 0, 2, 0, p.height);
          const size = p.map(this.z, 0, p.width,6, 0);

          p.fill(255);
          p.noStroke();
          p.ellipse(sx, sy, size, size);
        }
      }

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        for (let i = 0; i < numStars; i++) {
          stars.push(new Star());
        }
      };

      p.draw = () => {
          // Change background color here
          p.background(15, 22, 36); // Arrière-plan bleu foncé
        for (let i = 0; i < stars.length; i++) {
          stars[i].update();
          stars[i].show();
        }
      };
    };

    new p5(sketch, canvasRef.current);

    return () => {
      canvasRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div className="canvas-background" ref={canvasRef} />
  );
};

export default SpaceBackground;
