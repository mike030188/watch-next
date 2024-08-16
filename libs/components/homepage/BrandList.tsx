import { Box, Stack } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import Link from 'next/link';

const BrandWrap = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>Brand List</div>;
	} else {
		return (
			<Stack className={'brand-wrapper'}>
				<Link href="https://www.rolex.com/about-rolex" legacyBehavior>
					<a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
						<img src="/img/banner/brands/rolex.webp" alt="Rolex" />
					</a>
				</Link>
				<Link href="https://www.patek.com/en/company/the-manufacture#patek-philippe-key-points" legacyBehavior>
					<a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
						<img src="/img/banner/brands/patekphilippe.webp" alt="Patek_Philippe" />
					</a>
				</Link>
				<Link href="https://www.cartier.com/en-us/innovation-and-know-how.html" legacyBehavior>
					<a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
						<img src="/img/banner/brands/cartier.webp" alt="Cartier" />
					</a>
				</Link>
				<Link href="https://seikoluxe.com/history/" legacyBehavior>
					<a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
						<img src="/img/banner/brands/seiko.webp" alt="Seiko" />
					</a>
				</Link>
				<Link href="https://talent.tudorwatch.com/" legacyBehavior>
					<a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
						<img src="/img/banner/brands/tudor.webp" alt="Tudor" />
					</a>
				</Link>
				<Link href="https://www.omegawatches.com/suggestions" legacyBehavior>
					<a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
						<img src="/img/banner/brands/omega.webp" alt="Omega" />
					</a>
				</Link>
				<Link href="https://www.breitling.com/kr-en/about/" legacyBehavior>
					<a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
						<img src="/img/banner/brands/breitling.webp" alt="Breitling" />
					</a>
				</Link>
				<Link href="https://www.tagheuer.com/kr/en/our-story/history.html" legacyBehavior>
					<a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
						<img src="/img/banner/brands/tagheuer.webp" alt="Tag-heuer" />
					</a>
				</Link>
				<Link href="https://www.hublot.com/en-int" legacyBehavior>
					<a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
						<img src="/img/banner/brands/hublot.webp" alt="Hublot" />
					</a>
				</Link>
			</Stack>
		);
	}
};

export default BrandWrap;
