/* eslint-disable prettier/prettier */
import { Menu } from "src/schema/graphql";

export class MenuDao {
    private readonly menus: Menu[] = [];

    constructor(){
        this.generateMenuData();
    }

    generateMenuData(){
        const menuItem =  {
            id: '1',
            items: [{
                id: '1',
                name: 'Soup',
                price: 10    
            },
            {
                id: '2',
                name: 'Salad',
                price: 20
            }]
        };
        this.menus.push(menuItem);
    }

    getMenuById(menuId: string): Menu{
        return this.menus.filter(menu => menu.id === menuId)[0]
    }
}