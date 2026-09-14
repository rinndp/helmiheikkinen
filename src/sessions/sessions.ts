export type Session = {
    title: string
    credit: Credit
    layout: 'portrait' | 'dynamic' | 'horizontal'
    items: Item[]
}

export type Credit = {
    label: string
    link: string
}

export type Item = {
    src: string
    orientation: 'landscape' | 'portrait'
}

// known orientation per file (checked against actual pixel dimensions)
const orientationByFile: Record<string, Item['orientation']> = {
    '2606_HELMI-HEIKKINEN-A-161.jpg': 'portrait',
    '2606_HELMI-HEIKKINEN-A-182-LARGO.jpg': 'landscape',
    '2606_HELMI-HEIKKINEN-A-218-TENDER-FEELINGS.jpg': 'landscape',
    '2606_HELMI-HEIKKINEN-A-88.jpg': 'portrait',
    '2606_HELMI-HEIKKINEN-B-119.jpg': 'landscape',
    '2606_HELMI-HEIKKINEN-B-5.jpg': 'landscape',
    'IMAGE_1.jpeg': 'landscape',
    'IMAGE_2.jpeg': 'portrait',
    'IMAGE_3.jpeg': 'portrait',
    'IMAGE_4.jpeg': 'portrait',
    'IMAGE_5.jpeg': 'portrait',
    'IMAGE_6.jpeg': 'portrait',
    'IMAGE_7.jpeg': 'portrait',
}

const session1Modules = import.meta.glob('../assets/session1/*.{jpg,jpeg,png}', {
    eager: true,
    query: '?url',
    import: 'default',
}) as Record<string, string>

const session1Images: Item[] = Object.entries(session1Modules).map(([path, src]) => {
    const filename = path.split('/').pop()!
    return { src, orientation: orientationByFile[filename] ?? 'portrait' }
})

const session2Modules = import.meta.glob('../assets/session2/*.{jpg,jpeg,png}', {
    eager: true,
    query: '?url',
    import: 'default',
}) as Record<string, string>

const session2Images: Item[] = Object.entries(session2Modules).map(([path, src]) => {
    const filename = path.split('/').pop()!
    return { src, orientation: orientationByFile[filename] ?? 'portrait' }
})

const session3Modules = import.meta.glob('../assets/session3/*.{jpg,jpeg,png}', {
    eager: true,
    query: '?url',
    import: 'default',
}) as Record<string, string>

const session3Images: Item[] = Object.entries(session3Modules).map(([path, src]) => {
    const filename = path.split('/').pop()!
    return { src, orientation: orientationByFile[filename] ?? 'portrait' }
})


export const sessions: Session[] = [
    {
        title: 'NATURALEZA',
        credit: {
            label: 'Photographer: JP Korpi-Vartiainen',
            link: "https://www.instagram.com/jpkorpivartiainen?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        },
        layout: 'dynamic',
        items: session1Images,
    },
    {
        title: 'COMIENZO',
        credit: {
            label: 'Photographer: Chili Red Dot',
            link: "https://www.instagram.com/chili.red.dot?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        }, layout: 'dynamic',
        items: session2Images,
    },
    {
        title: 'NUEVO',
        credit: {
            label: 'Photographer: Pipsha Captures',
            link: "https://www.instagram.com/pipsacaptures?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        }, layout: 'portrait',
        items: session3Images,
    },
]
