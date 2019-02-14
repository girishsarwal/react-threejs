import React, { Component } from "react";
import * as THREE from "three";

class ThreeComponent extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentWillReceiveProps() {
    this.material.uniforms.bodyColor.value = new THREE.Color(this.props.color);
  }
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    this.vs = document.getElementById("vertexShader").textContent;
    this.fs = document.getElementById("fragmentShader").textContent;
    this.uniforms = {
      bodyColor: { type: "c", value: new THREE.Color(1.0, 0.0, 1.0) }
    };
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.vs,
      fragmentShader: this.fs
    });

    const cube = new THREE.Mesh(geometry, material);

    camera.position.z = 4;
    scene.add(cube);
    renderer.setClearColor("#000000");
    renderer.setSize(width, height);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.cube = cube;

    this.mount.appendChild(this.renderer.domElement);

    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div>
        <div
          style={{ width: "600px", height: "600px", padding: "10px" }}
          ref={mount => {
            this.mount = mount;
          }}
        />
      </div>
    );
  }
}

export default ThreeComponent;
