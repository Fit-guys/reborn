import React from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  Typography,
  Step,
  Stepper,
  StepLabel,
  StepContent,
  Button,
  Paper,
} from '@material-ui/core';

import styles from './userProgress.styles';
import StepIcon from './StepIcon';

function getSteps() {
  return [
    'Рівень 1: знайомство з професією',
    'Рівень 2: що мені варто вивчати?',
    'Рівень 3: бакалавр чи магістр?',
    'Рівень 4: де я можу знайти роботу?',
    'Рівень 5: співбесіда з роботодавцем',
    'Рівень 6: професійний розвиток',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Інженерія програмного забезпечення – спеціальність, спрямована на розробку програмних систем, які працюють надійно та ефективно, вартість розробки та супроводу яких є доступною, і які задовольняють вимогам, висунутим до них замовниками. Сьогодні фахівці з інженерії програмного забезпечення є найбільш затребуваними на ринку праці серед інших фахівців з інформаційних технологій, вони беруть участь у розробці вітчизняних і міжнародних програмних проектів, і мають гідну оплату своєї праці. Попит на фахівців з інженерії програмного забезпечення у майбутньому тільки зростатиме!';
    case 1:
      return 'Кожен інженер повиннен мати фундаментальні знання з програмування, основ математики, алгоритмів, чисельних методів, архітектури проектування програмного забезпечення, проектування баз даних. Також слід звернути уваги на такі дисципліни: лінійна алгебра та аналітична геометрія, математичний аналіз, дискретні структури, теорія ймовірності та математична статистика. Інші дисципліни також рекомендовані до поглибленого вивчення на факультеті, але вони не є настільки необхідними для розробника ПЗ.';
    case 2:
      return 'Насправді, отримати необхіодне теоретичне підгрунтя можна за 4 роки, тобто отримавши освітній рівень «бакалавр». На факультеті рекомендується самостійно вивчати додатковий матеріал та намагатися застосовувати набуті знання практично. Оскільки ті практичні основи, які Ви отримаєте впродовж навчання, їх буде недостатньо для застосування у реальних задачах.';
    case 3:
      return 'В Україні багато IT-компаній, в які Ви можете спробувати подати резюме з метою подальшого працевлаштування. Epam, SoftServe, GlobalLogic, Luxoft, Ciklum, Grammarly, Infopulse, NIX Solution Ltd., ELEKS, EVOPLAY та багато інших надають можливості отримати старт у сфері IT та перший практичний досвід. Ви повинні володіти фундаментальними знаннями з програмування та дійсно знати багато профільного матеріалу.';
    case 4:
      return 'Якщо Ви зібралися пройти першу співбесіду, необхідно бути впевненим у своїх знаннях. Спробуйте потренувати вдома своє представлення, розкажіть про себе, про знання та здобутки, яких Ви досягли. Рекомендуємо ознайомитися в інтернеті з типовими запитаннями на співбесіді, та помилками, яких припускаються кандидати на роботу.';
    case 5:
      return "Рекомендуємо Вам відвідувати різноманітні практичні заняття, семінари та тренінги відомих IT-спецалістів для підвищення своєї кваліфікації та набуття нових знань. Запам'ятайте, що Вам необхідно постійно вдосконалюватись та розвиватись, оскільки майже щодня з'являються нові тренди у сфері IT.";
    default:
      return 'Unknown step';
  }
}

class UserProgress extends React.Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    activeStep: this.props.story[this.props.story.length - 1].id,
  };

  componentDidMount() {
    const { story } = this.props;
    this.setState({ activeStep: story[story.length - 1].game_id });
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes, story } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical" connector={null}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={props => (
                  <StepIcon
                    {...props}
                    story={story}
                    onClick={(n) => { this.setState({ activeStep: n }); }}
                  />
                )}
                StepIconProps={{ text: String(index) }}
                classes={{ iconContainer: classes.stepIconContainer, root: classes.SLRoot }}
              >
                <Typography
                  color="primary"
                  variant="h5"
                  style={{ fontWeight: 'bold', padding: '20px' }}
                >
                  {label}
                </Typography>
              </StepLabel>
              <StepContent style={{
                marginLeft: '30px',
                marginTop: '0px',
                padding: '0px  0px 20px 80px',
                borderWidth: '10px',
                borderColor: story[story.length - 1].game_id >= (Number(index) - 1) ? '#250E2B' : 'gray',
              }}
              >
                <Typography variant="h6" color="primary">{getStepContent(index)}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

UserProgress.propTypes = {
  classes: PropTypes.object.isRequired,
  story: PropTypes.array.isRequired,
};

export default withStyles(styles)(UserProgress);
