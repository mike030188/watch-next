import React, { useCallback, useEffect, useState } from 'react';
import {
	Stack,
	Typography,
	Checkbox,
	Button,
	OutlinedInput,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Tooltip,
	IconButton,
} from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import {
	PropertyBrand,
	PropertyCategory,
	PropertyColor,
	PropertyLocation,
	PropertyType,
} from '../../enums/property.enum';
import { PropertiesInquiry } from '../../types/property/property.input';
import { useRouter } from 'next/router';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { propertySize } from '../../config';
import RefreshIcon from '@mui/icons-material/Refresh';

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: '200px',
		},
	},
};

interface FilterType {
	searchFilter: PropertiesInquiry;
	setSearchFilter: any;
	initialInput: PropertiesInquiry;
}

const Filter = (props: FilterType) => {
	const { searchFilter, setSearchFilter, initialInput } = props;
	const device = useDeviceDetect();
	const router = useRouter();
	const [propertyLocation, setPropertyLocation] = useState<PropertyLocation[]>(Object.values(PropertyLocation));
	const [propertyType, setPropertyType] = useState<PropertyType[]>(Object.values(PropertyType));
	const [propertyBrand, setPropertyBrand] = useState<PropertyBrand[]>(Object.values(PropertyBrand));
	const [propertyCategory, setPropertyCategory] = useState<PropertyCategory[]>(Object.values(PropertyCategory));
	const [propertyColor, setPropertyColor] = useState<PropertyColor[]>(Object.values(PropertyColor));
	const [searchText, setSearchText] = useState<string>('');
	const [showMore, setShowMore] = useState<boolean>(false);

	/** LIFECYCLES **/
	useEffect(() => {
		if (searchFilter?.search?.locationList?.length == 0) {
			delete searchFilter.search.locationList;
			setShowMore(false);
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.typeList?.length == 0) {
			delete searchFilter.search.typeList;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.brandsList?.length == 0) {
			delete searchFilter.search.brandsList;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.categoriesList?.length == 0) {
			delete searchFilter.search.categoriesList;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.colorsList?.length == 0) {
			delete searchFilter.search.colorsList;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.sizesList?.length == 0) {
			delete searchFilter.search.sizesList;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.options?.length == 0) {
			delete searchFilter.search.options;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.connectivitiesList?.length == 0) {
			delete searchFilter.search.connectivitiesList;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.locationList) setShowMore(true);
	}, [searchFilter]);

	/** HANDLERS **/
	const propertyLocationSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, locationList: [...(searchFilter?.search?.locationList || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, locationList: [...(searchFilter?.search?.locationList || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.locationList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								locationList: searchFilter?.search?.locationList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								locationList: searchFilter?.search?.locationList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.typeList?.length == 0) {
					alert('error');
				}

				console.log('propertyLocationSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyLocationSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyTypeSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, typeList: [...(searchFilter?.search?.typeList || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, typeList: [...(searchFilter?.search?.typeList || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.typeList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								typeList: searchFilter?.search?.typeList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								typeList: searchFilter?.search?.typeList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.typeList?.length == 0) {
					alert('error');
				}

				console.log('propertyTypeSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyTypeSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyBrandSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, brandsList: [...(searchFilter?.search?.brandsList || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, brandsList: [...(searchFilter?.search?.brandsList || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.brandsList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								brandsList: searchFilter?.search?.brandsList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								brandsList: searchFilter?.search?.brandsList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.brandsList?.length == 0) {
					alert('error');
				}

				console.log('propertyBrandSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyBrandSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyCategorySelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								categoriesList: [...(searchFilter?.search?.categoriesList || []), value],
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								categoriesList: [...(searchFilter?.search?.categoriesList || []), value],
							},
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.categoriesList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								categoriesList: searchFilter?.search?.categoriesList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								categoriesList: searchFilter?.search?.categoriesList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.categoriesList?.length == 0) {
					alert('error');
				}

				console.log('propertyCategorySelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyCategorySelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyColorSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								colorsList: [...(searchFilter?.search?.colorsList || []), value],
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								colorsList: [...(searchFilter?.search?.colorsList || []), value],
							},
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.colorsList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								colorsList: searchFilter?.search?.colorsList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								colorsList: searchFilter?.search?.colorsList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.colorsList?.length == 0) {
					alert('error');
				}

				console.log('propertyColorSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyColorSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertySizeSelectHandler = useCallback(
		async (number: Number) => {
			try {
				if (number != 0) {
					if (searchFilter?.search?.sizesList?.includes(number)) {
						await router.push(
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: {
									...searchFilter.search,
									sizesList: searchFilter?.search?.sizesList?.filter((item: Number) => item !== number),
								},
							})}`,
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: {
									...searchFilter.search,
									sizesList: searchFilter?.search?.sizesList?.filter((item: Number) => item !== number),
								},
							})}`,
							{ scroll: false },
						);
					} else {
						await router.push(
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: { ...searchFilter.search, sizesList: [...(searchFilter?.search?.sizesList || []), number] },
							})}`,
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: { ...searchFilter.search, sizesList: [...(searchFilter?.search?.sizesList || []), number] },
							})}`,
							{ scroll: false },
						);
					}
				} else {
					delete searchFilter?.search.sizesList;
					setSearchFilter({ ...searchFilter });
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
							},
						})}`,
						{ scroll: false },
					);
				}

				console.log('propertySizeSelectHandler:', number);
			} catch (err: any) {
				console.log('ERROR, propertySizeSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyOptionSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, options: [...(searchFilter?.search?.options || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, options: [...(searchFilter?.search?.options || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.options?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								options: searchFilter?.search?.options?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								options: searchFilter?.search?.options?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				console.log('propertyOptionSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyOptionSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyPriceHandler = useCallback(
		async (value: number, type: string) => {
			if (type == 'start') {
				await router.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, start: value * 1 },
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, start: value * 1 },
						},
					})}`,
					{ scroll: false },
				);
			} else {
				await router.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, end: value * 1 },
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, end: value * 1 },
						},
					})}`,
					{ scroll: false },
				);
			}
		},
		[searchFilter],
	);

	const refreshHandler = async () => {
		try {
			setSearchText('');
			await router.push(
				`/property?input=${JSON.stringify(initialInput)}`,
				`/property?input=${JSON.stringify(initialInput)}`,
				{ scroll: false },
			);
		} catch (err: any) {
			console.log('ERROR, refreshHandler:', err);
		}
	};

	if (device === 'mobile') {
		return <div>PROPERTIES FILTER</div>;
	} else {
		return (
			<Stack className={'filter-main'}>
				<Stack className={'find-your-home'} mb={'40px'}>
					<Typography className={'title-main'}>Find Your Luxury-Watches</Typography>
					<Stack className={'input-box'}>
						<OutlinedInput
							value={searchText}
							type={'text'}
							className={'search-input'}
							placeholder={'What are you looking for?'}
							onChange={(e: any) => setSearchText(e.target.value)}
							onKeyDown={(event: any) => {
								if (event.key == 'Enter') {
									setSearchFilter({
										...searchFilter,
										search: { ...searchFilter.search, text: searchText },
									});
								}
							}}
							endAdornment={
								<>
									<CancelRoundedIcon
										onClick={() => {
											setSearchText('');
											setSearchFilter({
												...searchFilter,
												search: { ...searchFilter.search, text: '' },
											});
										}}
									/>
								</>
							}
						/>
						<img src={'/img/icons/search_icon.png'} alt={''} />
						<Tooltip title="Reset">
							<IconButton onClick={refreshHandler}>
								<RefreshIcon />
							</IconButton>
						</Tooltip>
					</Stack>
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<p className={'title'}>Location</p>
					<Stack
						className={`property-location`}
						style={{ height: showMore ? '253px' : '115px' }}
						onMouseEnter={() => setShowMore(true)}
						onMouseLeave={() => {
							if (!searchFilter?.search?.locationList) {
								setShowMore(false);
							}
						}}
					>
						{propertyLocation.map((location: string) => {
							return (
								<Stack className={'input-box'} key={location}>
									<Checkbox
										id={location}
										className="property-checkbox"
										color="default"
										size="small"
										value={location}
										checked={(searchFilter?.search?.locationList || []).includes(location as PropertyLocation)}
										onChange={propertyLocationSelectHandler}
									/>
									<label htmlFor={location} style={{ cursor: 'pointer' }}>
										<Typography className="property-type">{location}</Typography>
									</label>
								</Stack>
							);
						})}
					</Stack>
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Product Type</Typography>
					{propertyType.map((type: string) => (
						<Stack className={'input-box'} key={type}>
							<Checkbox
								id={type}
								className="property-checkbox"
								color="default"
								size="small"
								value={type}
								onChange={propertyTypeSelectHandler}
								checked={(searchFilter?.search?.typeList || []).includes(type as PropertyType)}
							/>
							<label style={{ cursor: 'pointer' }}>
								<Typography className="property-type">{type}</Typography>
							</label>
						</Stack>
					))}
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Product Brands</Typography>
					{propertyBrand.map((brand: string) => (
						<Stack className={'input-box'} key={brand}>
							<Checkbox
								id={brand}
								className="property-checkbox"
								color="default"
								size="small"
								value={brand}
								onChange={propertyBrandSelectHandler}
								checked={(searchFilter?.search?.brandsList || []).includes(brand as PropertyBrand)}
							/>
							<label style={{ cursor: 'pointer' }}>
								<Typography className="property-brand">{brand}</Typography>
							</label>
						</Stack>
					))}
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Product Category</Typography>
					{propertyCategory.map((category: string) => (
						<Stack className={'input-box'} key={category}>
							<Checkbox
								id={category}
								className="property-checkbox"
								color="default"
								size="small"
								value={category}
								onChange={propertyCategorySelectHandler}
								checked={(searchFilter?.search?.categoriesList || []).includes(category as PropertyCategory)}
							/>
							<label style={{ cursor: 'pointer' }}>
								<Typography className="property-category">{category}</Typography>
							</label>
						</Stack>
					))}
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Product Colors</Typography>
					{propertyColor.map((color: string) => (
						<Stack className={'input-box'} key={color}>
							<Checkbox
								id={color}
								className="property-checkbox"
								color="default"
								size="small"
								value={color}
								onChange={propertyColorSelectHandler}
								checked={(searchFilter?.search?.colorsList || []).includes(color as PropertyColor)}
							/>
							<label style={{ cursor: 'pointer' }}>
								<Typography className="property-color">{color}</Typography>
							</label>
						</Stack>
					))}
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Sizes, mm</Typography>
					<Stack className="button-group">
						<Button
							sx={{
								borderRadius: '12px 0 0 12px',
								border: !searchFilter?.search?.sizesList ? '2px solid #181A20' : '1px solid #b9b9b9',
							}}
							onClick={() => propertySizeSelectHandler(0)}
						>
							Any
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.sizesList?.includes(1) ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.sizesList?.includes(1) ? undefined : 'none',
							}}
							onClick={() => propertySizeSelectHandler(36)}
						>
							36
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.sizesList?.includes(2) ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.sizesList?.includes(2) ? undefined : 'none',
							}}
							onClick={() => propertySizeSelectHandler(38)}
						>
							38
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.sizesList?.includes(3) ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.sizesList?.includes(3) ? undefined : 'none',
							}}
							onClick={() => propertySizeSelectHandler(40)}
						>
							40
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.sizesList?.includes(4) ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.sizesList?.includes(4) ? undefined : 'none',
								borderRight: searchFilter?.search?.sizesList?.includes(4) ? undefined : 'none',
							}}
							onClick={() => propertySizeSelectHandler(42)}
						>
							42
						</Button>
						<Button
							sx={{
								borderRadius: '0 12px 12px 0',
								border: searchFilter?.search?.sizesList?.includes(5) ? '2px solid #181A20' : '1px solid #b9b9b9',
							}}
							onClick={() => propertySizeSelectHandler(44)}
						>
							44
						</Button>
					</Stack>
				</Stack>

				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Options</Typography>
					<Stack className={'input-box'}>
						<Checkbox
							id={'Barter'}
							className="property-checkbox"
							color="default"
							size="small"
							value={'propertyBarter'}
							checked={(searchFilter?.search?.options || []).includes('propertyBarter')}
							onChange={propertyOptionSelectHandler}
						/>
						<label htmlFor={'Barter'} style={{ cursor: 'pointer' }}>
							<Typography className="propert-type">Barter</Typography>
						</label>
					</Stack>
					<Stack className={'input-box'}>
						<Checkbox
							id={'Rent'}
							className="property-checkbox"
							color="default"
							size="small"
							value={'propertyRent'}
							checked={(searchFilter?.search?.options || []).includes('propertyRent')}
							onChange={propertyOptionSelectHandler}
						/>
						<label htmlFor={'Rent'} style={{ cursor: 'pointer' }}>
							<Typography className="propert-type">Rent</Typography>
						</label>
					</Stack>
				</Stack>

				<Stack className={'find-your-home'}>
					<Typography className={'title'}>Price Range</Typography>
					<Stack className="square-year-input">
						<input
							type="number"
							placeholder="$ min"
							min={0}
							value={searchFilter?.search?.pricesRange?.start ?? 0}
							onChange={(e: any) => {
								if (e.target.value >= 0) {
									propertyPriceHandler(e.target.value, 'start');
								}
							}}
						/>
						<div className="central-divider"></div>
						<input
							type="number"
							placeholder="$ max"
							value={searchFilter?.search?.pricesRange?.end ?? 0}
							onChange={(e: any) => {
								if (e.target.value >= 0) {
									propertyPriceHandler(e.target.value, 'end');
								}
							}}
						/>
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

export default Filter;
