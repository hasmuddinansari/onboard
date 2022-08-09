import { Input } from "components/Input"
import { useState } from "react"
import { FORM, HEADERS, NEXT_STEP, STEPS } from "./constants"
import { Heading, Button, CustomForm } from "./style"

export const Form = ({ }) => {
    const [step, setStep] = useState(STEPS.STEP_1)

    const submitForm = (e)=>{
        e.preventDefault()
    }

    const incrementStep = ()=>{
        const nextSteps = NEXT_STEP[step]
        setStep(nextSteps)
    }

    return (
        <div>
            <ul className="flex-justify-center">
                {[1, 2, 3, 4].map(l => (<li className="style-none" key={l}>{l}</li>))}
            </ul>
            {HEADERS[step] && <Heading>
                <p className="title text-center">{HEADERS[step].title}</p>
                <p className="sub-title text-mute text-center">{HEADERS[step].subTitle}</p>
            </Heading>}
            {FORM[step] && <CustomForm onSubmit={submitForm}>
                {FORM[step].map(item => (
                    <Input {...item} />
                ))}
                <Button onClick={incrementStep} className='primary-bg-color'>Create workspace</Button>
            </CustomForm>}
        </div>
    )
}