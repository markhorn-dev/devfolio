// example server api route for email

export async function POST({ request }) {
    const requestBody = await request.json();

    //payload from front-end
    const { name, email, subject, message } = requestBody;

    //invoke your email api here
    
    //return response to front-end
    return new Response(JSON.stringify(
        "Implement your back-end in /api/email"
    ), { status: 200 });
}