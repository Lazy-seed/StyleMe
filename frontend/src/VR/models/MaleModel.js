import React from 'react'
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

// export default function MaleModel(props) {
//   const { nodes, materials } = useGLTF('./models/male/male.gltf')

//   return (
//     <group {...props} dispose={null}>


//       {/* pant */}
//       <mesh geometry={nodes.Pattern_451086_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-T05_Node'].geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-01_Node'].geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-02_Node'].geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-04_Node'].geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-07_Node'].geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.MatShape_45546_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-03_Node'].geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-05_Node'].geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-06_Node'].geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-T07_Node'].geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-T08_Node'].geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.Pattern_451087_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.Pattern_641845_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.Pattern_641846_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.ZipperPattern_983114_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.ZipperPattern_983127_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.Pattern_55755_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.Pattern_55756_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.Pattern_55757_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.Pattern_55758_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes.Pattern_55759_Node.geometry} material={materials[props.pant]} />
//       <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-08_Node'].geometry} material={materials[props.pant]} />

//       {/* shirt */}
//       <mesh geometry={nodes.Sleeves_Node.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Sleeves_Panel_Node.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Sleeves_Panel_Node_1.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Sleeves_Placket_Node.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Sleeves_Node_1.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Sleeves_Placket_Node_1.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Body_Front_Node.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Body_Front_Node_1.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Body_Back_Node.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Body_Back_Yoke_Node.geometry} material={materials[props.shirt]} />

//       {props.collor === '1' && <>
//       <mesh geometry={nodes.Collar_Stand_Node.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.MatShape_45630_Node.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Collar_Node.geometry} material={materials[props.shirt]} /> 
//       <group position={[0, 5.21, 0.06]} rotation={[1.84, 0.17, -0.08]} scale={[0.5, 1, 0.5]}>
//         <mesh geometry={nodes.MatShape_31955_Node.geometry} material={materials.Material658738} material-color={'black'} />
//       </group>
//       <group position={[0, 5.22, 0.04]} rotation={[1.85, 0.31, -0.08]} scale={[0.5, 1, 0.5]}>
//         <mesh geometry={nodes.MatShape_32807_Node.geometry} material={materials.Material665021}  material-color={'black'}/>
//       </group>
//       </>}

//       {props.collor === '2' && <>
//       <mesh geometry={nodes.Collar_Node_1.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Collar_Stand_Node_1.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.MatShape_45642_Node.geometry} material={materials[props.shirt]} /> 
//       </>}

//       {props.collor === '3' && <>
//       <mesh geometry={nodes.Collar_Stand_Node_2.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.MatShape_45648_Node.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Collar_Node_2.geometry} material={materials[props.shirt]} /> </>}

//       {props.cuff === '1' && <>
//       <mesh geometry={nodes.Cuffs_1_Node.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Cuffs_Node.geometry} material={materials[props.shirt]} />
//       <group position={[-1.8, 3.63, -0.2]} rotation={[-1.86, 0.4, 0.81]} scale={[0.5, 1, 0.5]}>
//       <mesh geometry={nodes.MatShape_33731_Node.geometry} material={materials.Material667126} material-color={'green'}/>
//     </group>
//     <group position={[1.81, 3.65, -0.2]} rotation={[-1.84, -0.69, -0.78]} scale={[0.5, 1, 0.5]}>
//         <mesh geometry={nodes.MatShape_33722_Node.geometry} material={materials.Material667126}material-color={'red'} />
//       </group>

//        </>}

//       {props.cuff === '2' && <>
//       <mesh geometry={nodes.Cuffs_Node_1.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Cuffs_Node_2.geometry} material={materials[props.shirt]} /> 

//       <group position={[1.81, 3.65, -0.17]} rotation={[1.29, 0.67, -2.33]} scale={[0.5, 1, 0.5]}>
//         <mesh geometry={nodes.MatShape_34540_Node.geometry} material={materials.Material655120} material-color={'green'}/>
//       </group>
//       <group position={[-1.78, 3.65, -0.18]} rotation={[1.22, -0.65, 2.34]} scale={[0.5, 1, 0.5]}>
//         <mesh geometry={nodes.MatShape_34239_Node.geometry} material={materials.Material704051} material-color={'green'}/>
//       </group>
//       </>}

