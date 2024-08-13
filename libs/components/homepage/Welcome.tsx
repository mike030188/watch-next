import { Box, Stack } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';

const WelcomeWrap = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>Welcome</div>;
	} else {
		return (
			<Stack className={'welcome-wrapper'}>
				<Stack className={'container'}>
					<Box component={'div'}>
						<span className={'left'}>
							Welcome to Luxury Watches of <br />
							Switzerland, <br />
							Official Jeweler around the World.
						</span>
						<p className={'right'}>
							Watches of Switzerland is proud to be part of the worldwide network of Official Jewelers, allowed to sell
							and maintain Luxury Watches.
						</p>
					</Box>
				</Stack>
			</Stack>
		);
	}
};

export default WelcomeWrap;
