//import 'date-fns';
import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ruLocale from 'date-fns/locale/ru';
import { parse, format, getUnixTime } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { TextField, Button, Grid, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import { IFormState, IFormRequest } from '../../redux/types/operation.types';

interface IFormProps {
  getFilteredData: (formData: IFormRequest) => void;
}

export const FormOperation: FC<IFormProps> = ({ getFilteredData }): JSX.Element => {
  const classes = useStyles();
  const { handleSubmit, reset, control, setValue } = useForm<IFormState>({
    defaultValues: {
      dateFrom: new Date().setHours(0, 0, 0, 0),
      timeFrom: '00:00:00',
      dateEnd: new Date().setHours(0, 0, 0, 0),
      timeEnd: '23:59:59',
    },
  });

  const onSubmit = handleSubmit((data: IFormState) => {
    const { dateFrom, timeFrom, dateEnd, timeEnd, ...otherData } = data;

    const startTimestamp = getUnixTime(
      parse(format(dateFrom, 'dd.MM.yyyy') + ' ' + timeFrom, 'dd.MM.yyyy HH:mm:ss', new Date())
    );
    const endTimestamp = getUnixTime(
      parse(format(dateEnd, 'dd.MM.yyyy') + ' ' + timeEnd, 'dd.MM.yyyy HH:mm:ss', new Date())
    );
    const formData = { ...otherData, startTimestamp, endTimestamp };
    getFilteredData(formData);
  });

  //Добавление секунд при отправке
  const handleChangeTime = ([event]: any) => {
    let time = event.target.value;

    if (time.length < 6) {
      // missing :ss on chrome
       time += ':00';
    }
    return time;
  };

  return (
    <Paper>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
        <form onSubmit={onSubmit} className={classes.root} noValidate={true}>
          <Grid container direction="column">
            <Grid item className="formRow">
              <Controller
                as={DatePicker}
                name="dateFrom"
                control={control}
                initialFocusedDate=""
                invalidDateMessage="Неправильная дата"
                maxDateMessage=""
                minDateMessage=""
                format="dd.MM.yyyy"
                label="Начальная дата"
                variant="outlined"
                margin="dense"
              />
              <Controller
                as={TextField}
                name="timeFrom"
                type="time"
                control={control}
                label="Время"
                variant="outlined"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 1, autoComplete: 'off', mask: '__:__:__' }}
                onChange={handleChangeTime}
                defaultValue=""
              />
              <Controller
                as={DatePicker}
                name="dateEnd"
                control={control}
                invalidDateMessage="Неправильная дата"
                maxDateMessage=""
                minDateMessage=""
                format="dd.MM.yyyy"
                label="Конечная дата"
                variant="outlined"
                margin="dense"
              />
              <Controller
                as={TextField}
                name="timeEnd"
                type="time"
                control={control}
                label="Время"
                variant="outlined"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 1, autoComplete: 'off', mask: '__:__:__' }}
                onChange={handleChangeTime}
                defaultValue=""
              />
              <Controller
                as={TextField}
                name="rrn"
                type="number"
                defaultValue=""
                control={control}
                label="RRN"
                variant="outlined"
                margin="dense"
              />
            </Grid>
            <Grid item className="formRow">
              <Controller
                as={TextField}
                name="pan"
                type="number"
                defaultValue=""
                control={control}
                label="PAN / DPAN"
                variant="outlined"
                margin="dense"
              />
              <Controller
                as={TextField}
                name="amount"
                type="number"
                defaultValue=""
                control={control}
                label="Тран. сумма"
                variant="outlined"
                margin="dense"
              />
              <Controller
                as={TextField}
                name="merchantId"
                defaultValue=""
                control={control}
                label="Мерчант"
                variant="outlined"
                margin="dense"
              />
              <Controller
                as={TextField}
                name="authorizationCode"
                defaultValue=""
                control={control}
                label="Код авторизации"
                variant="outlined"
                margin="dense"
              />
            </Grid>
          </Grid>
          <div className="formActions">
            <Button variant="contained" color="primary" type="submit">
              Поиск
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={() => {
                console.log('reset');
                reset({ dateFrom: undefined });
              }}
            >
              Сбросить
            </Button>
            <Button variant="contained" type="reset">
              Сбросить Даты
            </Button>
          </div>
        </form>
      </MuiPickersUtilsProvider>
    </Paper>
  );
};
