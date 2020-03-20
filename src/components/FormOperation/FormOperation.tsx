//import 'date-fns';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ruLocale from 'date-fns/locale/ru';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { TextField, Button, Grid, Paper } from '@material-ui/core';
import { useStyles } from './styles';

export const FormOperation = ({ getFilteredData }: any) => {
  const { handleSubmit, reset, control } = useForm();
  const classes = useStyles();

  return (
    <Paper>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
        <form onSubmit={handleSubmit(getFilteredData)} className={classes.root}>
          <Grid container direction="column">
            <Grid item className="formRow">
              <Controller
                as={DatePicker}
                name="dateFrom"
                control={control}
                value=""
                initialFocusedDate=""
                invalidDateMessage="Неправильная дата"
                maxDateMessage=""
                minDateMessage=""
                format="dd.MM.yyyy"
                // defaultValue={format(new Date(), 'yyyy-MM-dd')}
                //rules={{ required: "Введите начальную дату" }}
                label="Начальная дата"
                variant="outlined"
                margin="dense"
              />
              <Controller
                as={TextField}
                name="timeFrom"
                type="time"
                defaultValue="00:00:00"
                //rules={{ validate: value => {console.log(value); return 'Введите время начала' }}}
                control={control}
                label="Время нач."
                variant="outlined"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 1 }}
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
                // defaultValue={format(new Date(), 'HH:mm:ss')}
                defaultValue="23:59:59"
                // rules={{ required: true }}
                control={control}
                label="Время кон."
                variant="outlined"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 1 }}
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
                name="transSum"
                type="number"
                defaultValue=""
                control={control}
                label="Тран. сумма"
                variant="outlined"
                margin="dense"
              />
              <Controller
                as={TextField}
                name="merchant"
                defaultValue=""
                control={control}
                label="Мерчант"
                variant="outlined"
                margin="dense"
              />
              <Controller
                as={TextField}
                name="authCode"
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
