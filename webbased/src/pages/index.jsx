import React from 'react';
import PageLayout from '../layouts/PageLayout';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import { useSpring, a } from '@react-spring/three';
import { Box, Button, Grid, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

extend({ OrbitControls });

const SpaceShip = () => {
  const [model, setModel] = React.useState();

  React.useEffect(() => {
    new GLTFLoader().load('/scene.gltf', setModel);
  }, []);

  return model ? <primitive object={model.scene} /> : null;
};

const Controls = () => {
  const orbitRef = React.useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate="top"
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

const HomePage = () => {
  const isBrowser = typeof window !== 'undefined';

  return (
    <PageLayout>
      <Box pos="relative" width="100%">
        <Box width="100%">
          {isBrowser && (
            <Canvas
              size="100"
              camera={{ position: [0, 0, 4] }}
              onCreated={({ gl }) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
              }}
            >
              <ambientLight intensity={0.5} />
              <spotLight position={[0, 20, 15]} penumbra={1} castShadow />
              <fog attach="fog" args={['black', 10, 45]} />
              <Controls />
              {/* <Box /> */}
              {/* <Plane /> */}
              <SpaceShip />
            </Canvas>
          )}
        </Box>
        <Box pos="absolute" top="35%">
          <Heading as="h1" fontSize="5xl" color="red" mb="1.5rem">
            Less Worrying,
            <br />{' '}
            <Box as="span" color="primary.700">
              more Shopping.
            </Box>
          </Heading>
          <Text mb="1.5rem" fontSize="xl" color="grey">
            Try new shoes anytime & anywhere.
          </Text>
          <Link href="/products">
            <a>
              <Button
                bg="primary.700"
                minW="300px"
                __hover={{
                  bg: 'primary.700',
                }}
                color="white"
                textTransform="uppercase"
              >
                Explore
              </Button>
            </a>
          </Link>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default HomePage;
