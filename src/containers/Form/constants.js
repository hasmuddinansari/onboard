import Single from 'template/images/single.png'
import Group from 'template/images/group.png'

export const HEADERS = {
    STEP_1: {
        title: 'Welcome! First things first...',
        subTitle: 'You can always change them later.'
    },
    STEP_2: {
        title: "Let's set up a home for all your work",
        subTitle: 'You can always create another workspace later.'
    },
    STEP_3: {
        title: "How are you planning to use Eden?",
        subTitle: "We'll streamline your setup experience accordingly."
    },
}

export const SUBMIT_HEADER = {
    STEP_4: {
        title: "Congratulation #Eden!",
        subTitle: "You have completed onboarding, you can start using the Eden!"
    }
}

export const WEBSITE = 'www.eden.com/'

export const BUTTON_TEXT = {
    default:'Create Workspace',
    launch:'Launch Eden'
}

export const STEPS = {
    STEP_1: 'STEP_1',
    STEP_2: 'STEP_2',
    STEP_3: 'STEP_3',
    STEP_4: 'STEP_4',
    SUBMIT:'SUBMIT'
}

const { SUBMIT, ...ALL_STEPS } = STEPS
export const ALL_STEPS_LIST = Object.keys(ALL_STEPS)

export const NEXT_STEP = {
    STEP_1: 'STEP_2',
    STEP_2: 'STEP_3',
    STEP_3: 'STEP_4',
    STEP_4: 'SUBMIT',
}


export const FORM = {
    STEP_1: [{
        name: "fullName",
        label: "Full Name",
        placeholder: "Steve Jobs",
    }, {
        name: "displayName",
        label: "Display Name",
        placeholder: "Steve",
    }],
    STEP_2: [{
        name: "workSpaceName",
        label: "Workspace Name",
        placeholder: "Eden",
    }, {
        name: "workSpaceUrl",
        label: "Workspace Url (Optional)",
        placeholder: "Example.com",
        type: 'website'
    },
    ],
    STEP_3: [{
        type:'groupCheckBox',
        elements:[
            {
                name:'single',
                icon: Single,
                heading: "For myself",
                subHeading: "Write better. Think more clearly. Stay oraganized.",
            }, {
                name:"group",
                icon:Group,
                name: "workSpaceUrl",
                heading: "With My team",
                subHeading: "Wikis, docs, tasks & projects. all in one place",
            }
        ]
    }]
}