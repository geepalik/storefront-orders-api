/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Menu } from 'src/schema/graphql';
import { MenuDao } from './menu.dao';

@Injectable()
export class MenuService {
    constructor(private menuDao: MenuDao) {}

    getMenuById(menuId: string): Menu{
        return this.menuDao.getMenuById(menuId);
    }
}
