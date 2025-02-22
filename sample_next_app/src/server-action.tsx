"use server";
const url = 'http://localhost:3000/sample.json';

export async function serverAction() {
    const resp = await fetch(
        url,
        {cache: 'no-store'}
    );

    const result = await resp.json();
    console.log("Get message!");
    console.log(result.message);
}