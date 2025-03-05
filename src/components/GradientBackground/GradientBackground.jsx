import React, { useEffect, useRef } from "react";
import "./style.css";

// Vertex Shader (Basic Pass-Through)
const vertexShaderSource = `
  attribute vec2 position;
  varying vec2 vUv;
  
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Fragment Shader with Noise, Waves, and Blending
const fragmentShaderSource = `
  precision mediump float;
  varying vec2 vUv;
  uniform float uTime;

  // Smooth Noise Function for Grainy Effect
  float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    float wave = sin(vUv.x * 4.0 + uTime * 1.1) * 0.1;
    float distortion = noise(vUv * 10.0 + uTime * 0.1) * 0.1;
    float grain = noise(vUv * 6.0 + uTime * 5.0) * 0.05; // High-frequency noise for texture

    // Base gradient colors
    vec3 color1 = vec3(0.98, 0.34, 0.28);  // Poppy
    vec3 color3 = vec3(0.84, 0.87, 0.73);  // Pistachio
    vec3 color2 = vec3(0.94, 0.19, 0.55);  // Tia Pink

    // Gradient blend with waves and distortion
    vec3 blendedColor = mix(color1, color2, vUv.y + wave + distortion);

    // Blending mode (Soft Light)
    vec3 overlayColor = vec3(0.95, 0.85, 0.75); // Warm peach overlay
    blendedColor = mix(blendedColor, overlayColor, 0.3);

    // Apply grainy texture
    blendedColor += grain;

    gl_FragColor = vec4(blendedColor, 1.0);
  }
`;

class Gradient {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl", { antialias: true });

    if (!this.gl) {
      console.error("WebGL not supported");
      return;
    }

    this.initWebGL();
  }

  initWebGL() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);

    this.createShaders();
    this.createBuffer();
    this.startAnimation();
  }

  createShaders() {
    const gl = this.gl;

    // Compile Vertex Shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error("Vertex shader error:", gl.getShaderInfoLog(vertexShader));
      return;
    }

    // Compile Fragment Shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error(
        "Fragment shader error:",
        gl.getShaderInfoLog(fragmentShader)
      );
      return;
    }

    // Create & Link Program
    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error(
        "Shader program error:",
        gl.getProgramInfoLog(this.program)
      );
      return;
    }

    gl.useProgram(this.program);
  }

  createBuffer() {
    const gl = this.gl;

    // Define Full-Screen Quad
    const vertices = new Float32Array([
      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
    ]);

    this.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Get Attribute Location
    const positionLocation = gl.getAttribLocation(this.program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  }

  startAnimation() {
    this.uTime = this.gl.getUniformLocation(this.program, "uTime");
    this.animate(0);
  }

  animate(time) {
    const gl = this.gl;

    gl.uniform1f(this.uTime, time * 0.0004); // Pass time to shader
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    requestAnimationFrame(this.animate.bind(this));
  }
}

const GradientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      new Gradient(canvasRef.current);
    }

    // Adjust on window resize
    const handleResize = () => {
      if (canvasRef.current) {
        new Gradient(canvasRef.current);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="background--custom">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default GradientBackground;
