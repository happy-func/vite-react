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
} from '@mui/material';
import Icon from '@mui/material/Icon';
import { ExpandMore } from '@mui/icons-material';
import React from 'react';

import { MenuItem as MenuItemProps } from '@/store/action';

export default function MenuItem({
  route,
  open = true,
  onSelect
}: {
  route: MenuItemProps;
  open: boolean;
  onSelect: (key: string | number) => void;
}) {
  const onClick = () => onSelect && onSelect(route.name);
  return (
    <Accordion
      disableGutters
      sx={{
        boxShadow: `none`,
        '& ::before': {
          opacity: 0
        }
      }}
    >
      <AccordionSummary
        expandIcon={open && route.children?.length && <ExpandMore />}
        onClick={onClick}
      >
        {!!route.meta.icon && <Icon>{route.meta.icon}</Icon>}
        {open && <Typography>{route.meta.title}</Typography>}
      </AccordionSummary>
      {Array.isArray(route.children) && (
        <AccordionDetails
          sx={{
            paddingRight: 0
          }}
        >
          {route.children.map((item) => (
            <MenuItem route={item} open={open} key={item.name} onSelect={onSelect} />
          ))}
        </AccordionDetails>
      )}
    </Accordion>
  );
}
