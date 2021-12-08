/*
* @file: 侧边栏导航菜单
  @author: Ryan Zhang(stevenhanth@gmail.com)
  @time: 2021-12-01 21:23:56
* */

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';

import { MenuItem as MenuItemProps } from '@/store/action';

export default function MenuItem({
  route,
  open = true,
}: {
  route: MenuItemProps;
  open: boolean;
}) {
  return (
    <Accordion disableGutters>
      <AccordionSummary expandIcon={open && <ExpandMore />}>
        {!!route.meta.icon && <Icon>{route.meta.icon}</Icon>}
        {open && <Typography>{route.meta.title}</Typography>}
      </AccordionSummary>
      {Array.isArray(route.children) && (
        <AccordionDetails>
          {route.children.map((item) => (
            <MenuItem route={item} {...item} open={open} key={item.name} />
          ))}
        </AccordionDetails>
      )}
    </Accordion>
  );
}
