import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Here you can process the request body
    // For example, you could call an AI service here
    console.log("Received POST request with body:", body);

    return NextResponse.json(
      {
        message: "Successfully processed POST request",
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
