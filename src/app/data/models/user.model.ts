export interface UserResponse {
	gender: string;
	name: UserName;
	location: UserLocation;
	email: string;
	login: UserLogin;
	dob: UserDateOfBirth;
	registered: UserRegistration;
	phone: string;
	cell: string;
	id: UserId;
	picture: UserPicture;
	nat: string;
}

export interface UserName {
	title: string;
	first: string;
	last: string;
}

export interface UserLocation {
	street: UserStreet;
	city: string;
	state: string;
	country: string;
	postcode: number | string; // Handled as both since postcodes can vary
	coordinates: UserCoordinates;
	timezone: UserTimezone;
}

export interface UserStreet {
	number: number;
	name: string;
}

export interface UserCoordinates {
	latitude: string;
	longitude: string;
}

export interface UserTimezone {
	offset: string;
	description: string;
}

export interface UserLogin {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: string;
	sha1: string;
	sha256: string;
}

export interface UserDateOfBirth {
	date: string; // ISO Date String
	age: number;
}

export interface UserRegistration {
	date: string; // ISO Date String
	age: number;
}

export interface UserId {
	name: string;
	value: string | null;
}

export interface UserPicture {
	large: string;
	medium: string;
	thumbnail: string;
}
