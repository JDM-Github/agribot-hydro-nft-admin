import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ModelViewer = ({ modelPath }: { modelPath: string }) => {
	const { scene } = useGLTF(modelPath);

	return (
		<Canvas camera={{ position: [2, 1, 3], fov: 60 }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[2, 5, 2]} intensity={1} />
			<primitive object={scene} scale={5} position={[0, -1.2, 0]} />
			<OrbitControls />
		</Canvas>
	);
};

export default ModelViewer;
