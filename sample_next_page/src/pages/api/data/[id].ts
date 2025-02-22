import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string,
    mail: string,
    age: number
};

const data = [
    {"name":"kim","mail":"kim@gilbut","age":"39"},
    {"name":"lee","mail":"lee@flower","age":"28"},
    {"name":"park","mail":"park@happy","age":"17"},
    {"name":"joe","mail":"joe@change","age":"6"}
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    var id = +req.query.id;
    id = id < 0 ? 0 : id >= data.length ? data.length - 1 : id;
    const result = data[id];
    res.status(200).json(result);
}