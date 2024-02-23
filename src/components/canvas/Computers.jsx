import React from 'react'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei';
import { Preload } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';
const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} intensity={1} />
      <primitive object={computer.scene} scale={0.6} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas