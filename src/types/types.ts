import { string } from 'yup';
import { SocialiteIconEnums, ElementIconEnums, CrudIconEnums } from '../enums/enums';

export type Socialite = {
  name: string;
  icon: SocialiteIconEnums;
};
export type Crud = {
  name: string;
  icon: CrudIconEnums;
};

export type Folder = {
  Title: string;
};
export type search = {
  data: string[];
  placeholder: string;
};
export type Sidebarelement = {
  name: string;
  icon: ElementIconEnums;
  data: any[];
};
