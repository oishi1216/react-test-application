import { Page1DetailA } from "../Page1DetailA"
import { Page1DetailB } from "../Page1DetailB"


export const page1Routes = [
    {
        path: "Page1DetailA",
        children: <Page1DetailA />
    },
    {
        path: "Page1DetailB",
        children: <Page1DetailB />
    },
]