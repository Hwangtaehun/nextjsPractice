"use server";
import fs from 'fs';

const path = './data.txt';

export async function GET(request: Request){
    // 파일 읽기
    const content = fs.readFileSync(path, {flag:'a+'}).toString().trim();
    // 읽어온 콘텐츠를 반환한다.
    return new Response(JSON.stringify({content:content}), {
        status: 200,
        headers: {'Content-Type': 'application/json'},
    });
}

export async function POST(request: Request) {
    const body = await request.json();
    fs.appendFileSync(path, body.content + "\n");
    return new Response(
        JSON.stringify({content:'ok'}),
        {
            status: 200,
            headers: {'Content-Type': 'application/json'},
        });
}