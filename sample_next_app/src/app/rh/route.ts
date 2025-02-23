"use server";

const url = 'http://localhost:3000/sample.json';

export async function GET(request: Request){
    const result = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await result.json();

    const {searchParams} = new URL(request.url);
    var id = +searchParams.get('id');
    id = id < 0 ? 0 : id >= data.data.length ? data.data.length - 1 : id;
    const item = data.data[id];

    return new Response(JSON.stringify(item), {
        status: 200,
        headers: {'Content-Type': 'application/json'},
    });
}