import { useState } from "react"
import { Input } from "components/Input"
import { Progress } from "components/Progress"
import { BUTTON_TEXT, FORM, HEADERS, NEXT_STEP, STEPS, SUBMIT_HEADER } from "./constants"
import { Heading, Button, CustomForm, Title, SubTitle, Success } from "./style"

export const Form = ({ }) => {
    const [step, setStep] = useState(STEPS.STEP_1)
    const [form, setForm] = useState({})

    const onChange = (e)=>{
        const {value, name } = e.target
        setForm(prev=>({...prev, [name]:value}))
    }
    const onItemClick = ({ fieldName, value })=>{
        setForm(prev => ({ ...prev, [fieldName]: value }))
    }

    const incrementStep = () => {
        const nextSteps = NEXT_STEP[step]
        if(nextSteps!==STEPS.SUBMIT){
            setStep(nextSteps)
            return
        }
        setStep(STEPS.STEP_1)
    }

    const submitForm = (e) => {
        e.preventDefault()
        incrementStep()
    }

    return (
        <div>
            <div className="flex-center py-10">
                <Progress currentStep={step} />
            </div>
            {HEADERS[step] && <Heading>
                <Title className="title text-center">{HEADERS[step].title}</Title>
                <SubTitle className="sub-title text-mute text-center">{HEADERS[step].subTitle}</SubTitle>
            </Heading>}
            <CustomForm onSubmit={submitForm}>
                {step !== STEPS.STEP_4 && FORM[step].map(item => (
                    <Input key={item.name} {...item} onChange={onChange} form={form} onClick={onItemClick}/>
                ))}
                {step === STEPS.STEP_4 && (
                    <div>
                        <div className="flex-center">
                            <Success className='flex-center'>&#10003;</Success>
                        </div>
                        <Heading>
                            <Title className="title text-center">{SUBMIT_HEADER[step].title.replace("#Eden", form.fullName || "Eden")}</Title>
                            <SubTitle className="sub-title text-mute text-center">{SUBMIT_HEADER[step].subTitle}</SubTitle>
                        </Heading>
                    </div>)
                }
                <Button type="submit" className='primary-bg-color'>{
                    step === STEPS.STEP_4 ? BUTTON_TEXT.launch : BUTTON_TEXT.default
                }</Button>
            </CustomForm>
        </div>
    )
}
