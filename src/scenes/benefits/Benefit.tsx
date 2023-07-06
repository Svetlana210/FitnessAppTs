import {SelectedPage} from '@/shared/types';
import {motion} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
	hidden: {opacity: 0, scale: 0.9},
	visible: {opacity: 1, scale: 1}
};

type Props = {
	icon: JSX.Element;
	title: string;
	description: string;
	setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
	return (
		<motion.div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center" variants={childVariant}>
			<div className="mb-4 flex justify-center">
				<div className="border-gray- bg-primary-100 rounded-full border-2 border-gray-100">{icon}</div>
			</div>
			<h4 className="font-bold">{title}</h4>
			<p className="my-3">{description}</p>
			<AnchorLink
				className="text-primary-500 hover:text-secondary-500 text-sm font-bold underline"
				onClick={() => setSelectedPage(SelectedPage.ContactUs)}
				href={`#${SelectedPage.ContactUs}`}>
				<p>Learn More</p>
			</AnchorLink>
		</motion.div>
	);
};

export default Benefit;
