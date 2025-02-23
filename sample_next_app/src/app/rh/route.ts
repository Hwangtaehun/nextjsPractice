"use server";
import fs from 'fs';

const path = './form.txt';

export async function GET(request: Request){
    // 파일 읽기
    const content = fs.readFileSync(path, {flag:'a+'}).toString().trim();
    // 읽어온 콘텐츠를 반환한다.
    return new Response(JSON.stringify({content:content.toString()}), {
        status: 200,
        headers: {'Content-Type': 'application/json'},
    });
}

export async function POST(request: Request) {
    void request;
    const formData = await request.formData();
    const name = formData.get('name');
    const pass = formData.get('pass');
    const content = "NAME: " + name + '\n' + "PASS: " + pass;
    fs.writeFileSync(path, content);
    return new Response({status: 'ok'})
}