import {
	PropertyBrand,
	PropertyCategory,
	PropertyColor,
	PropertyConnectivity,
	PropertyLocation,
	PropertyStatus,
	PropertyType,
} from '../../enums/property.enum';
import { Direction } from '../../enums/common.enum';

export interface PropertyInput {
	propertyType: PropertyType;
	propertyBrand: PropertyBrand;
	propertyCategory: PropertyCategory;
	propertyLocation: PropertyLocation;
	propertyAddress: string;
	propertyModel: string;
	propertyPrice: number;
	propertySize: number;
	propertyColor: PropertyColor;
	propertyConnectivity?: PropertyConnectivity;
	propertyImages: string[];
	propertyDesc?: string;
	propertyBarter?: boolean;
	propertyRent?: boolean;
	memberId?: string;
	manufacturedAt?: Date;
}

interface PISearch {
	memberId?: string;
	locationList?: PropertyLocation[];
	typeList?: PropertyType[];
	brandsList?: PropertyBrand[];
	options?: string[];
	categoriesList?: PropertyCategory[];
	modelList?: string[];
	colorsList?: PropertyColor[];
	connectivitiesList?: PropertyConnectivity[];
	pricesRange?: Range;
	periodsRange?: PeriodsRange;
	sizesList?: Number[];
	text?: string;
}

export interface PropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: PISearch;
}

interface APISearch {
	propertyStatus?: PropertyStatus;
}

export interface AgentPropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: APISearch;
}

interface ALPISearch {
	propertyStatus?: PropertyStatus;
	propertyLocationList?: PropertyLocation[];
}

export interface AllPropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: ALPISearch;
}

interface Range {
	start: number;
	end: number;
}

interface PeriodsRange {
	start: Date | number;
	end: Date | number;
}
