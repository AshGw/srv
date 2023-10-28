export async function POST(req: Request) {  
    try {
        const { value } = await req.json();
        let res = await fetch('https://jolly-still-lark.ngrok-free.app/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer f8ae9e72a17052cee5bffb816fc724e3b9273c02e3f3483a95df4e98a9cce2b2',
            },
            body: JSON.stringify({ prompt: value }),
        });

        if (!res.ok) {
            return {
                error: "Some error happened on our server side",
            };
        }

        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const data = await res.json();
            return data;
        } else if (contentType && contentType.includes('image/jpeg')) {
            const blob = await res.blob();
            return new Response(blob, { headers: { 'Content-Type': 'image/jpeg' } });
        } else {
            return {
                error: `Unexpected content type: ${contentType}`,
            };
        }
    } catch (error) {
        return {
            error: `Unexpected error: ${error}`,
        };
    }
}

(async () => {
    let value = 'a pic of';
    let res = await fetch('https://jolly-still-lark.ngrok-free.app/generate/api/generate', {
        method: 'POST',
        body: JSON.stringify({ value: value }),
    });
    console.log(res);
})();
