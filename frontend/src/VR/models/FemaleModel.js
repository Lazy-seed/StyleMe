import React from 'react'
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'


export function FemaleModel(props) {
  const { nodes, materials } = useGLTF('./models/female/female.gltf')
  return (
    <group {...props} dispose={null}>
      <>
        <group position={[-0.01, 4.96, 0.09]} rotation={[1.16, -0.38, 0.07]}>
          <mesh geometry={nodes.MatShape_7509_Node.geometry} material={materials.Material97646} />
        </group>
        <group position={[0, 4.4, 0.26]} rotation={[1.49, 0, 0.2]}>
          <mesh geometry={nodes.MatShape_7518_Node.geometry} material={materials.Material97646} />
        </group>
        <group position={[0, 4.1, 0.27]} rotation={[1.49, 0.05, 0.06]}>
          <mesh geometry={nodes.MatShape_7527_Node.geometry} material={materials.Material97646} />
        </group>
        <group position={[0, 3.8, 0.29]} rotation={[1.44, -0.27, -0.04]}>
          <mesh geometry={nodes.MatShape_7536_Node.geometry} material={materials.Material97646} />
        </group>

        <group position={[0.06, 3.62, 0.3]} rotation={[1.62, -0.05, -0.19]}>
          <mesh geometry={nodes.MatShape_24131_Node.geometry} material={materials.Material488412} />
        </group>
        <group position={[0.97, 4.56, -0.18]} rotation={[1.44, 0.56, -1.69]}>
          <mesh geometry={nodes.MatShape_24140.geometry} material={materials.Material2285} />
          <mesh geometry={nodes.MatShape_24140_1.geometry} material={materials.Material2285} />
        </group>

        <group position={[0, 5.04, 0.08]} rotation={[1.85, 0.22, -0.1]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_25942_Node.geometry} material={materials.Material658738} />
        </group>
        <group position={[0.01, 5.08, 0.07]} rotation={[1.76, 0.28, -0.09]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_26794_Node.geometry} material={materials.Material665021} />
        </group>
        <group position={[1.69, 3.64, -0.09]} rotation={[-1.66, -0.82, -0.61]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_27709_Node.geometry} material={materials.Material667126} />
        </group>
        <group position={[-1.69, 3.61, -0.13]} rotation={[-1.81, 0.79, 0.76]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_27718_Node.geometry} material={materials.Material667126} />
        </group>
        <group position={[-0.04, 4.67, 0.21]} rotation={[0.58, 1.24, 0.76]}>
          <mesh geometry={nodes.MatShape_27727.geometry} material={materials.Material2291} />
          <mesh geometry={nodes.MatShape_27727_1.geometry} material={materials.Material2291} />
        </group>
        <group position={[-1.67, 3.64, -0.12]} rotation={[1.22, -0.65, 2.34]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_28236_Node.geometry} material={materials.Material704051} />
        </group>
        <group position={[-1.74, 3.56, -0.09]} rotation={[1.35, -0.58, 2.39]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_28245_Node.geometry} material={materials.Material704051} />
        </group>
        <group position={[1.73, 3.59, -0.1]} rotation={[1.2, 0.66, -2.13]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_28254_Node.geometry} material={materials.Material704051} />
        </group>
        <group position={[1.66, 3.68, -0.12]} rotation={[1.23, 0.72, -2.21]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_28263_Node.geometry} material={materials.Material704051} />
        </group>
        <group position={[1.69, 3.64, -0.1]} rotation={[1.29, 0.67, -2.33]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_28537_Node.geometry} material={materials.Material655120} />
        </group>
        <group position={[-1.69, 3.64, -0.12]} rotation={[1.35, -0.72, 2.41]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_28546_Node.geometry} material={materials.Material655120} />
        </group></>


      {/* shirt */}
      <mesh geometry={nodes['11_Node'].geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes['6_Node'].geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes['14_Node'].geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.MatShape_51642_Node.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.MatShape_51645_Node.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.MatShape_51648_Node.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.MatShape_51651_Node.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Pattern_617410_Node.geometry} material={materials.shirt_FRONT_2502} />
      <mesh geometry={nodes['5_Node'].geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes['9_Node'].geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Pattern_617411_Node.geometry} material={materials.shirt_FRONT_2502} />


      {/* pant */}
      <mesh geometry={nodes['5_Node_1'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />
      <mesh geometry={nodes['14_Node_1'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />
      <mesh geometry={nodes['4_Node'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />
      <mesh geometry={nodes['18_Node'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />
      <mesh geometry={nodes['7_Node'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />
      <mesh geometry={nodes['13_Node'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />
      <mesh geometry={nodes['19_Node'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_8184638_Node.geometry} material={materials.belt_FRONT_2466} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_8184641_Node.geometry} material={materials.belt_FRONT_2466} material-color={props.pant} />
      <mesh geometry={nodes['22_Node'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />
      <mesh geometry={nodes['23_Node'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />
      <mesh geometry={nodes['17_Node'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_9602697_Node.geometry} material={materials.belt_FRONT_2466} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_9602698_Node.geometry} material={materials.belt_FRONT_2466} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_9602699_Node.geometry} material={materials.belt_FRONT_2466} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_9602700_Node.geometry} material={materials.belt_FRONT_2466} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_9602701_Node.geometry} material={materials.belt_FRONT_2466} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_9602702_Node.geometry} material={materials.belt_FRONT_2466} material-color={props.pant} />
      <mesh geometry={nodes['8_Node'].geometry} material={materials.shirt_FRONT_2502} material-color={props.pant} />

      {/* collor */}
      {props.collor === '1' && <>
        <mesh geometry={nodes.MatShape_51723_Node.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Collar_Stand_Node.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.MatShape_51729_Node.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Collar_Node.geometry} material={materials[props.shirt]} />
      </>}

      {props.collor === '2' && <>
        <mesh geometry={nodes.Collar_Node_1.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Collar_Stand_Node_1.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.MatShape_51741_Node.geometry} material={materials[props.shirt]} /> </>}

      {props.collor === '3' && <>
        <mesh geometry={nodes.Collar_Stand_Node_2.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.MatShape_51747_Node.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Collar_Node_2.geometry} material={materials[props.shirt]} />
      </>}




      {/* cuff */}
      {props.cuff === '1' && <>
        <mesh geometry={nodes.Cuffs_1_Node.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Cuffs_Node.geometry} material={materials[props.shirt]} />
      </>}

      {props.cuff === '2' && <>
        <mesh geometry={nodes.Cuffs_Node_1.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Cuffs_Node_2.geometry} material={materials[props.shirt]} />
      </>}

      {props.cuff === '3' && <>
        <mesh geometry={nodes.Cuffs_Node_3.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Cuffs_Node_4.geometry} material={materials[props.shirt]} />
      </>}







      <group position={[0, 3.66, -0.03]}>
        <group position={[0, -0.04, 0]}>
          <group position={[-0.31, -0.3, -0.07]} rotation={[3.13, 0, -1.56]}>
            <group position={[-0.77, 0, -0.02]} rotation={[0, 0.01, 0]}>
              <group position={[-0.68, 0.02, 0.05]} rotation={[0, 0.05, -0.02]}>
                <group position={[-1.37, -0.01, 0]} rotation={[0.04, -0.56, 0.11]}>
                  <group position={[-0.02, 0, 0.07]} rotation={[0.13, -0.8, -0.3]}>
                    <mesh geometry={nodes.shoes_r_Shape.geometry} material={materials.dummySG1SG1} />
                    <mesh geometry={nodes.shoes_r_Shape_1.geometry} material={materials.W_Shoes_skinSG1SG1SG1} />
                    <mesh geometry={nodes.shoes_r_Shape_2.geometry} material={materials.HEELSG1SG1} />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[0.31, -0.3, -0.07]} rotation={[-0.01, 0, -1.56]}>
            <group position={[0.77, 0, 0.02]} rotation={[0, 0.01, 0]}>
              <group position={[0.68, -0.02, -0.05]} rotation={[0, 0.05, -0.02]}>
                <group position={[1.37, 0.01, 0]} rotation={[0.04, -0.56, 0.11]}>
                  <group position={[0.02, 0, -0.07]} rotation={[0.13, -0.8, -0.3]}>
                    <mesh geometry={nodes.shoes_l_Shape.geometry} material={materials.dummySG1SG1} />
                    <mesh geometry={nodes.shoes_l_Shape_1.geometry} material={materials.W_Shoes_skinSG1SG1SG1} />
                    <mesh geometry={nodes.shoes_l_Shape_2.geometry} material={materials.HEELSG1SG1} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group position={[0, 0.02, -0.03]} rotation={[-0.02, 0, Math.PI / 2]}>
          <group position={[0.23, 0, 0.04]} rotation={[0, 0.01, 0]}>
            <group position={[0.28, 0, -0.01]} rotation={[0, 0.08, 0]}>
              <group position={[0.49, 0, 0]} rotation={[0, 0.06, 0]}>
                <group position={[0.53, 0, 0.05]} rotation={[0, -0.36, 0]}>
                  <group position={[0.17, 0, 0]} rotation={[0, 0.01, 0]}>
                    <group position={[0.17, 0, -0.02]} rotation={[0, 0.18, 0]}>
                      <mesh geometry={nodes.hair_Shape_Node.geometry} material={materials.Feifei_hair_opencollada_hair2} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh geometry={nodes.body_1.geometry} material={materials['Mara:face2']} />
      <mesh geometry={nodes.body_2.geometry} material={materials['Mara:body3']} />
      <mesh geometry={nodes.body_3.geometry} material={materials['Mara:arm2']} />
      <mesh geometry={nodes.body_4.geometry} material={materials['Mara:leg2']} />
      <mesh geometry={nodes.eye_L_Node.geometry} material={materials['Mara:eye2']} />
      <mesh geometry={nodes.eye_R_Node.geometry} material={materials['Mara:eye2']} />
      <mesh geometry={nodes.eyelash_L_Node.geometry} material={materials['Mara:skin_14:skin_13:skin_11:skin_10:pose:pose:eyelash1']} />
      <mesh geometry={nodes.eyelash_R_Node.geometry} material={materials['Mara:skin_14:skin_13:skin_11:skin_10:pose:pose:eyelash1']} />
      <mesh geometry={nodes.tooth__Node.geometry} material={materials['Mara:tooth2']} />
    </group>
  )
}