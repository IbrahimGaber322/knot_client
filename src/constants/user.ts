export enum UserType {
  INDIVIDUAL = "INDIVIDUAL",
  BUSINESS = "BUSINESS",
  ADMIN = "ADMIN",
  CUSTOMER_SERVICE = "CUSTOMER_SERVICE",
}

interface User {
  _id: string;

  fullName: string;

  username: string;

  password: string;

  bio: string;

  fcmTokens: string[];

  primaryEmail: string;

  primaryEmailEnabled: boolean;

  primaryPhone: string;

  primaryPhoneEnabled: boolean;

  emails: string[];

  phones: string[];

  type: UserType;
}

export default User;
