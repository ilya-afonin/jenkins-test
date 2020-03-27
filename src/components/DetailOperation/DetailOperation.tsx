//import 'date-fns';
import React, { FC, useState } from 'react';
import { Grid, Paper, Checkbox } from '@material-ui/core';
import { useStyles, StyledTabs, StyledTab, StyledTabPanel } from './styles';
import { detailConfig } from './config';

interface IDetailProps {
  dataDetail: any | {};
}

const TabProps = (index: any) => {
  return {
    'id': `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
};

export const DetailOperation: FC<IDetailProps> = ({ dataDetail }): JSX.Element => {
  const classes = useStyles();
  const [tabIndex, setActive] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setActive(newIndex);
  };

  const renderColumns = (): Array<JSX.Element> => {
    const keys: string[] = Object.keys(detailConfig);
    return keys.map((key: string) => (
      <Grid item className={classes.column} key={key}>
        {detailConfig[key].map((column: any, i: any) => {
          if (column instanceof Array) {
            return (
              <div>
                {column.map(({ title, field }, idx: number) => {
                  return (
                    <dl key={idx}>
                      <dt>{title}</dt>
                      <dd>{dataDetail[field]}</dd>
                    </dl>
                  );
                })}
              </div>
            );
          } else {
            let value = dataDetail[column.field];
            if (column.field === 'tokenized') {
              value = <Checkbox disabled checked={dataDetail[column.field]} />;
            }
            return (
              <dl key={i}>
                <dt>{column.title}</dt>
                <dd>{value}</dd>
              </dl>
            );
          }
        })}
      </Grid>
    ));
  };

  return (
    <Paper>
      <StyledTabs value={tabIndex} onChange={handleChange} aria-label="Детальная информация">
        <StyledTab label="Основные детали" {...TabProps(0)} />
        <StyledTab label="Дополнительные" {...TabProps(1)} />
      </StyledTabs>
      <StyledTabPanel value={tabIndex} index={0}>
        <div className={classes.grid}>{renderColumns()}</div>
      </StyledTabPanel>
      <StyledTabPanel value={tabIndex} index={1}>
        <div className={classes.grid}>Test tab</div>
      </StyledTabPanel>
    </Paper>
  );
};
