import {
	PropertyBrand,
	PropertyCategory,
	PropertyColor,
	PropertyConnectivity,
	PropertyLocation,
	PropertyStatus,
	PropertyType,
} from '../../enums/property.enum';

export interface PropertyUpdate {
	_id: string;
	propertyType?: PropertyType;
	propertyBrand: PropertyBrand;
	propertyCategory: PropertyCategory;
	propertyStatus?: PropertyStatus;
	propertyLocation?: PropertyLocation;
	propertyAddress?: string;
	propertyModel: string;
	propertyPrice: number;
	propertySize: number;
	propertyColor: PropertyColor;
	propertyConnectivity?: PropertyConnectivity;
	propertyImages?: string[];
	propertyDesc?: string;
	propertyBarter?: boolean;
	propertyRent?: boolean;
	soldAt?: Date;
	deletedAt?: Date;
	manufacturedAt?: Date;
}