//       {props.cuff === '3' && <>
//       <mesh geometry={nodes.Cuffs_Node_3.geometry} material={materials[props.shirt]} />
//       <mesh geometry={nodes.Cuffs_Node_4.geometry} material={materials[props.shirt]} /> <group position={[-1.8, 3.63, -0.2]} rotation={[-1.86, 0.4, 0.81]} scale={[0.5, 1, 0.5]}>
//       <mesh geometry={nodes.MatShape_33731_Node.geometry} material={materials.Material667126} material-color={'blue'}/>
//     </group>
//     <group position={[1.81, 3.65, -0.2]} rotation={[-1.84, -0.69, -0.78]} scale={[0.5, 1, 0.5]}>
//         <mesh geometry={nodes.MatShape_33722_Node.geometry} material={materials.Material667126}material-color={'blue'} />
//       </group></>
//       }

//       <group position={[0, 3.58, -0.14]}>
//         <group position={[0, -0.07, -0.01]}>
//           <group position={[-0.33, -0.31, -0.03]} rotation={[3.11, 0, -1.56]}>
//             <group position={[-0.71, 0.02, 0.02]}>
//               <group position={[-0.71, -0.01, 0.05]} rotation={[0, 0.11, -0.02]}>
//                 <group position={[-1.49, -0.02, -0.07]} rotation={[-0.29, -1.2, -0.05]}>
//                   <group position={[-0.01, 0, 0.13]}>
//                     <mesh geometry={nodes.shoes_r_Shape.geometry} material={materials.M_Thomas_Sneaker_A_03_Male_Sneaker_02_opencollada_Female_Sneaker_02_opencollada_man_sports_shoes_shoesFBXASC045fx2SG1SG1SG1SG1S1} />
//                     <mesh geometry={nodes.shoes_r_Shape_1.geometry} material={materials.M_Thomas_Sneaker_A_03_Male_Sneaker_02_opencollada_Female_Sneaker_02_opencollada_dummy1FBXASC045fx2SG1SG1SG1SG1SG1SG1SG1} />
//                   </group>
//                 </group>
//               </group>
//             </group>
//           </group>
//           <group position={[0.33, -0.31, -0.03]} rotation={[-0.03, 0, -1.56]}>
//             <group position={[0.71, -0.02, -0.02]}>
//               <group position={[0.71, 0.01, -0.05]} rotation={[0, 0.11, -0.02]}>
//                 <group position={[1.49, 0.02, 0.07]} rotation={[-0.29, -1.2, -0.05]}>
//                   <group position={[0.01, 0, -0.13]}>
//                     <mesh geometry={nodes.shoes_l_Shape.geometry} material={materials.M_Thomas_Sneaker_A_03_Male_Sneaker_02_opencollada_Female_Sneaker_02_opencollada_man_sports_shoes_shoesFBXASC045fx2SG1SG1SG1SG1S1} />
//                     <mesh geometry={nodes.shoes_l_Shape_1.geometry} material={materials.M_Thomas_Sneaker_A_03_Male_Sneaker_02_opencollada_Female_Sneaker_02_opencollada_dummy1FBXASC045fx2SG1SG1SG1SG1SG1SG1SG1} />
//                   </group>
//                 </group>
//               </group>
//             </group>
//           </group>
//         </group>
//         <group position={[0, 0.06, -0.01]} rotation={[0.05, 0, Math.PI / 2]}>
//           <group position={[0.29, 0.01, 0.06]} rotation={[0, 0.01, 0]}>
//             <group position={[0.4, -0.01, -0.01]} rotation={[0, 0.08, 0]}>
//               <group position={[0.59, 0, -0.02]} rotation={[0, 0.27, 0]}>
//                 <group position={[0.43, 0, 0.04]} rotation={[0, -0.48, 0]}>
//                   <group position={[0.19, 0, 0.02]} rotation={[0, -0.03, 0]}>
//                     <group position={[0.22, 0, -0.02]} rotation={[0, 0.23, 0]}>
//                       <mesh geometry={nodes.hair_Shape_Node.geometry} material={materials.defaultMat1} />
//                     </group>
//                   </group>
//                 </group>
//               </group>
//             </group>
//           </group>
//         </group>
//       </group>

