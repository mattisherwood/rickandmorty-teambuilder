import { GET_CHARACTERS } from "@/lib/queries"
import client from "@/lib/urql-client"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const result = await client.query(GET_CHARACTERS, {}).toPromise()
    console.log("GraphQL query result:", result) // Debugging log

    if (result.error) {
      throw new Error(result.error.message)
    }
    return NextResponse.json(result.data.characters)
  } catch (error) {
    console.error("Error fetching characters:", error)
    return NextResponse.json(
      { error: "Failed to fetch characters" },
      { status: 500 }
    )
  }
}
