import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const educationData = [
	{
		degree: "BSc (Hons) in Information Technology & Management",
		institution: "University of Moratuwa",
		year: "2023 - Present",
		details: "Currently pursuing my undergraduate degree, focusing on modern web technologies, UI/UX, and full-stack development.",
	},
	{
		degree: "GCE Advanced Level",
		institution: "Zahira College Mawanella",
		year: "2019 - 2021/22",
		details: "Completed A/Ls with 2AB - 1.6419",
	},
];

const Education = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

	React.useEffect(() => {
		if (inView) {
			controls.start({ opacity: 1, y: 0 });
		}
	}, [controls, inView]);

	return (
		<motion.section
			id="education"
			ref={ref}
			initial={{ opacity: 0, y: 60 }}
			animate={controls}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="w-full py-16 flex flex-col items-center bg-transparent"
		>
			<h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-2 --foreground">
				<FaGraduationCap className="--foreground" />
				Education
			</h2>
			<div className="max-w-2xl w-full flex flex-col gap-8">
				{educationData.map((edu, idx) => (
					<div key={idx} className="rounded-xl p-6 shadow-lg bg-[color:var(--card)]">
						<h3 className="text-xl md:text-2xl font-semibold --foreground">
							{edu.degree}
						</h3><br></br>
						<p className="mb-1 text-white-200">{edu.institution}</p>
						<p className="mb-2 text-white-200">{edu.year}</p>
						<p className="mb-3 text-white-100">{edu.details}</p>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Education;