//       <mesh geometry={nodes.body_1.geometry} material={materials.face} />
//       <mesh geometry={nodes.body_2.geometry} material={materials.body2} />
//       <mesh geometry={nodes.body_3.geometry} material={materials.arm} />
//       <mesh geometry={nodes.body_4.geometry} material={materials.leg} />
//       <mesh geometry={nodes.eye_L_Node.geometry} material={materials.eye} />
//       <mesh geometry={nodes.eye_R_Node.geometry} material={materials.eye} />
//       <mesh geometry={nodes.eyelash_L_Node.geometry} material={materials.eyelash} />
//       <mesh geometry={nodes.eyelash_R_Node.geometry} material={materials.eyelash} />
//       <mesh geometry={nodes.tooth__Node.geometry} material={materials.toothSG1} />
//     </group>
//   )
// }


export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/male/male.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.1, 3.56, 0.31]} rotation={[-2.98, 1.21, -1.47]}>
        <mesh geometry={nodes.MatShape_17102.geometry} material={materials.Material2285} />
        <mesh geometry={nodes.MatShape_17102_1.geometry} material={materials.Material2285} />
      </group>
      <group position={[1.68, 3.8, -0.25]} rotation={[-0.76, 0.44, -0.99]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_23742_Node.geometry} material={materials.Material693271} />
      </group>
      <group position={[-1.68, 3.78, -0.25]} rotation={[1.48, -0.35, 2.4]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_23751_Node.geometry} material={materials.Material693271} />
      </group>
      <group position={[0, 5.05, 0.08]} rotation={[1.05, -0.88, -0.03]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_28123_Node.geometry} material={materials.Material647667} />
      </group>
      <group position={[0, 4.73, 0.18]} rotation={[1.25, 0.16, -0.01]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_28132_Node.geometry} material={materials.Material647667} />
      </group>
      <group position={[-0.01, 4.06, 0.3]} rotation={[-1.84, -0.79, 3.11]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_28141_Node.geometry} material={materials.Material647667} />
      </group>
      <group position={[0, 4.39, 0.24]} rotation={[1.31, -0.17, 0.02]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_28150_Node.geometry} material={materials.Material647667} />
      </group>
      <group position={[-0.01, 3.38, 0.35]} rotation={[1.45, -0.49, -0.23]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_28159_Node.geometry} material={materials.Material647667} />
      </group>
      <group position={[-0.01, 3.72, 0.34]} rotation={[1.4, -0.18, 0.07]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_28168_Node.geometry} material={materials.Material647667} />
      </group>


      <group position={[0.02, 3.49, 0.29]} rotation={[0, -0.17, 0.02]}>
        <group position={[0, 0, 0.01]}>
          <mesh geometry={nodes.ZipperPuller983177_Node.geometry} material={materials.Material983369}  />
        </group>
        <mesh geometry={nodes.ZipperSlider983156_Node.geometry} material={materials.Material983162}  />
      </group>
      <group position={[0.02, 3.5, 0.29]} rotation={[0, -0.17, 0.02]}>
        <mesh geometry={nodes.ZipperStopper983202_Node.geometry} material={materials.Material983371}  />
      </group>
      <group position={[0.02, 3.5, 0.29]} rotation={[0, -0.26, 0.02]}>
        <mesh geometry={nodes.ZipperStopper983214_Node.geometry} material={materials.Material983371}  />
      </group>
      <group position={[0.04, 3.1, 0.3]} rotation={[0.07, -0.66, 0.11]}>
        <mesh geometry={nodes.ZipperStopper983235_Node.geometry} material={materials.Material983373} />
      </group>
      <group position={[0.04, 3.1, 0.3]} rotation={[0.06, -0.58, 0.11]}>
        <mesh geometry={nodes.ZipperStopper983248_Node.geometry} material={materials.Material983373}  />
      </group>

      <mesh geometry={nodes.Pattern_451086_Node.geometry} material={materials['BPTS-PN17153_FRONT_2606']} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-T05_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-01_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-02_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-04_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-07_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes.MatShape_8583757_Node.geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-00_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-03_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-05_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-06_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-09_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-T07_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-T08_Node'].geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_451087_Node.geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_641845_Node.geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes.Pattern_641846_Node.geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes.ZipperPattern_983114_Node.geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />
      <mesh geometry={nodes.ZipperPattern_983127_Node.geometry} material={materials.Cotton_Oxford_FRONT_2471} material-color={props.pant} />

      {/* shirt */}
      <mesh geometry={nodes.Pattern_55755_Node.geometry} material={materials[props.shirt]}  />
      <mesh geometry={nodes.Pattern_55756_Node.geometry} material={materials[props.shirt]}  />
      <mesh geometry={nodes.Pattern_55757_Node.geometry} material={materials[props.shirt]}  />
      <mesh geometry={nodes.Pattern_55758_Node.geometry} material={materials[props.shirt]}  />
      <mesh geometry={nodes.Pattern_55759_Node.geometry} material={materials[props.shirt]}  />
      <mesh geometry={nodes['MCTRS0222-ONE-DENIM-STRAIGHT-08_Node'].geometry} material={materials[props.shirt]}  />
      <mesh geometry={nodes.Sleeves_Node.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Sleeves_Panel_Node.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Sleeves_Panel_Node_1.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Sleeves_Placket_Node.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Sleeves_Node_1.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Sleeves_Placket_Node_1.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Body_Front_Node.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Body_Front_Node_1.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Body_Back_Node.geometry} material={materials[props.shirt]} />
      <mesh geometry={nodes.Body_Back_Yoke_Node.geometry} material={materials[props.shirt]} />

      {/* collor */}
      {props.collor === '1' && <>
        <mesh geometry={nodes.Collar_Stand_Node.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.MatShape_8583847_Node.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Collar_Node.geometry} material={materials[props.shirt]} />
        <group position={[0, 5.22, 0.03]} rotation={[1.88, 0.2, -0.09]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_4647059_Node.geometry} material={materials.Material1389666} />
      </group> </>}

      {props.collor === '2' && <>
        <mesh geometry={nodes.Collar_Node_1.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Collar_Stand_Node_1.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.MatShape_8583859_Node.geometry} material={materials[props.shirt]} />
        <group position={[0, 5.21, 0.06]} rotation={[1.84, 0.17, -0.08]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_4725191_Node.geometry} material={materials.Material658738} />
      </group></>}

      {props.collor === '3' && <>
        <mesh geometry={nodes.Collar_Stand_Node_2.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.MatShape_8583865_Node.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Collar_Node_2.geometry} material={materials[props.shirt]} />
        <group position={[0, 5.22, 0.04]} rotation={[1.85, 0.31, -0.08]} scale={[0.5, 1, 0.5]}>
        <mesh geometry={nodes.MatShape_6506043_Node.geometry} material={materials.Material665021} />
      </group></>}

      {/* cuff */}
      {props.cuff === '1' && <>
        <mesh geometry={nodes.Cuffs_1_Node.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Cuffs_Node.geometry} material={materials[props.shirt]} />
        <group position={[1.81, 3.65, -0.2]} rotation={[-1.84, -0.69, -0.78]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_8442239_Node.geometry} material={materials.Material667126} />
        </group>
        <group position={[-1.8, 3.63, -0.2]} rotation={[-1.86, 0.4, 0.81]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_8442248_Node.geometry} material={materials.Material667126} />
        </group></>}

      {props.cuff === '2' && <>
        <mesh geometry={nodes.Cuffs_Node_1.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Cuffs_Node_2.geometry} material={materials[props.shirt]} />
        <group position={[-1.78, 3.65, -0.18]} rotation={[1.22, -0.65, 2.34]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_8523278_Node.geometry} material={materials.Material704051} />
        </group>
        <group position={[-1.85, 3.56, -0.16]} rotation={[1.35, -0.58, 2.39]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_8523287_Node.geometry} material={materials.Material704051} />
        </group>
        <group position={[1.85, 3.56, -0.17]} rotation={[1.22, 0.62, -2.17]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_8523296_Node.geometry} material={materials.Material704051} />
        </group>
        <group position={[1.78, 3.65, -0.19]} rotation={[1.24, 0.68, -2.25]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_8523305_Node.geometry} material={materials.Material704051} />
        </group></>}

      {props.cuff === '3' && <>
        <mesh geometry={nodes.Cuffs_Node_3.geometry} material={materials[props.shirt]} />
        <mesh geometry={nodes.Cuffs_Node_4.geometry} material={materials[props.shirt]} />
        <group position={[1.81, 3.65, -0.17]} rotation={[1.29, 0.67, -2.33]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_8594348_Node.geometry} material={materials.Material655120} />
        </group>
        <group position={[-1.8, 3.63, -0.17]} rotation={[1.25, -0.68, 2.39]} scale={[0.5, 1, 0.5]}>
          <mesh geometry={nodes.MatShape_8594357_Node.geometry} material={materials.Material655120} />
        </group></>}


      <group position={[0, 3.58, -0.14]}>
        <group position={[0, -0.07, -0.01]}>
          <group position={[-0.33, -0.31, -0.03]} rotation={[3.11, 0, -1.56]}>
            <group position={[-0.71, 0.02, 0.02]}>
              <group position={[-0.71, -0.01, 0.05]} rotation={[0, 0.11, -0.02]}>
                <group position={[-1.49, -0.02, -0.07]} rotation={[-0.29, -1.2, -0.05]}>
                  <group position={[-0.01, 0, 0.13]}>
                    <mesh geometry={nodes.shoes_r_Shape.geometry} material={materials.M_Thomas_Sneaker_A_03_Male_Sneaker_02_opencollada_Female_Sneaker_02_opencollada_man_sports_shoes_shoesFBXASC045fx2SG1SG1SG1SG1S1} />
                    <mesh geometry={nodes.shoes_r_Shape_1.geometry} material={materials.M_Thomas_Sneaker_A_03_Male_Sneaker_02_opencollada_Female_Sneaker_02_opencollada_dummy1FBXASC045fx2SG1SG1SG1SG1SG1SG1SG1} />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[0.33, -0.31, -0.03]} rotation={[-0.03, 0, -1.56]}>
            <group position={[0.71, -0.02, -0.02]}>
              <group position={[0.71, 0.01, -0.05]} rotation={[0, 0.11, -0.02]}>
                <group position={[1.49, 0.02, 0.07]} rotation={[-0.29, -1.2, -0.05]}>
                  <group position={[0.01, 0, -0.13]}>
                    <mesh geometry={nodes.shoes_l_Shape.geometry} material={materials.M_Thomas_Sneaker_A_03_Male_Sneaker_02_opencollada_Female_Sneaker_02_opencollada_man_sports_shoes_shoesFBXASC045fx2SG1SG1SG1SG1S1} />
                    <mesh geometry={nodes.shoes_l_Shape_1.geometry} material={materials.M_Thomas_Sneaker_A_03_Male_Sneaker_02_opencollada_Female_Sneaker_02_opencollada_dummy1FBXASC045fx2SG1SG1SG1SG1SG1SG1SG1} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group position={[0, 0.06, -0.01]} rotation={[0.05, 0, Math.PI / 2]}>
          <group position={[0.29, 0.01, 0.06]} rotation={[0, 0.01, 0]}>
            <group position={[0.4, -0.01, -0.01]} rotation={[0, 0.08, 0]}>
              <group position={[0.59, 0, -0.02]} rotation={[0, 0.27, 0]}>
                <group position={[0.43, 0, 0.04]} rotation={[0, -0.48, 0]}>
                  <group position={[0.19, 0, 0.02]} rotation={[0, -0.03, 0]}>
                    <group position={[0.22, 0, -0.02]} rotation={[0, 0.23, 0]}>
                      <mesh geometry={nodes.hair_Shape_Node.geometry} material={materials.defaultMat1} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh geometry={nodes.body_1.geometry} material={materials.face} />
      <mesh geometry={nodes.body_2.geometry} material={materials.body2} />
      <mesh geometry={nodes.body_3.geometry} material={materials.arm} />
      <mesh geometry={nodes.body_4.geometry} material={materials.leg} />
      <mesh geometry={nodes.eye_L_Node.geometry} material={materials.eye} />
      <mesh geometry={nodes.eye_R_Node.geometry} material={materials.eye} />
      <mesh geometry={nodes.eyelash_L_Node.geometry} material={materials.eyelash} />
      <mesh geometry={nodes.eyelash_R_Node.geometry} material={materials.eyelash} />
      <mesh geometry={nodes.tooth__Node.geometry} material={materials.toothSG1} />
    </group>
  )
}







