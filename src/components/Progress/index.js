import "react-step-progress-bar/styles.css";
import { Step, ProgressBar } from "react-step-progress-bar";
import { ALL_STEPS_LIST } from "containers/Form/constants";
import { ChildProgress, CustomProgress } from "./style";


const getStepPosition = (currentStep) => {
    return ALL_STEPS_LIST.findIndex(step => step === currentStep) + 1;
};

export const Progress = ({ currentStep }) => (
    <ProgressBar
        width={500}
        percent={100 * (getStepPosition(currentStep) / ALL_STEPS_LIST.length)}
        filledBackground="#664de5"
        height={2}
    >
        {ALL_STEPS_LIST.map((_, index, arr) => {
            return (
                <Step
                    position={100 * (index / arr.length)}
                    transition="scale"
                    children={({ accomplished }) => (
                        <ChildProgress className='flex-center' accomplished={accomplished}>
                            {accomplished && index+1}
                            {!accomplished && <div className='white-bg flex-center'>
                                {index + 1}
                            </div>}
                        </ChildProgress>
                    )}
                />
            );
        })}
    </ProgressBar>
);

