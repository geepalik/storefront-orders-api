import { Module } from '@nestjs/common';
import { MenuDao } from './menu.dao';
import { MenuService } from './menu.service';

@Module({
  providers: [MenuService, MenuDao],
  exports: [MenuService],
})
export class MenuModule {}
