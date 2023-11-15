import { get } from "lodash";
import { IEntity } from './types';

export const User = (item?: any): IEntity.User => ({
  id: get(item, '_id') || '',
  name: get(item, 'name') || '',
  email: get(item, 'email' || '')
});
