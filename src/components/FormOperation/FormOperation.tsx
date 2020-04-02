import React, { FC } from 'react'; 
import { useForm, Controller } from 'react-hook-form';
import ruLocale from 'date-fns/locale/ru';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { TextField, Button, Grid, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import { IFormState } from '../../redux/types/operation.types';

interface IFormProps {
  formValues: IFormState,
  saveFormData(data: IFormState): void,
  getFilteredData: (pageNum: number, formData: IFormState) => void;
}

export const FormOperation: FC<IFormProps> = ({ formValues, getFilteredData, saveFormData}): JSX.Element => {
  const classes = useStyles();

  React.useEffect(() => {
    return () => {
      const data = getValues();
      saveFormData(data);
    };
  }, []);

  const { handleSubmit, reset, control, getValues } = useForm<IFormState>({
    defaultValues: formValues,
  });

  const onSubmit = handleSubmit((data: IFormState) => {
    getFilteredData(0, data);
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
