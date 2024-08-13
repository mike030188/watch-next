import { Box, Stack } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';

const AnytimeWrap = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>Welcome</div>;
	} else {
		return (
			<Stack className={'anytime-wrapper'}>
				<Stack className={'container'}>
					<Box component={'div'}>
						<span className={'left'}>ANYTIME. ANYWHERE.</span>
						<p className={'right'}>
							Embark on an international journey into the lives of our vibrant collectors, where the luxury of time
							reflects a well-lived life.
						</p>
					</Box>
				</Stack>
			</Stack>
		);
	}
};

export default AnytimeWrap;
