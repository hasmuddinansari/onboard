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
    }
}

export const WEBSITE = 'www.eden.com/'

export const STEPS = {
    STEP_1: 'STEP_1',
    STEP_2: 'STEP_2',
    STEP_3: 'STEP_3',
    STEP_4: 'STEP_4',
}

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
        type: 'webiste'
    },
    ],
    STEP_3: [{
        name: "workSpaceName",
        label: "Workspace Name",
        placeholder: "Eden",
        type: 'checkbox'
    }, {
        name: "workSpaceUrl",
        label: "Workspace Url (Optional)",
        placeholder: "Example.com",
        type: 'checkbox'
    }]
}