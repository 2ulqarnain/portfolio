import {motion} from "framer-motion";

export default function Sphere3d() {
    return (
        <motion.div
            initial={{scale: 0.4, background: "linear-gradient(135deg,#7c3aed 20%, hsl(270 95.24% 90%) 100%, springgreen 120%, lightblue 150%)", boxShadow:"-10px -10px 20px #777,-20px -20px 5px 10px #ccc, 5px 5px 10px hsl(262 83% 90%), 10px 10px 30px hsl(262 83% 93%)"}}
            animate={{scale: 1}}
            whileHover={{
                background: [
                    "linear-gradient(135deg,#7c3aed 20%, hsl(270 95.24% 90%) 100%, springgreen 120%, lightblue 150%)",
                    "linear-gradient(135deg,#7c3aed -120%, hsl(270 95.24% 90%) -100%, springgreen 0%, lightblue 50%)",
                ],
                boxShadow:[
                    "-10px -10px 20px #777,-20px -20px 5px 10px #ccc, 5px 5px 10px hsl(262 83% 90%), 10px 10px 30px hsl(262 83% 93%)",
                    "-10px -10px 20px #C0ffcf,-20px -20px 5px 10px #ccc, 5px 5px 10px hsl(262 83% 90%), 10px 10px 30px hsl(262 83% 93%)",
                ]
            }}
            transition={{
                duration: 1.5,
                ease: "easeOut",
            }}
            className="size-16 origin-left row-span-full rounded-full from-violet-600 via-purple-400 to-white bg-center bg-cover"
        ></motion.div>
    )
}

// <motion.div
//     initial={{
//         background: "linear-gradient(90deg, #6a0dad, #ff4500, #ff4500, #6a0dad)"
//     }}
//     animate={{
//         background: [
//             "linear-gradient(90deg, #6a0dad, #ff4500, #6a0dad)",
//             "linear-gradient(90deg, #ff4500, #6a0dad, #ff4500)",
//             "linear-gradient(90deg, #6a0dad, #ff4500, #6a0dad)"
//         ]
//     }}
//     transition={{
//         duration: 5,
//         ease: "linear",
//         repeat: Infinity
//     }}
//     style={{
//         width: "100%",
//         height: "100vh",
//         backgroundSize: "200% 200%" // Makes the gradient appear to move
//     }}
// />