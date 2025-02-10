import { v4 as uuidv4 } from "uuid";

export const copyPastas = [
    {
        id: uuidv4(),
        title: "Test Title",
        description: "Test Description",
        body: "Create a short summary of the topic. Then a conclusion. Then a list of the key points and descriptions for those key points. Do this for every article I provide. Do not use any formatting (bold, italics, bigger font sizes, etc.), I will copy and past the text and do it myself.",
        output: `Output it in the following way where * indicates a new line:
    [topic code] | [topic title] *
    Summary & Conclusion *
    [summary] *
    [conclusion] *
    Key Points *
    [key points
     - [point title] : [point description] *
    ]`,
    },
];
